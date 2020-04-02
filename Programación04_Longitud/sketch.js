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
 createCanvas(800, 2000);
 background(255);

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
        color("#8B09FF"),
        color("#6A12E8"),
        color("255")

    ];
/*

    var colores = [
      color("#495073"),
      color("#495073"),
      color("#495073"),
      color("#7E9CD9"),
      color("#A65644"),
      color("#A65644"),
      color("#F2D49B"),
      color("#F2D49B"),
      color("#F2D49B"),
      color("#A0B9D9"),
      color("#495073"),
      color("255")

  ];

  */


    //print(callesOpt);

    var totales = [];
    var longitudes = []; 
    var numObjetos = Object.keys(callesOpt).length

   
    var catCompA = ["Masculino", "Femenino", "Colectivo/Organización", "Conmemoraciones", "Lugar",  "Botanica", "Prensa", "Tradiciones y costumbres", "Minerales", "Etnias/Filiaciones culturales", "n/a", "Zoología"  ];
    var catCompB = ["Mas.", "Fem.", "Lugar", "Trad.C.", "Bot.", "Zoo.", "Con.", "Etn.", "Col/Org.", "n/a"  ];




for (var i = 0; i <numObjetos; i++ ){
  callesOpt[i].idtipocategoria;
  //print(callesOpt[i].idtipocategoria);

  var tipoCat = callesOpt[i].idtipocategoria;
  if (tipoCat ==11 ) { //categoría principal

   // print(callesOpt[i].categoria  +" " + int(callesOpt[i].mtr));

    for (var c = 0; c < catCompA.length; c++){
      if (callesOpt[i].categoria == catCompA[c]){
        totales[c] = int(callesOpt[i].mtr);
      }
    }
   
  }


}

var sumArray = totales.reduce((a, b) => a + b, 0);

totales.sort(function(a,b){return a - b;});



var spaceX = width/3;
var spaceY = 100;

var pos = [];
var offSetVX = 20;
var offSetVY = 100;




pos[0] = createVector(offSetVX+(0*spaceX),offSetVY + (0*spaceY));
pos[1] = createVector(offSetVX+(1*spaceX),offSetVY + (0*spaceY));
pos[2] = createVector(offSetVX+(2*spaceX),offSetVY + (0*spaceY));
pos[3] = createVector(offSetVX+(0*spaceX),offSetVY + (1*spaceY));
pos[4] = createVector(offSetVX+(1*spaceX),offSetVY + (1*spaceY));
pos[5] = createVector(offSetVX+(2*spaceX),offSetVY + (1*spaceY));

pos[6] = createVector(offSetVX+(0*spaceX),offSetVY + (2*spaceY));
pos[7] = createVector(offSetVX+(1*spaceX),offSetVY + (2*spaceY));
pos[8] = createVector(offSetVX+(2*spaceX),offSetVY + (2*spaceY));

pos[9] = createVector(offSetVX+(0*spaceX),offSetVY + (4*spaceY));
pos[10] = createVector(offSetVX+(0*spaceX),offSetVY + (11*spaceY));

//pos[11] = createVector(offSetVX+(0*spaceX),offSetVY + (8*spaceY));


fill(0);
        textSize(28);
        textAlign(LEFT, CENTER);
        text("Cantidad de kilómetros por categorías de nombres calles", offSetVX+(0*spaceX),30 + (0*spaceY));
       




for ( var n = totales.length-2; n >= 0; n--) {

  //print(totales[n]);

 
  var dataMap = map(totales[n], 0, totales[10], 0, width-40);
  
  //print(dataMap);

  for (var i = 0; i <numObjetos; i++ ){
  var tipoCat = callesOpt[i].idtipocategoria;
 
    if (tipoCat ==11 ) { //categoría principal

      if (totales[n] == int(callesOpt[i].mtr)) {

        print(callesOpt[i].categoria + " " + int(totales[n]));




      //var count = 10-n;
      var count = n;

      fill(colores[n]);
          noStroke(); 
          
          var roundedScale = map(dataMap,  0, width-40, 0, 20);

          
        rect( pos[n].x, pos[n].y, dataMap, dataMap,roundedScale );

     
        var offSetX = 0;
        var offSetY = -20;
        fill(100);
        textSize(16);
        textAlign(LEFT, CENTER);
        text(callesOpt[i].categoria, pos[count].x+offSetX, pos[count].y+offSetY);
       


        fill(255);
        var textoScale = map(dataMap,  0, width-40, 12, 60);
        textAlign(CENTER, CENTER);

        textSize(textoScale);
        var km = int(totales[n])/1000;

        if ( n > 5) {

        text(km.toFixed(1) + " " + "km",pos[n].x+dataMap/2, (dataMap/2)+ pos[n].y);

        }

        if ( n > 2 && n<6) {

          text(km.toFixed(1) + " ",pos[n].x+dataMap/2, (dataMap/2)+ pos[n].y);
  
          }


    print(count);

     
       



    }

   
  }


}
}


/*
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
  */
 save();
}


