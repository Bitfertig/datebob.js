# Readme datebob.js
DateBobJS is an javascript which recreates the good parts of php class [Carbon](https://carbon.nesbot.com/docs/) to have a nice and easy way to handle dates and times. DateBobJS combines two awesome javascripts ([strtotime](https://locutus.io/php/datetime/strtotime/) like [datetime formats](https://www.php.net/manual/de/datetime.formats.relative.php), [date](https://locutus.io/php/datetime/date/)) into one single javascript.


## Demo

http://tools.bitfertig.de/datebob.js


## Installation

```bash
npm i @dipser/datebob.js
```


## Usage

```html
<script type="module">
import { DateBob } from "@dipser/datebob.js";

console.log( new DateBob('now') );

var datebob = DateBob.func; // Usage as function datebob('now')
console.log( datebob('now')
</script>
```


## Features

### Instance

```js
new DateBob()
var datebob = DateBob.func; // Static function
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


### Examples

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

### Developing this npm package

Wenn Anpassungen vorgenommen werden, wechselt zuerst in das Verzeichnis:

```bash
cd .../project
```

Unter Umständen müsst ihr es noch installieren:

```bash
npm install
```

Nun könnt ihr die Dateiänderungen automatisch überwachen lassen:

```bash
npm run dev
```

Wenn Ihr fertig seid, führt den Befehl für den produktiven Einsatz aus:

```bash
npm run build
```

#### Publishing npm package

```bash
npm publish
```


#### Ideas

##### 1. New date formatting with Intl.DateTimeFormat language support
Use this for formatting, and get language support:
https://jsbin.com/velaqabivo/1/edit?js,console
carbon().locale('de').format('F') // => Januar

##### 2. New relative formatting with Intl.RelativeTimeFormat
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat
carbon().locale('en').relformat() // "in 3 days" or "3 days ago"