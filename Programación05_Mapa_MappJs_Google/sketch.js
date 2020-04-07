let callesOpt;


function preload() {

  let url =
  'http://pcalles.masakisanto.net/index.php/ws/puntos';
  callesOpt = loadJSON(url);
}

// API Key for Google Maps. Get one here:
// https://developers.google.com/maps/web/
const key = 'AIzaSyAxK04dDrE7ftmNygd3CoJ1QOl6gyaPHEA';

// Style for Google Maps. This is optional. More information here:
// https://mapstyle.withgoogle.com/
const style = [
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#242f3e"
      }
    ]
  },
  {
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#746855"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#242f3e"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "administrative.locality",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#d59563"
      }
    ]
  },
  {
    "featureType": "administrative.neighborhood",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#d59563"
      }
    ]
  },
  {
    "featureType": "poi.business",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#263c3f"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#6b9a76"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#38414e"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#212a37"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9ca5b3"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#746855"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#1f2835"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#f3d19c"
      }
    ]
  },
  {
    "featureType": "transit",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "transit",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#2f3948"
      }
    ]
  },
  {
    "featureType": "transit.station",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#d59563"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#17263c"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#515c6d"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#17263c"
      }
    ]
  }
];



const mappa = new Mappa('Google', key);




// Options for map
const options = {
  lat: -2.9005499,
  lng: -79.0045319,
  zoom: 14.45,
  mapType: "roadmap",
  language: "EN",
  styles: style,
  


};

// Create an instance of Google

let myMap;




function setup() {

  canvas = createCanvas(1800, 920);


  // Create a tile map and overlay the canvas on top.
  myMap = mappa.tileMap(options);
  myMap.overlay(canvas);

  // Load the data
  //meteorites = loadTable('assets/data/Meteorite_Landings.csv', 'csv', 'header');


  myMap.onChange(drawPoint);

}

// The draw loop is fully functional but we are not using it for now.
function draw() {

}


function drawPoint(){
  clear();


  var colores = [
    color("#10B4CC"),
    color("#FF3F9E"),
    color("#9AAFB2"),
    color("#1D04BF"),
    color("#F25CA2"),
    color("#0597F2"),
    color("#F24C3D"),
    color("#8B09FF"),
    color("#F25C05"),
    color("#07038C"),
    color(120),
    color(120),
    color("255")

];

var sizeEllipse = 0;

var numeroCalles =  Object.keys(callesOpt).length;
 // var numeroCalles =  3;

  //print (numeroCalles);


  for (let index = 0; index < numeroCalles; index++) {
    
    
  




  //print(puntosLength);


  var dimensionCate = Object.keys(callesOpt[index].categorias).length;


  for (var cat = 0; cat <dimensionCate; cat++ ) {
noFill();

if (callesOpt[index].categorias[cat].tipocategoria_idtipocategoria == 11) {
 
  if (callesOpt[index].categorias[cat].nombre == "Masculino") {
  
    stroke(colores[0]);
    sizeEllipse = 4;
  } else if (callesOpt[index].categorias[cat].nombre == "Femenino") {
    stroke(colores[1]);
    sizeEllipse = 6;

  } else {
    stroke(colores[2]);
    sizeEllipse = 0.6; 

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


function mousePressed() {
  saveCanvas(canvas, 'png');
}