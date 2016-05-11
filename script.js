/** Canvas playground for Codebar's tutorial Drawing in Canvas **/
//setting coordinate positions to 0,0 for first square
var coordinatex = 0;
var coordinatey = 0;
//setting rgba colour value
var colourR = 153;
var colourG = 255;
var colourB = 235;
var colourA = 0;
//setting default inputtable size parameters eg pixelSize, canvas dimensions + also intervalLength
var pixelSize = 50;
var canvasWidth = 610;
var canvasHeight = 610;
var intervalLength = 40;
//initalising stuff for canvas
var canvas = document.getElementById('canvas-id');
var context = canvas.getContext("2d");

var saveCanvas = document.createElement('canvas');
var saveCtx = saveCanvas.getContext("2d");


//turqouise 153, 255, 235kmtr
//var input
//pink 210,210,150

//draw button function called by loop(), with control loop
function draw() {
  //colourR = 210;
  //colourG = 100;
  //2colourB = 150;
  pixelSize = parseInt($("#pixel-size").val());
  canvasWidth = parseInt($("#canvas-width").val());
  canvasHeight = parseInt($("#canvas-height").val());

  colourR = $("#input-red").val();
  colourB = $("#input-blue").val();
  colourG = $("#input-green").val();

  //context.clearRect(coordinatex,coordinatey, pixelSize, pixelSize);

  //console.log('hi check please .. . .');

  context.fillStyle ="rgba(255, 255, 255, 1)";
  //console.log('. . . . h m mm m .');

  context.fillRect(coordinatex,coordinatey, pixelSize, pixelSize);


  colourA = Math.random();
  context.fillStyle ="rgba("+colourR+","+colourG+","+colourB+","+colourA+")";
  context.fillRect(coordinatex,coordinatey, pixelSize, pixelSize);

  console.log('R:'+colourR+' G:'+colourG+' B:'+colourB);
  //each square
  //colourR= Math.floor(Math.random()*255)
  //colourG= Math.floor(Math.random()*255)
  //colourB= Math.floor(Math.random()*255)

  //boolean control loop for rectangle line progression and repetition
  //boolean for width + line progression and width reset
  if(coordinatex + pixelSize > canvasWidth){
    var xlimit = coordinatex;
    coordinatex = 0;
    coordinatey += pixelSize;
  }else {
    coordinatex += pixelSize;
  }

  //boolean for line reset
  if(coordinatey + pixelSize > canvasHeight){
    var ylimit = coordinatey;
    coordinatey =0;
  }
}

//creating loop as global variables
var loop
//while(coordinatey<1000 ){
//  while(coordinatex <1000){

function loopbutton() {
  if(loop){
    clearInterval(loop)
    loop= null
  }else{
  loop = setInterval(function(){ draw()}, intervalLength);
  }
}

/*
function fill(){

      coordinatey =0;
  if(coordinatex + pixelSize < canvasWidth){
    square();
    coordinatex += pixelSize;

  }else {
    coordinatex = 0;
    coordinatey += pixelSize;
  }

}
*/

function randomColour(){

      colourR= Math.floor(Math.random()*255)
      colourG= Math.floor(Math.random()*255)
      colourB= Math.floor(Math.random()*255)
}

//saveImage button function which turns canvas into saveble png file
function saveImage(){
  saveCanvas.width = canvasWidth;
  saveCanvas.height = canvasHeight;
  saveCtx.drawImage(canvas, 0, 0);
  canvas.width = canvasWidth;
  canvas.height = canvasHeight;
  context.drawImage(saveCanvas, 0, 0);
  var img = canvas.toDataURL("image/png");
  //var link = document.createElement('a');
  //link.setAttribute('download', c.toDataURL("image/png"));
  //link.setAttribute('href', 'wallpaper'+canvasHeight+canvasWidth+'.png')
  //  .replace("image/png", "image/octet-stream")
  //link.click();
  document.write('<img src="'+img+'"/>');

}

$("#input-colour").keypress(function(){
        input = $("#input-colour").val()
        console.log(input)
    })



// reset canvas
function reset() {
  var canvas = document.getElementById('canvas-id');
  var context = canvas.getContext("2d");
  canvas.width = canvas.width;

}
