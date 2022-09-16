/* eslint no-console:0 */

'use strict';

const debug = require('debug')('log4js:redguy-logging');
const RG = require("../").RedGuyApi;

/**
 * Redguy Logging Appender. Sends logging events to redguy api
 *
 * @param config object with configuration data
 * {
 *   token: token,
 *   service: service id
 * }
 * @param layout a function that takes a logevent and returns a string (defaults to objectLayout).
 */
function rgAppender(config, layout) {
    debug('creating appender.');

    let client = new RG(config.token).Logs();

    function app(loggingEvent) {
        debug('sending log event to redguy api');
        client.write(config.service, loggingEvent.level.levelStr, layout(loggingEvent), loggingEvent.categoryName)
            .then(() => {
                debug('log event sent to redguy api');
            }).catch((err) => {
            debug(err);
        });
    }

    app.shutdown = function (cb) {
        debug('shutdown called');
        cb();
    };

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