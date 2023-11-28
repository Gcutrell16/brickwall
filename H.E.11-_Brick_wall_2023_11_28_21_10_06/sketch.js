let brickImage;
let ivyArray = [];
let mossArray = [];
let postArray = [];
let graffArray = [];


function preload() {
  brickImage = loadImage('Assets/Brick Wall Canvas.jpg');
  ivyArray[0]= loadImage('Assets/Ivy 1.png');
  ivyArray[1]= loadImage('Assets/Ivy 2.png');
  ivyArray[2]= loadImage('Assets/Ivy 3.png');
  mossArray[0]= loadImage('Assets/Moss 1.png');
  mossArray[1]= loadImage('Assets/Moss 2.png');
  mossArray[2]= loadImage('Assets/Moss 3.png');
  postArray[0]= loadImage('Assets/Poster 1.png');
  postArray[1]= loadImage('Assets/Poster 2.png');
  postArray[2]= loadImage('Assets/Poster 3.png');
  postArray[3]= loadImage('Assets/Poster 4.png');
  graffArray[0]= loadImage('Assets/Graffiti 1.png');
  graffArray[1]= loadImage('Assets/Graffiti 2.png');
  graffArray[2]= loadImage('Assets/Graffiti 3.png');
}




function setup() {
// when making a parent, it is a function that is expecting a parenthisis/ variable so putting an equal sign or space between confuses the computer and makes it more difficult to execute its function
 var canvas = createCanvas(800, 450);
  canvas.parent('sketch-holder');
  
  var button = createButton('Ivy');
  button.parent('button-holder');
  button.mousePressed(drawIvy);
  
  var button2 = createButton('Moss');
  button2.parent('button-holder');
  button2.mousePressed(drawMoss);
  
  var button3 = createButton('Posters');
  button3.parent('button-holder');
  button3.mousePressed(drawPost);
  
  var button4 = createButton('Graffiti');
  button4.parent('button-holder');
  button4.mousePressed(drawGraff);
  
  var button5 = createButton('clear wall');
  button5.parent('button-holder');
  button5.mousePressed(clearWall);
  
  image(brickImage,0,0);
  frameRate(60);
  
}

function draw() {
}

function drawIvy () {
  let randIvy = int(random(ivyArray.length));
  image(ivyArray[randIvy], random(width), random(height), 250, 245);
}
function drawMoss () {
  let randMoss = int(random(mossArray.length));
  image(mossArray[randMoss], random(width), random(height), 130, 120);
}

function drawPost () {
  let randPost = int(random(postArray.length));
  image(postArray[randPost], random(width), random(height), 130, 130);
}

function drawGraff () {
  let randGraff = int(random(graffArray.length));
  image(graffArray[randGraff], random(width), random(height), 275, 200);
}
function clearWall () {
  image(brickImage,0,0);
}