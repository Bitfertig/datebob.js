# CarbonJS

CarbonJS is an javascript which recreates the good parts of php class [Carbon](https://carbon.nesbot.com/docs/) to have a nice and easy way to handle dates and times. CarbonJS combines two awesome javascripts ([1](https://locutus.io/php/datetime/strtotime/), [2](https://locutus.io/php/datetime/date/)) into one single javascript.


## Demo

http://tools.bitfertig.de/carbonjs


## Installation

[Download](
https://raw.githubusercontent.com/Bitfertig/CarbonJS/master/carbon.js)

```html
<script src="carbon.js"></script>
```


## Usage

### Instance

```js
carbon() // now
carbon(Date date)
carbon(Carbon carbon)
carbon(String strtotime)
```

### Methods

| Method  	| Description  	|
|---	|---	|
| .modify(String *strtotime*)  	| See php.net/strtotime  	|
| .format(String *format*)  	| See php.net/date  	|

## Local demo

### Startup a server with php
```bash
php -S localhost:8000
```

#### Ideas

##### 1. New date formatting with Intl.DateTimeFormat language support
Use this for formatting, and get language support:
https://jsbin.com/velaqabivo/1/edit?js,console
carbon().locale('de').format('F') // => Januar

##### 2. New relative formatting with Intl.RelativeTimeFormat
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat
carbon().locale('en').relformat() // "in 3 days" or "3 days ago"