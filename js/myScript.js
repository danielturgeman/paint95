var createMenu = function(){

   var menu =  document.createElement("div");
   menu.style.height = "100px";
   menu.style.width = "900px";
   menu.style.border = "1px solid black";
   menu.style.backgroundColor = "lightblue";
   document.body.appendChild(menu);

   createButtons(menu);

}

var createButtons = function(menu){

    var imageNames = ["./img/pencil.jpg", "./img/brush.png", "./img/eraser.png", "./img/plus.png", "./img/minus.png"];

    for(var i = 0; i < 5; i++){

       buttons[i] = document.createElement("div");
       buttons[i].style.height = "50px";
       buttons[i].style.width = "100px";
       buttons[i].style.border = "1px solid black";
       buttons[i].style.margin = "10px 20px";
       buttons[i].style.padding = "10px";
       buttons[i].style.display = "inline-block";
       buttons[i].id = "button" + (i+1);

       images[i] = document.createElement("img");
       images[i].style.height = "50px";
       images[i].style.width = "100px";
       images[i].src = imageNames[i];
       images[i].id = "image" + (i+1);

       buttons[i].appendChild(images[i]);
       menu.appendChild(buttons[i]);
    }

    

}

var createCanvas = function(){

canvas = document.createElement("canvas");
//context = canvas.fill2d
//canvas set context to 2d
//fill rect 00 to canav width to canv height
//fil style
//
canvas.style.backgroundColor = "white";
canvas.style.border = "1px solid black";
canvas.height = 400;
canvas.width = 900;
canvas.id = "canvas";
canvas.position = "absolute";
//canvas = canvas.getContext("2d");
console.log("function called");
console.log(canvas);

return canvas;

}

var createColors = function(){

    var colorDiv = document.createElement("div");
    colorDiv.style.height = "150px";
    colorDiv.style.width = "900px";
    colorDiv.border = "1px solid black";
    colorDiv.id = "colorDiv";
    
    var colorWheel = document.createElement("input");
    colorWheel.setAttribute("type", "color");
    colorWheel.id = "colorWheel";
    colorWheel.style.height ="75px";

    colorDiv.appendChild(colorWheel);
    colorWheel.style.width = "49%";
    
    colorDiv.appendChild(colorWheel);
    document.body.appendChild(colorDiv);

    return colorWheel;

}

var createClearButton = function(){
   var clear =  document.createElement("button");
   clear.id = "clear";
   clear.value = "clear";
   clear.style.width = "49%";
   clear.style.height = "75px";
   clear.style.backgroundColor = "black";
   clear.style.color = "white";
   clear.innerHTML = "Clear";
   clear.style.verticalAlign = "top";
   console.log(clear);
   var colorDiv = document.getElementById("colorDiv");
   console.log(colorDiv);
   colorDiv.appendChild(clear);
}


var createRectangle = function(canvas, coordinates, width, height){

console.log(coordinates[0], coordinates[1]);
canvas = canvas.getContext("2d");
//canvas.strokeStyle = "red";    
canvas.strokeStyle = String(color); //set to black because when we use eraser we change it to white
canvas.fillStyle = String(color);  //and if we dont change the color back it will stay white
canvas.fillRect(coordinates[0], coordinates[1], width, height);
//console.log("coordinates" + coordinateX, coordinateY);
}

var eraseRectangle = function(canvas, coordinates, width, height){
canvas = canvas.getContext("2d");
canvas.strokeStyle = "white";
canvas.fillStyle = "white";
canvas.fillRect(coordinates[0], coordinates[1], width, height);
}


/*var changeColors = function(canvas, color){

    canvas = canvas.getContext("2d"); 
    canvas.fillStyle = String(color);
    canvas.strokeStyle = String(color);
    console.log("in changeColors.. color is " + color);

}*/

//testing function
var clearCanvas = function(canvas){

    var ctx = canvas.getContext("2d");
    ctx.clearRect(0,0,canvas.width,canvas.height);
    
}

var getButtonId = function(event){
    console.log(event.target.id);
    buttonID = event.target.id;
} 




 var coordinateX, varCoordinateY;
 //var colorDiv = null;
 var lineWidth = 1;
 var color = "black";
 var coordinates = [];
 var buttons = [];
 var images = [];

createMenu();

var pencil = buttons[0];
var brush = buttons[1];
var eraser = buttons[2];
var buttonID = pencil.id; //start with pencil.. no button click yet

var pencilImage = images[0];
var brushImage = images[1];
var eraserImage = images[2];


canvas = createCanvas();
document.body.appendChild(canvas);

colorWheel = createColors();

createClearButton();

//var colorDiv = document.getElementById("colorDiv");
//document.body.appendChild(colorDiv);

//document.body.appendChild(colorDiv);



pencil.addEventListener('click', getButtonId);
brush.addEventListener('click', getButtonId);
eraser.addEventListener('click', getButtonId);

canvas.addEventListener('mousemove', function(event) {
      console.log(event.buttons);
     
      //on mouse move, track coordinates of movement .. we dont need mousedown or onclick
      //on mouse move tracks coordinates of mousemovement and if event.buttons != 1
      //each event contains data. our event is a mousemove and the data contained is buttons etc
      //if buttons != 1 aka if button is not a right click, leave the function, otherwise
      //if it is a right click  get coordinates pass coordinates fill the rectangle
      //based on coordinates of movement otherwise it will print by just moving the mouse
      //around the canvas

    if (event.buttons != 1) return;

     var rect = canvas.getBoundingClientRect();

      canvas.style.cursor = "crosshair";
      coordinateX = event.clientX - rect.left;
      coordinateY = event.clientY - rect.top;
      coordinates = [coordinateX, coordinateY];

     if(buttonID == pencil.id || buttonID == pencilImage.id ){
        createRectangle(canvas, coordinates, 2, 2);
    }
    
    else if(buttonID == brush.id || buttonID == brushImage.id ){
        createRectangle(canvas, coordinates, 15, 15);
    }

    else if(buttonID == eraser.id || buttonID == eraserImage.id){
        eraseRectangle(canvas, coordinates, 20, 20);
    }

     console.log(coordinateX + " " +  coordinateY);
     
});

/*colorWheel.addEventListener('click', function() {
    color = colorWheel.value;
    console.log(color);
});*/

document.getElementById("clear").addEventListener("click", function() {

    clearCanvas(canvas);

});

document.getElementById("button4").addEventListener('click', function() {
/*var ctx = canvas.getContext("2d");
if(lineWidth < 20){
    lineWidth++;
createRectangle(ctx, coordinates, lineWidth, lineWidth );
console.log("if statement button 4");
}*/


});

colorWheel.addEventListener('change', function(event) {
      color = event.target.value;
    //color = colorWheel.value;
  //  changeColors(canvas, color);

});



    //canvas.lineWidth = 20;
//stroke style for canvas getcontext2d, -> canvas.strokestyle -> change it to color picked
