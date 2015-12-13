var directions = ["up", "down", "left", "right"];
var keycodes = {"up": 38, "down": 40, "left": 37, "right": 39};
var direction = directions[Math.floor(Math.random() * directions.length)];

var game_on = true;
var score = 0;

// set initial direction
$("#direction").html("<h1>" + direction + "</h1>");

$(function () {
  $(document).keyup(function (e) {
    if(game_on && e.keyCode == keycodes[direction]) {
      score++;

      clearInterval(counter);
      counter = setInterval(timer, 10); // 10 will run the timer every 100th of a second

      direction = directions[Math.floor(Math.random() * directions.length)];
      $("#direction").html("<h1>" + direction + "</h1>");
    }
  });
});

// countdown timer ------------------------
var initial = 1600; // ms
var count = initial;
var counter;

function timer() {
    if (count <= 0) {
        clearInterval(counter);

        game_on = false;

        $("#direction").fadeOut(500);
        $("#countdown").fadeOut(500);

        $("#score").html("<h1>score: " + score + "</h1>");
        $("#score").fadeIn(500);

        return;
    }
    count--;
    displayCount(count);
}

function displayCount(count) {
    var res = count / 100;
    $("#countdown").html("<h1>" + res.toPrecision(count.toString().length) + "</h1>");
}

displayCount(initial);
