

let callesOpt;
let menuGraph; 

function preload() {

  let url =
  'puntos.json';
  callesOpt = loadJSON(url);
}


const key = 'pk.eyJ1Ijoiam9zZXVyZ2lsZXMiLCJhIjoiY2s4amUycXJ1MDFlczNncGU1bWdhOXRocyJ9.2zVba8ig7AIwgD0wLtlejA';


// Options for map
const options = {
  lat: -2.90884,
  lng: -78.98,
  zoom: 13.45,
  studio: true,
  style: 'mapbox://styles/joseurgiles/ck8jejnmf02941io7fgfdiyos',
  doubleClickZoom: "disable",


};

// Create an instance of Google

const mappa = new Mappa('Mapbox', key);
let myMap;

let canvas;

let colores;
let labels = ["Masculino", "Femenino", "Lugar", "Botánica", "Zoología", "Conmemoraciones", "Etnias y filiaciones culturales", "Tradiciones y costumbres", "Prensa", "Colectivo/Organización"];

let numberTriggers = labels.length; 
let triggerOn = [];

for (var cp = 0; cp < numberTriggers; cp++) {
  
  triggerOn[cp]= true;
  
};

//Box icons

let xOffset;
let xOffsetIcons;
let textSpace;
let iconSize;
let yOffset;




function setup() {

  canvas = createCanvas(1800, 920);
  

  // Create a tile map and overlay the canvas on top.
  myMap = mappa.tileMap(options);
  myMap.overlay(canvas);
  myMap.onChange(drawPoint);


  

  colores = [
    color("#9AAFB2"), // otros 2
    color("#10B4CC"), //masculino 0
    color("#FF3F9E"), // femenino 1
    color("#476CDA"), //lugar 3
    color("#63EA7A"), //botánica 4
    color("#FFD06C"), //zoología 5
    color("#FF766C"), // conmemoraciones 6
    color("#9F3ED9"), // etnias y filiaciones culturales 7
    color("#FFD200"), // tradiciones y costumbres 8
    color(255), // prensa 9
    color("#360DC4"), //colectivo organización 10
    color(120),
    color("255")
  
  ];
  




  

}


function draw() {

  clear();
  menuGraph = createGraphics(100, height);
  image(menuGraph,0,0);



}





function drawPoint(){
 






var numeroCalles =  Object.keys(callesOpt).length;
  //print (numeroCalles);
  for (let index = 0; index < numeroCalles; index++) {
  //print(puntosLength);
  var dimensionCate = Object.keys(callesOpt[index].categorias).length;
  for (var cat = 0; cat <dimensionCate; cat++ ) {
noFill();
strokeWeight(2);
if (callesOpt[index].categorias[cat].tipocategoria_idtipocategoria == 11) {
  if (callesOpt[index].categorias[cat].nombre == "Masculino" && triggerOn[0] ==true ) { //ok
    stroke(colores[1]);
    sizeEllipse = 2;
  } else if (callesOpt[index].categorias[cat].nombre == "Femenino" && triggerOn[1] ==true) { //ok
    stroke(colores[2]);
    sizeEllipse = 2;
  } else if (callesOpt[index].categorias[cat].nombre == "Tradiciones y costumbres" && triggerOn[2] ==true) { // ok
    stroke(colores[8]);
    sizeEllipse = 1.5; 
  } else if (callesOpt[index].categorias[cat].nombre == "Lugar" && triggerOn[3] ==true) { //ok
    stroke(colores[3]);
    sizeEllipse = 1.5; 
  } else if (callesOpt[index].categorias[cat].nombre == "Colectivo/Organización" && triggerOn[4] ==true) { // ok 
    stroke(colores[10]);
    sizeEllipse = 1.5; 
  } else if (callesOpt[index].categorias[cat].nombre == "Prensa" && triggerOn[5] ==true) { // ok 
    stroke(colores[9]);
    sizeEllipse = 1.5; 
  } else if (callesOpt[index].categorias[cat].nombre == "Conmemoraciones" && triggerOn[6] ==true) { //ok
    stroke(colores[6]);
    sizeEllipse = 1.5; 
  } else if (callesOpt[index].categorias[cat].nombre == "Zoología" && triggerOn[7] ==true) { //ok
    stroke(colores[5]);
    sizeEllipse = 1.5; 
  } else if (callesOpt[index].categorias[cat].nombre == "Botanica" && triggerOn[8] ==true) { //ok
    stroke(colores[4]); 
    sizeEllipse = 1.5; 
  } else if (callesOpt[index].categorias[cat].nombre == "Etnias/Filiaciones culturales" && triggerOn[9] ==true) { //ok
    stroke(colores[7]);
    sizeEllipse = 1.5; 
  }else {
    stroke(colores[0]);
    sizeEllipse = 0.1; 
  }

}
  }

  var puntosLength = Object.keys(callesOpt[index].puntos).length;

  for (let i = 0; i < puntosLength; i++) {
    const vector0 = myMap.latLngToPixel(callesOpt[index].puntos[i].latitud, callesOpt[index].puntos[i].longitud);
    rectMode(CENTER);
    ellipse(vector0.x, vector0.y,sizeEllipse, sizeEllipse);  

}

}

// box icons
xOffset = 50;
xOffsetIcons = xOffset*4.8;
textSpace = 25; 
iconSize = 12;
yOffset = height-600; 
  //box icons
  noStroke();
  fill(255,22);
  rectMode(CORNER);
  rect (xOffset-10, yOffset-30, 215, 280);
 
 for ( var i = 0; i <numberTriggers; i++) {
   var y =  yOffset+ i* textSpace;
   fill(255);
   //noStroke();
   textFont('Roboto');
   text(labels[i], xOffset, y);

   uxNoStroke();
   uxFill(colores[i+1]);
   uxStrokeWeight(2.1);

   let e = menuGraph.uxEllipse(xOffsetIcons,y, iconSize, iconSize);
   e.uxEvent('press', trigger);
 
   
 };

  
}


function trigger() {
 
  //console.log(this);
  //console.log('clicked!' + " " + this.UxID); 
  if (triggerOn[this.UxID] == true) {
    
    triggerOn[this.UxID] = false;
    
    this.uxFill= colores[0];
    
  } else {
    
    triggerOn[this.UxID] = true;  
    this.uxFill= colores[this.UxID+1];
    
  
  }

  drawPoint();

}