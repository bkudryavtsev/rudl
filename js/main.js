var directions = ["up", "down", "left", "right"];
var max_direction_idx = directions.length - 1;
var min_direction_idx = 0;
var direction_idx = 0;
var last_direction_idx = direction_idx;

var keycodes = {"up": 38, "down": 40, "left": 37, "right": 39};

var game_over = true;
var score = 0;

var initial = 100;
var countdown = initial;
var counter;

$(function () {
  $(document).keyup(function (e) {
    if(!game_over && e.keyCode == keycodes[directions[direction_idx]]) {
      score++;

      direction_idx = Math.floor(Math.random() * (max_direction_idx - min_direction_idx)) + min_direction_idx;
      // prevent repetition
      if (direction_idx >= last_direction_idx) { direction_idx += 1 };
      last_direction_idx = direction_idx;

      $("#direction").html("<h1>" + directions[direction_idx] + "</h1>");

      clearInterval(counter);
      countdown = initial; // reset countdown
      displayCount(countdown);
      counter = setInterval(timer, 10); // start countdown (refresh every 10 ms)
    } else if(!game_over && e.keyCode != keycodes[directions[direction_idx]]) {
      clearInterval(counter);
      countdown = 0; // end game
      counter = setInterval(timer, 10);

      game_over = true;
    }

    // space to restart
    if (game_over && e.keyCode == 32) {
      game_over = false;
      score = 0;

      clearInterval(counter);
      countdown = initial; // reset countdown
      displayCount(countdown);

      direction_idx = Math.floor(Math.random() * (max_direction_idx - min_direction_idx)) + min_direction_idx;
      // prevent repetition
      if (direction_idx >= last_direction_idx) { direction_idx += 1 };
      last_direction_idx = direction_idx;
      $("#direction").html("<h1>" + directions[direction_idx] + "</h1>");

      if ($("#title-container").is(":visible")) {
        $("#title-container").fadeOut(500, display_game);
      } else {
        $("#score-container").fadeOut(500, display_game);
      }
    }
  });
});

function display_game () {
  $("#game-container").fadeIn(500);
}

function display_score () {
  $("#score").html("<h1>score: " + score + "</h1>");
  $("#score-container").fadeIn(500);
}

// countdown timer ------------------------
function timer() {
  if (countdown <= 0) {
    clearInterval(counter);

    game_over = true;

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
