#  node-redguy-api

Library to use [redguy api](https://wiki.redguy.ru/Api "redguy api").

## Install

```sh
npm install node-redguy-api -S
```

## Supported classes
Auth - WIP
Math - v1.0
Users - WIP
Event - WIP
Dnevnik Social- WIP
Games Integration - WIP
Teams - WIP

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