<?php

//    echo text <- wird zurückgegeben

$array = file('minions.json');
$string = "";
for ($i = 0; $i < count($array); $i++) {
    $string .= $array[$i];
}
echo $string;