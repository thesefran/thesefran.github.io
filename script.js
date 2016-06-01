/** Canvas playground for Codebar's tutorial Drawing in Canvas %&%ued for fran for  **/

//setting coordinate positions to 0,0 for first square
var coordinatex = 0;
var coordinatey = 0;

//setting rgba colour value
var colourR = 153;
var colourG = 255;
var colourB = 235;
var colourA = Math.random();
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

//previous default RGB colours
//turqouise 153, 255, 235kmtr
//pink 210,210,150

//draw button function called by loop(), with control loop

function draw() {

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

  //randomly generate opacity a , rgbA<

  //colourA = Math.random();

  colourA += ((Math.random())-0.45);
  if(colourA > 1){
    colourA = 1
    colourA += -(Math.random()*0.22)
  }else if(colourA < 0){
    colourA = 0
    colourA += (Math.random()*0.22)
  }

  context.fillStyle ="rgba("+colourR+","+colourG+","+colourB+","+colourA+")";
  context.fillRect(coordinatex,coordinatey, pixelSize, pixelSize);

  console.log('R:'+colourR+' G:'+colourG+' B:'+colourB);
  //each square

  //boolean control loop for rectangle line progression and repetition
  //boolean for width + line progression and width reset
  if(coordinatex + pixelSize > canvasWidth){
    coordinatex = 0;
    coordinatey += pixelSize;
  }else {
    coordinatex += pixelSize;
  }

  //boolean for line reset
  if(coordinatey + pixelSize > canvasHeight){
    coordinatey =0;
  }
}


//creating loop as global variables to be used within loopbutton function
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

var areaPixels

//block fill function for quick testing purposes
function fill(){

  areaPixels = (Math.ceil(canvasWidth/pixelSize)*Math.ceil((canvasHeight/pixelSize)));

  console.log('fillmeee check');

  coordinatex =0;
  coordinatey =0;

  console.log(areaPixels+' squares');
  var i;

    for (i = 0; i < areaPixels; i++) {
        draw();
        console.log('square number' + i );

    }

}



function randomColour(){
  colourR = $("#input-red").val(colourR= Math.floor(Math.random()*255));
  colourB = $("#input-blue").val(colourB= Math.floor(Math.random()*255));
  colourG = $("#input-green").val(colourG= Math.floor(Math.random()*255));
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

/* code to adjust canvas size to canvasWidth & canvasHeight , with 100 size border/buffer edge
$("#canvas-width").keypress(function(){
      console.log('adjusted width :)');
      saveCanvas.width = canvasWidth + 100;
      saveCanvas.height = canvasHeight;
      saveCtx.drawImage(canvas, 0, 0);
      canvas.width = canvasWidth + 100;
      canvas.height = canvasHeight;
      context.drawImage(saveCanvas, 0, 0);
    })

$("#canvas-height").keypress(function(){
      console.log('adjusted height :)');
      saveCanvas.width = canvasWidth;
      saveCanvas.height = canvasHeight + 100;
      saveCtx.drawImage(canvas, 0, 0);
      canvas.width = canvasWidth;
      canvas.height = canvasHeight + 100;
      context.drawImage(saveCanvas, 0, 0);
        })
*/

// reset canvas
function reset() {
  var canvas = document.getElementById('canvas-id');
  var context = canvas.getContext("2d");
  canvas.width = canvas.width;

}
