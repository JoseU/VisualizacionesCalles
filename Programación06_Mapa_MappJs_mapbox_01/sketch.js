let callesOpt;


function preload() {

  let url =
  'http://pcalles.masakisanto.net/index.php/ws/puntos';
  callesOpt = loadJSON(url);
}


const key = 'pk.eyJ1Ijoiam9zZXVyZ2lsZXMiLCJhIjoiY2s4amUycXJ1MDFlczNncGU1bWdhOXRocyJ9.2zVba8ig7AIwgD0wLtlejA';


// Options for map
const options = {
  lat: -2.90884,
  lng: -78.994,
  zoom: 13.45,
  studio: true,
  style: 'mapbox://styles/joseurgiles/ck8jejnmf02941io7fgfdiyos',


};

// Create an instance of Google

const mappa = new Mappa('Mapbox', key);
let myMap;

let canvas;


var labels = ["Masculino", "Femenino", "Lugar", "Botánica", "Zoología", "Conmemoraciones", "Etnias y filiaciones culturales", "Tradiciones y costumbres", "Prensa", "Colectivo/Organización"];

let colores;


function setup() {

  canvas = createCanvas(1800, 920);


  // Create a tile map and overlay the canvas on top.
  myMap = mappa.tileMap(options);
  myMap.overlay(canvas);

  // Load the data
  //meteorites = loadTable('assets/data/Meteorite_Landings.csv', 'csv', 'header');


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

// The draw loop is fully functional but we are not using it for now.
function draw() {

  var yOffSet = 25; 
  for (let t = 0; t < labels.length; t++) {
    

    var y =  (yOffSet*3)+ t* yOffSet;

      fill(255);
      noStroke();
      textFont('Roboto');
      text(labels[t], 100, y);

      noFill();
      strokeWeight(2.1);
      stroke(colores[(t+1)]);
      ellipse(280,y, yOffSet*0.6, yOffSet*0.6);

    
    
    
  }


}


function drawPoint(){
  clear();



var sizeEllipse = 0;

var numeroCalles =  Object.keys(callesOpt).length;
 // var numeroCalles =  3;

  //print (numeroCalles);


  for (let index = 0; index < numeroCalles; index++) {
    
    
  




  //print(puntosLength);


  var dimensionCate = Object.keys(callesOpt[index].categorias).length;


  for (var cat = 0; cat <dimensionCate; cat++ ) {
noFill();
strokeWeight(2);


if (callesOpt[index].categorias[cat].tipocategoria_idtipocategoria == 11) {


 
  if (callesOpt[index].categorias[cat].nombre == "Masculino") { //ok
  
    stroke(colores[1]);
    sizeEllipse = 2;
  } else if (callesOpt[index].categorias[cat].nombre == "Femenino") { //ok
    stroke(colores[2]);
    sizeEllipse = 2;

  } else if (callesOpt[index].categorias[cat].nombre == "Tradiciones y costumbres") { // ok
    stroke(colores[8]);
    sizeEllipse = 1.5; 

  } else if (callesOpt[index].categorias[cat].nombre == "Lugar") { //ok
    stroke(colores[3]);
    sizeEllipse = 1.5; 

  } else if (callesOpt[index].categorias[cat].nombre == "Colectivo/Organización") { // ok 
    stroke(colores[10]);
    sizeEllipse = 1.5; 

  } else if (callesOpt[index].categorias[cat].nombre == "Prensa") { // ok 
    stroke(colores[9]);
    sizeEllipse = 1.5; 

  } else if (callesOpt[index].categorias[cat].nombre == "Conmemoraciones") { //ok
    stroke(colores[6]);
    sizeEllipse = 1.5; 

  } else if (callesOpt[index].categorias[cat].nombre == "Zoología") { //ok
    stroke(colores[5]);
    sizeEllipse = 1.5; 

  } else if (callesOpt[index].categorias[cat].nombre == "Botanica") { //ok
    stroke(colores[4]); 
    sizeEllipse = 1.5; 

  } else if (callesOpt[index].categorias[cat].nombre == "Etnias/Filiaciones culturales") { //ok
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








  
}


