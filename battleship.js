var randomLoc = Math.floor(Math.random() * 5);

var location1 = randomLoc;
var location2 = location1 + 1;
var location3 = location2 + 1;
var guess;
var hits = 0;
var guesses = 0;
var isSunk = false;

while (isSunk == false) {
guess = prompt("Привет! Hi! Hola! Это мини-игра морской бой :) Представь, что в 7 ячейках по горизонтали [][][][][][][] (от нуля до шести) расположен 3-ёх палубный корабль врага. Твоя задача потопить его за меньшее кол-во попыток. Сделай свой выстрел. Введи число 0-6:");
if (guess < 0 || guess > 6) {
alert("Please enter a valid cell number!");
} else {
guesses = guesses + 1;
if (guess == location1 || guess == location2 || guess == location3) {
alert("ВАУ! Попал");
hits = hits + 1;
if (hits == 3) {
isSunk = true;
alert("Ты потопил мой корабль");
}
} else {
alert("Мимо");
}
}
}
var stats = "У тебя было " + guesses + " попыток чтобы потопить корабль. Твоя точность равна " + (3/guesses*100) + "%";
alert(stats);
