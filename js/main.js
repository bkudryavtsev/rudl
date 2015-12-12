var directions = ['up', 'down', 'left', 'right'];

// set initial direction
document.getElementById('direction').innerHTML = '<h1>' + directions[Math.floor(Math.random() * directions.length)] + '</h1>';
