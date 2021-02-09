#  node-redguy-api

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/b236af86f3f048a3a51118f1ea8e54ef)](https://app.codacy.com/gh/RedGuyGames/node-redguy-api?utm_source=github.com&utm_medium=referral&utm_content=RedGuyGames/node-redguy-api&utm_campaign=Badge_Grade) ![npm](https://img.shields.io/npm/v/node-redguy-api) ![GitHub commit activity](https://img.shields.io/github/commit-activity/m/RedGuyGames/node-redguy-api) ![npm](https://img.shields.io/npm/dm/node-redguy-api) ![npm bundle size](https://img.shields.io/bundlephobia/min/node-redguy-api)

Library to use [redguy api](https://wiki.redguy.ru/Api "redguy api").

## Install

```sh
npm install node-redguy-api -S
```

## Supported classes
Auth - WIP<br>
Math - v1.0<br>
Users - v1.0<br>
Event - v1.0<br>
Teams - v1.0<br>
Store - v1.0<br>
Minecraft - v1.0

## Examples

### constructor
Default params

```js
const RedGuyApi = require("node-redguy-api");
let api = new RedGuyApi(process.env.TOKEN);
```
With config
```js
const RedGuyApi = require("node-redguy-api");
let api = new RedGuyApi(process.env.TOKEN,{
	v: '1.1'
});
```