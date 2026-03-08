<?php
$credits = $_POST["credits"];
$grade = $_POST["grade"];

switch($grade) {
    case "A": $points = 4; break;
    case "B": $points = 3; break;
    case "C": $points = 2; break;
    case "D": $points = 1; break;
    default: $points = 0;
}

$gpa = $points * $credits;

echo "النقاط: " . $gpa;
?>
