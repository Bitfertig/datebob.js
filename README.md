[![npm version](https://badge.fury.io/js/%40dipser%2Fdatebob.js.svg)](https://badge.fury.io/js/%40dipser%2Fdatebob.js)
[![install size](https://packagephobia.com/badge?p=@dipser/datebob.js)](https://packagephobia.com/result?p=@dipser/datebob.js)
![](https://img.badgesize.io/Bitfertig/datebob.js/master/dist/datebob.esm.js?label=JS_file)



# datebob.js
DateBobJS is a javascript which recreates the good parts of php class [Carbon](https://carbon.nesbot.com/docs/) to have a nice and easy way to handle dates and times. DateBobJS combines two awesome javascripts ([strtotime](https://locutus.io/php/datetime/strtotime/) like [datetime formats](https://www.php.net/manual/de/datetime.formats.relative.php), [date](https://locutus.io/php/datetime/date/)) into one single javascript.


## Demo

http://tools.bitfertig.de/datebob.js/


## Installation

```bash
npm i @dipser/datebob.js
```


## Usage

```html
<script type="module">
import { datebob, DateBob } from "@dipser/datebob.js";
console.log( new DateBob('now') );
console.log( datebob('now') );
</script>
```


## Features

### Instance

```js
new DateBob()
datebob() // now
datebob(Date date)
datebob(DateBob datebob)
datebob(String strtotime)
```

### Methods

| Method  	| Description  	|
|---	|---	|
| .modify(String *strtotime*)  	| See php.net/strtotime  	|
| .format(String *format*)  	| See php.net/date  	|


## Examples

```javascript
datebob()
// => returns a Date()-Object.

datebob('yesterday 12:34:56')
// => returns a Date()-Object of yesterday.

datebob(datebob('2020-01-01')).format('D, Y-m-d H:i:s')
// => Mon, 2020-08-24 21:17:17

datebob('2020-01-01').modify('+ 1 day').format('D, Y-m-d H:i:s')
// => Thu, 2020-01-02 00:00:00
```

## Contributing to this npm package


```bash
# go to directory
cd .../project

# install npm dependencies
npm install

# run webpack watcher and then open development url
npm run dev

# create a build
npm run build
```

## Publishing npm package

Publish to: @dipser/datebob.js

```bash
npm publish
```


-----
## Ideas

##### 1. New date formatting with Intl.DateTimeFormat language support
Use this for formatting, and get language support:
https://jsbin.com/velaqabivo/1/edit?js,console
carbon().locale('de').format('F') // => Januar

##### 2. New relative formatting with Intl.RelativeTimeFormat
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat
carbon().locale('en').relformat() // "in 3 days" or "3 days ago"


## Statistics

[Anvaka Graph](https://npm.anvaka.com/#!/view/3d/@dipser/datebob.js#/view/2d/%40dipser%2Fdatebob.js)


## Alternatives

[dayjs](https://github.com/iamkun/dayjs/),
[momentjs](https://github.com/moment/moment/)
