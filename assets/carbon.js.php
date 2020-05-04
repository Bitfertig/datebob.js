<?php

header("Content-type: text/javascript");

$scripts = [
	'../src/carbon.js',
	'../src/strtotime.js',
	'../src/date.js',
];

$carbonjs = '../carbon.js';
$carbonjs_filemtime = filemtime($carbonjs);

$uptodate = true;
$str = '';
foreach ($scripts as $script) {
	if ( filemtime($script) > $carbonjs_filemtime ) $uptodate = false;
	$str .= file_get_contents($script) . PHP_EOL . PHP_EOL;
}
echo $str;

if ( !$uptodate ) file_put_contents($carbonjs, $str);


