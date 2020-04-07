

let callesOpt;
let menuGraph; 


const key = 'pk.eyJ1Ijoiam9zZXVyZ2lsZXMiLCJhIjoiY2s4amUycXJ1MDFlczNncGU1bWdhOXRocyJ9.2zVba8ig7AIwgD0wLtlejA';

const mappa = new Mappa('Mapbox', key);
// Options for map
const options = {
  lat: -2.90884,
  lng: -79,
  zoom: 11.5,
  studio: true,
  width: 900,
  height: 460,
  scale:2,
    //style: 'mapbox://styles/joseurgiles/ck8jejnmf02941io7fgfdiyos',

  style: 'dark-v9'


};

// Create an instance of Google


const myMap = mappa.staticMap(options);
let img;

let canvas;

let colores;
let labels = ["Masculino", "Femenino", "Lugar", "Botánica", "Zoología", "Conmemoraciones", "Etnias y filiaciones culturales", "Tradiciones y costumbres", "Prensa", "Colectivo/Organización"];

let numberTriggers = labels.length; 
let triggerOn = [];

for (var cp = 0; cp < numberTriggers; cp++) {
  
  triggerOn[cp]= false;
  
};

//Box icons

let xOffset;
let xOffsetIcons;
let textSpace;
let iconSize;
let yOffset;


function preload() {
  // Load the image
  img = loadImage(myMap.imgUrl);
  
  let url =
  'http://pcalles.masakisanto.net/index.php/ws/puntos';
  callesOpt = loadJSON(url);
}


function setup() {

  canvas = createCanvas(1800, 920);
  
 
frameRate(18);


  

  colores = [
    
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
    color("#9AAFB2"), // otros 2
    color(120),
    color("255")
  
  ];
  

  image(img,0,0);


  


  menuGraph = createGraphics(100, height);

  image(menuGraph,0,0);

  menu();
  drawPoint(triggerOn);

  

}


function draw() {

  image(img,0,0);
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
   
      
    };
  drawPoint();
  




}









function menu() {

  // box icons
xOffset = 50;
xOffsetIcons = xOffset*4.8;
textSpace = 25; 
iconSize = 12;
yOffset = height-600; 
  //box icons


  uxFill(colores[10]);

 for ( var i = 0; i <numberTriggers; i++) {
   var y =  yOffset+ i* textSpace;

   uxNoStroke();
   
   uxStrokeWeight(2.1);

   let e = menuGraph.uxEllipse(xOffsetIcons,y, iconSize, iconSize);
   e.uxEvent('press', trigger);
 
   
 };

}


function trigger() {
  
  //console.log(this);
  
  console.log(this.UxID); 

  if (triggerOn[this.UxID] == false) {
    this.uxFill= colores[this.UxID];
    
    triggerOn[this.UxID] = true;
    
    print(triggerOn[0]);
    
  } else {
    this.uxFill= colores[10];
    triggerOn[this.UxID] = false;  
   
    
  
  }

 

}


function drawPoint(){



  var trig = triggerOn;
 






var numeroCalles =  Object.keys(callesOpt).length;
  //print (numeroCalles);
  for (let index = 0; index < numeroCalles; index++) {
  //print(puntosLength);
  var dimensionCate = Object.keys(callesOpt[index].categorias).length;
  for (var cat = 0; cat <dimensionCate; cat++ ) {
noFill();
strokeWeight(2);


var puntosLength = Object.keys(callesOpt[index].puntos).length;
let vector0;
let sizeEllipse = 0;


for (let i = 0; i < puntosLength; i++) {
  vector0 = myMap.latLngToPixel(callesOpt[index].puntos[i].latitud, callesOpt[index].puntos[i].longitud);


}



if (callesOpt[index].categorias[cat].tipocategoria_idtipocategoria == 11) {
  if (callesOpt[index].categorias[cat].nombre == "Masculino"  && trig[0] ==true ) { //ok
    
 
    stroke(colores[0]);
    sizeEllipse = 2;

  } else if (callesOpt[index].categorias[cat].nombre == "Femenino" && trig[1] ==true) { //ok
    stroke(colores[1]);
    sizeEllipse = 2;
  } else if (callesOpt[index].categorias[cat].nombre == "Tradiciones y costumbres" && trig[7] ==true) { // ok
    stroke(colores[7]);
    sizeEllipse = 1.5; 
  } else if (callesOpt[index].categorias[cat].nombre == "Lugar" && trig[2] ==true) { //ok
    stroke(colores[2]);
    sizeEllipse = 1.5; 
  } else if (callesOpt[index].categorias[cat].nombre == "Colectivo/Organización" && trig[4] ==true) { // ok 
    stroke(colores[9]);
    sizeEllipse = 1.5; 
  } else if (callesOpt[index].categorias[cat].nombre == "Prensa" && trig[8] ==true) { // ok 
    stroke(colores[8]);
    sizeEllipse = 1.5; 
  } else if (callesOpt[index].categorias[cat].nombre == "Conmemoraciones" && trig[5] ==true) { //ok
    stroke(colores[5]);
    sizeEllipse = 1.5; 
  } else if (callesOpt[index].categorias[cat].nombre == "Zoología" && trig[4] ==true) { //ok
    stroke(colores[4]);
    sizeEllipse = 1.5; 
  } else if (callesOpt[index].categorias[cat].nombre == "Botanica" && trig[3] ==true) { //ok
    stroke(colores[3]); 
    sizeEllipse = 1.5; 
  } else if (callesOpt[index].categorias[cat].nombre == "Etnias/Filiaciones culturales" && trig[6] ==true) { //ok
    stroke(colores[6]);
    sizeEllipse = 1.5; 
  }else {
    noStroke();
    sizeEllipse = 0.1; 
  }

  ellipse(vector0.x, vector0.y,sizeEllipse, sizeEllipse);  


}
  }




}




  
}