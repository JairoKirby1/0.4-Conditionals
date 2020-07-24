var beast;
var color1;
var color2;
var color3;
var oneThird;

function setup () {
  createCanvas(400, 200);
  helperVariables(); // assigns global variable values other than beast

  beast = {
    x: 50,
    y: height * 2/3,
    size: 80,
    speed: 3,
    color: color1,
    message: "Hello world",
  }
}

function draw () {
      helperBackground();

  // #2 Update beast position variables
  beast.x +=1;
  if(beast.x > width) {
    beast.x = beast.x - 1
  }

  // #3 update the beast color to match the background

  // #4 assign true or false to movingTowardsMouse
  
  // #5 Update beast.message based on movingTowardsMouse

  // Bonus 1 and 2
 
  helperDrawBeast();
  helperText();
}
