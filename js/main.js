var directions = ["up", "down", "left", "right"];
var keycodes = {"up": 38, "down": 40, "left": 37, "right": 39};
var direction = directions[Math.floor(Math.random() * directions.length)];

var title = true;
var game_over = true;
var score = 0;

var initial = 100;
var countdown = initial;
var counter;

// set initial direction
$("#direction").html("<h1>" + direction + "</h1>");

$(function () {
  $(document).keyup(function (e) {
    if(!title && !game_over && e.keyCode == keycodes[direction]) {
      score++;

      direction = directions[Math.floor(Math.random() * directions.length)];
      $("#direction").html("<h1>" + direction + "</h1>");

      clearInterval(counter);
      countdown = initial; // reset countdown
      displayCount(countdown);
      counter = setInterval(timer, 10); // start countdown (refresh every 10 ms)
    }

    // space to restart
    if (!title && game_over && e.keyCode == 32) {
      game_over = false;
      score = 0;

      clearInterval(counter);
      countdown = initial; // reset countdown
      displayCount(countdown);

      direction = directions[Math.floor(Math.random() * directions.length)];
      $("#direction").html("<h1>" + direction + "</h1>");

      function display_game () {
        $("#game-container").fadeIn(500);
      }

      $("#score-container").fadeOut(500, display_game);
    }

    if (title && game_over && e.keyCode == 32) {
      function display_game () {
        $("#game-container").fadeIn(500);
      }

      $("#title-container").fadeOut(500, display_game);

      title = false;
      game_over = false;
    }
  });
});

// countdown timer ------------------------
function timer() {
  if (countdown <= 0) {
    clearInterval(counter);

    game_over = true;

    function display_score () {
      $("#score").html("<h1>score: " + score + "</h1>");
      $("#score-container").fadeIn(500);
    }

    $("#game-container").fadeOut(500, display_score);

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
