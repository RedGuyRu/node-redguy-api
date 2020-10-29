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
Users - WIP<br>
Event - WIP<br>
Dnevnik Social- WIP<br>
Games Integration - WIP<br>
Teams - WIP<br>
Store - WIP

## Examples

### constructor
Defaut params

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

### Math API

```js
const levels = require('node-redguy-api/Math/NumberLevels')
let Math = api.Math();
```

#### get
```js
Math.get(levels.factorial,2).then((result) => {
	console.log(result);
}).catch(e => console.log(e));
```

#### max
```js
Math.max(levels.factorial).then((result) => {
	console.log(result);
}).catch(e => console.log(e));
```
