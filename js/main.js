var directions = ["up", "down", "left", "right"];
var keycodes = {"up": 38, "down": 40, "left": 37, "right": 39};
var direction = directions[Math.floor(Math.random() * directions.length)];

// set initial direction
$("#direction").html("<h1>" + direction + "</h1>");

$(function () {
  $(document).keyup(function (e) {
    if(e.keyCode == keycodes[direction]) {
      clearInterval(counter);
      counter = setInterval(timer, 10); // 10 will run the timer every 100th of a second

      direction = directions[Math.floor(Math.random() * directions.length)];
      $("#direction").html("<h1>" + direction + "</h1>");
    }
  });
});

// countdown timer ------------------------
var initial = 6400; // ms
var count = initial;
var counter;

function timer() {
    if (count <= 0) {
        clearInterval(counter);
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
