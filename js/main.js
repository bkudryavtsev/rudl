var directions = ['up', 'down', 'left', 'right'];

// set initial direction
$('#direction').html('<h1>' + directions[Math.floor(Math.random() * directions.length)] + '</h1>');
