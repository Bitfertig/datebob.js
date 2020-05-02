# CarbonJS

CarbonJS is an javascript which recreates the good parts of php class Carbon to have a nice and easy way to handle dates and times. CarbonJS combines two awesome javascripts (1, 2) into one single javascript.



## Installation

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

## Developing or local demo

### Startup a server with php
```bash
php -S localhost:8000
```