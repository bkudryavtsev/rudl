var directions = ["up", "down", "left", "right"];
var keycodes = {"up": 38, "down": 40, "left": 37, "right": 39};
var direction = directions[Math.floor(Math.random() * directions.length)];

var game_on = true;
var score = 0;

var initial = 100;
var countdown = initial;
var counter;

// set initial direction
$("#direction").html("<h1>" + direction + "</h1>");

$(function () {
  $(document).keyup(function (e) {
    if(game_on && e.keyCode == keycodes[direction]) {
      score++;

      direction = directions[Math.floor(Math.random() * directions.length)];
      $("#direction").html("<h1>" + direction + "</h1>");

      clearInterval(counter);
      countdown = initial; // reset countdown
      displayCount(countdown);
      counter = setInterval(timer, 10); // start countdown (refresh every 10 ms)
    }
  });
});

// countdown timer ------------------------
function timer() {
  if (countdown <= 0) {
    clearInterval(counter);

    game_on = false;

    $("#direction").fadeOut(500);
    $("#countdown").fadeOut(500);

    $("#score").html("<h1>score: " + score + "</h1>");
    $("#score").fadeIn(500);

    return;
  }
  countdown--;
  displayCount(countdown);
}

function displayCount(countdown) {
  var res = countdown / 100;
  $("#countdown").html("<h1>" + res.toPrecision(countdown.toString().length) + "</h1>");
}

displayCount(initial);
