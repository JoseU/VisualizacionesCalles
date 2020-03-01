let calles;
let callesOpt;



let aniCount = 0; //conteo para animación
let angles = []



function preload() {

  let url2 =
  'http://pcalles.masakisanto.net/index.php/ws/tcategorias';
  callesOpt = loadJSON(url2);
}

function setup() {
noLoop();
 createCanvas(800, 400);
 background(80);

}

function draw() {
  
    var masculino = 0;
     
  
  
    var colores = [
        color("#2405F2"),
        color("#F2D64B"),
        color("#858BF2"),
        color("#07038C"),
        color("#1D04BF"),
        color("#F25CA2"),
        color("#0597F2"),
        color("#F25C05"),
        color("#F24C3D"),
        color("255"),
        color("#8B09FF"),
        color("#6A12E8")

    ];


    //print(callesOpt);

    var totales = [];
    var numObjetos = Object.keys(callesOpt).length

   
    var catCompA = ["Masculino", "Femenino", "Lugar", "Tradiciones y costumbres", "Botanica", "Zoología", "Conmemoraciones", "Etnias/Filiaciones culturales", "Colectivo / Organización", "n/a"  ];
    var catCompB = ["Mas.", "Fem.", "Lugar", "Trad.C.", "Bot.", "Zoo.", "Con.", "Etn.", "Col/Org.", "n/a"  ];




for (var i = 0; i <numObjetos; i++ ){
  callesOpt[i].idtipocategoria;
  //print(callesOpt[i].idtipocategoria);

  var tipoCat = callesOpt[i].idtipocategoria;
  if (tipoCat ==11 ) {

    print(callesOpt[i].categoria  +" " + callesOpt[i].total);

    for (var c = 0; c < catCompA.length; c++){
      if (callesOpt[i].categoria == catCompA[c]){
        totales[c] = int(callesOpt[i].total);
      }
    }
   
  }


}


var sumArray = totales.reduce((a, b) => a + b, 0);


  for ( var x = 0; x < totales.length; x++) {

    var marginX = 40;
    var spaceX = width/(totales.length*1.5); 
    var columnWidth = 40; 

    fill(colores[x]);
    noStroke();
    if (totales[x] != null) {
    
    rect(marginX +(x*spaceX), 0, columnWidth, totales[x]/5);
    
    fill(255);

    textSize(14);
    text(catCompB[x], marginX+(x*spaceX),(totales[x]/5) +20);
    text(totales[x], marginX+(x*spaceX),(totales[x]/5) +40);

    textSize(20);

    text("total = " + " " +sumArray, width* 0.75,height*0.75);

    
    }
    }
  

    for (var ang = 0; ang < totales.length; ang++) {
      angles[ang] = (totales[ang]/sumArray)*360;
      print(angles[ang]);
    }

   // pieChart(100, angles);

var diameter = 200;
let lastAngle = 0;
   for (let i = 0; i < angles.length; i++) {
    let gray = map(i, 0, angles.length, 0, 255);
    fill(colores[i]);
    arc(
      width / 2,
      height / 2,
      diameter,
      diameter,
      lastAngle,
      lastAngle + radians(angles[i])
    );
    lastAngle += radians(angles[i]);
  }
  
}


function pieChart(diameter, data) {

  print("datatotal" +data.length);
  let lastAngle = 0;
  for (let i = 0; i < data.length; i++) {
    let gray = map(i, 0, data.length, 0, 255);
    fill(gray);
    arc(
      width / 2,
      height / 2,
      diameter,
      diameter,
      lastAngle,
      lastAngle + radians(angles[i])
    );
    lastAngle += radians(angles[i]);
  }
}