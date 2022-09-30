/* eslint no-console:0 */

'use strict';

const debug = require('debug')('log4js:redguy-logging');
const RG = require("../").RedGuyApi;
const WS = require("ws");

/**
 * Redguy Logging Appender. Sends logging events to redguy api
 *
 * @param config object with configuration data
 * {
 *   token: token,
 *   service: service id,
 *   ws: boolean
 * }
 * @param layout a function that takes a logevent and returns a string (defaults to objectLayout).
 */
function rgAppender(config, layout) {
    debug('creating appender.');
    let queue = [];
    let app;
    let queueTimer = null;

    if(config.ws) {
        let recreate = true;
        let ws = new WS.WebSocket("wss://api.redguy.ru/ws/logging/?accessToken="+config.token);

        function reconnect() {
            if(!recreate) return;
            debug("Reconnecting to websocket")
            ws = new WS.WebSocket("wss://api.redguy.ru/ws/logging/?accessToken="+config.token);
            ws.on("close", () => reconnect());
            ws.on("open", () => debug("Reconnected to websocket"));
        }
        ws.on("close",() => reconnect());
        ws.on("open", () => debug("Connected to websocket"));

        app = function(loggingEvent) {
            if(ws.readyState === ws.OPEN) {
                debug('Sending log event to redguy api');
                ws.send(JSON.stringify({
                    "type": "write",
                    "service": config.service,
                    "category": loggingEvent.categoryName,
                    "content": layout(loggingEvent),
                    "level": loggingEvent.level.levelStr
                }));
                let q = queue;
                queue = [];
                while (q.length > 0) {
                    let e = q.shift();
                    if(ws.readyState === ws.OPEN) {
                        ws.send(JSON.stringify({
                            "type": "write",
                            "service": config.service,
                            "category": e.categoryName,
                            "content": layout(e),
                            "level": e.level.levelStr
                        }));
                    } else {
                        q.unshift(e);
                        queue.unshift(q);
                        break;
                    }
                }
            } else {
                debug('Queueing log event');
                queue.push(loggingEvent);
            }
        }

        queueTimer = setInterval(() => {
            debug("Flushing queue");
            let q = queue;
            queue = [];
            while (q.length > 0) {
                let e = q.shift();
                if(ws.readyState === ws.OPEN) {
                    ws.send(JSON.stringify({
                        "type": "write",
                        "service": config.service,
                        "category": e.categoryName,
                        "content": layout(e),
                        "level": e.level.levelStr
                    }));
                } else {
                    q.unshift(e);
                    queue.unshift(q);
                    break;
                }
            }
        }, 60000)

        app.shutdown = function (cb) {
            debug('Shutdown called');
            recreate = false;
            ws.close();
            clearInterval(queueTimer);
            cb();
        };
    } else {
        let client = new RG(config.token).Logs();

        app = function(loggingEvent) {
            debug('sending log event to redguy api');
            client.write(config.service, loggingEvent.level.levelStr, layout(loggingEvent), loggingEvent.categoryName)
                .then(() => {
                    debug('log event sent to redguy api');
                    sendQueue();
                }).catch((err) => {
                    queue.push(loggingEvent);
                debug(err);
            });
        }

        async function sendQueue() {
            let q = queue;
            queue = [];
            while (q.length > 0) {
                let e = q.shift();
                try {
                    await client.write(config.service, e.level.levelStr, layout(e), e.categoryName);
                } catch (err) {
                    queue.unshift(q);
                    queue.unshift(e);
                    break;
                }
            }
        }

        queueTimer = setInterval(() => {
            debug("Flushing queue");
            sendQueue()
        }, 60000)

        app.shutdown = function (cb) {
            debug('shutdown called');
            clearInterval(queueTimer);
            cb();
        };
    }

    return app;
}

function configure(config, layouts) {
    let layout = layouts.messagePassThroughLayout;
    if (config.layout) {
        layout = layouts.layout(config.layout.type, config.layout);
    }
    debug('configuring new appender');
    return rgAppender(config, layout);
}


module.exports.configure = configure;