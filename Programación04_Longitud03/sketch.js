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
 createCanvas(1000, 3500);
 background(255);
 textFont('Helvetica');

}

function draw() {
  
    var masculino = 0;
     


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
    var totalesSumado = [];

    var numObjetos = Object.keys(callesOpt).length;//

   
    var catCompA = ["Masculino", "Femenino", "Colectivo/Organización", "Conmemoraciones", "Lugar",  "Botanica", "Prensa", "Tradiciones y costumbres", "Minerales", "Etnias/Filiaciones culturales", "n/a", "Zoología"  ];
    var catCompB = ["Mas.", "Fem.", "Lugar", "Trad.C.", "Bot.", "Zoo.", "Con.", "Etn.", "Col/Org.", "n/a"  ];


let masFem = callesOpt.idtipocategoria;
print(masFem);

for (var i = 0; i <numObjetos; i++ ){
  callesOpt[i].idtipocategoria;
  //print(callesOpt[i].idtipocategoria);

  var tipoCat = callesOpt[i].idtipocategoria;
  
  if (tipoCat ==11 ) { //categoría principal

   // print(callesOpt[i].categoria  +" " + int(callesOpt[i].mtr));

    for (var c = 0; c < catCompA.length; c++){
      if (callesOpt[i].categoria == catCompA[c]){
        totalesSumado[c] = int(callesOpt[i].mtr);
        totales[c] = int(callesOpt[i].mtr);
      }
    }
   
  }


}



totalesSumado.sort(function(a,b){return a - b;});
totales.sort(function(a,b){return a - b;});








/*

fill(0);
        textSize(28);
        textAlign(LEFT, CENTER);
        text("Cantidad de kilómetros por categorías de nombres calles", offSetVX+(0*spaceX),50 + (0*spaceY));
       
*/
var arrayScale = []

var snakeSize = 10000;
var sumArray = totalesSumado.reduce((a, b) => a + b, 0);

var posPos;

var namesOrder = []


for ( var n = 0; n < totalesSumado.length-1; n++) {


 
if (n > 0) {
    posPos =  totalesSumado[n] += totalesSumado[n+1];
} else {
  posPos = 0;
}


  var dataMap = int(map(posPos, 0, sumArray, 0, snakeSize));

 arrayScale.push(dataMap)

 //print(dataMap);
 //print(totalesSumado[n]);
 //print(totales[n] + "totales");

 for (var i = 0; i <numObjetos; i++ ){
  var tipoCat = callesOpt[i].idtipocategoria;
 
    if (tipoCat ==11 ) { //categoría principal

      if (totales[n] == int(callesOpt[i].mtr)) {

        namesOrder.push(callesOpt[i].categoria);


    }

     
  }


}

}
//print(arrayScale);



//print(namesOrder);

snake(snakeSize,arrayScale, namesOrder );



save();

}


function snake(steps, array, labels) {

  var colores = [
    color("#6A12E8"),
    color("#F2D64B"),
    color("#858BF2"),
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


var textLabels = labels;
var arrayCompare = array;
var countColor = 0;

var snakeSteps=steps;
var snkRectSize = (width-50)/104; //20
var snkCurveSize = 3;

var posX = 0;
var posX2 = 0;
var posY = 0;

var posYtext = 0; 
var modPartSnake = 80; //rectPlusCurve
var countPartSnake = 0; //rectPlusCurve
var counY = 0;



for (var i = 0; i < snakeSteps; i++) {

  var modulus = i%modPartSnake;

  var modulus2 = (modPartSnake -(i%modPartSnake))-2;
  //print(modulus2);


if (modulus == 0 ) {
  countPartSnake++;
}
if ( i !=0 &&
  (
  modulus == 0 || 
  modulus == modPartSnake-1 
  ) ){
  counY++;

}

  posY = 100 +( counY *snkRectSize);

  textAlign(RIGHT,TOP);

  for (var ar = 0; ar < arrayCompare.length; ar++) {
    if (arrayCompare[ar] ==i ) {
      countColor++;
      
      posYtext = posY;

    }
    if (countColor != 11  && modulus == 0) {

  
      noStroke();
      fill(110);
      textSize(14);
    text (textLabels[countColor], 185, posYtext);
    
    }


  }

 
fill(colores[countColor]);
stroke(colores[countColor]);











if (modulus == modPartSnake-1 && counY%4 == 1) {
  posX = 200 +(snkRectSize*(modPartSnake-2));

  rect(posX,posY,snkRectSize, snkRectSize);
} else if (counY%4 == 0) {


    posX = 200 + (modulus *snkRectSize);
    rect(posX,posY,snkRectSize, snkRectSize);
  
}


if (counY%4 == 3 ) {

  posX2 = 200 +(snkRectSize*(0));

  rect(posX2,posY,snkRectSize, snkRectSize);
} else if (counY%4 == 2) {


    posX2 = 200+(modulus2 *snkRectSize);
   rect(posX2,posY,snkRectSize, snkRectSize);
  
}


print(countColor);







}




}
