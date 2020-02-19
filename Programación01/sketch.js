let calles;
let callesOpt;

let edicion;
let conteoEdi = 0;

let revision;
let conteoRev = 0;

let finalizado;
let conteoFin = 0;
//
let masculino;
let conteoMas = 0;

let femenino;
let conteoFem = 0;  

let colecOrg;
let conteoCol = 0; 

let lugar;
let conteoLug = 0; 

let conmemoraciones;
let conteoCon = 0; 

let botanica;
let conteoBot = 0; 

let prensa;
let conteoPre = 0; 

let cultura;
let conteoCul = 0; 

let minerales;
let conteoMin = 0; 

let etniasFilac;
let conteoEtn = 0; 

let culturaRevisar;
let conteoCulR = 0; 

let n_a;
let conteoN_A = 0; 

let zoologia;
let conteoZoo = 0; 


function preload() {
  // Get the most recent earthquake in the database
  let url =
   'https://pcalles.masakisanto.net/index.php/ws';
  calles = loadJSON(url);

  let url2 =
  'http://pcalles.masakisanto.net/index.php/ws/tcategorias';
  callesOpt = loadJSON(url);
}

function setup() {
  noLoop();
 createCanvas(800, 400);
}

function draw() {
  background(80);
  
    var masculino = 0;
     
  
    var totales = [];
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
        color("#4A40FF"),
        color("#8B09FF"),
        color("#6A12E8")

    ];


for(var i = 0; i < 2696; i ++) {
      
      //print(count);
    
  
 
     // print (calles[i].nombres) ;
      var keysCallesLength = Object.keys(calles[i]).length; 
    //print (keysCallesLength);
  
    // var keysCallesNames = Object.keys(calles[0]); 
   
    

  
   var keysCatNames = Object.keys(calles[i].categorias);
  
    //  print (keysCatNames);
     var keysCatNamesLength =     Object.keys(calles[i].categorias).length;

  
  
  for (var cat= 0; cat <keysCatNamesLength; cat++) {
    
    

    //género
 
var tipoCat = calles[i].categorias[cat].tipocategoria_idtipocategoria;


  // categoría  
if (tipoCat == 11) {
  
 // print(calles[i].nombres  + " " + calles[i].categorias[cat].nombre);
  
  //print(calles[i].categorias[cat].nombre);
  
  
  catCompA = calles[i].categorias[cat].nombre;
  catCompB = ["Masculino", "Femenino", "Lugar", "Cultura", "Botanica", "Zoología", "Conmemoraciones", "Etnias/Filiaciones culturales", "Colectivo / Organización", "n/a"  ];
  catCompB2 = ["Mas.", "Fem.", "Lugar", "Cult.", "Bot.", "Zoo.", "Con.", "Etn.", "Col/Org.", "n/a"  ];


  

 // print(catComp.localeCompare(catComp2));

  if (catCompA.localeCompare(catCompB[0]) == 0) {
    
  conteoMas++;

  totales[0] = conteoMas;
  
 print( "Masculino" + " " + conteoMas);
  }
  
  if (catCompA.localeCompare(catCompB[1]) == 0) {
    
  conteoFem++;

  totales[1] = conteoFem;

  
 print( "Femenino" + " " + conteoFem);
  }
  
    if (catCompA.localeCompare(catCompB[2]) == 0) {
    
  conteoLug++;

  totales[2] = conteoLug;

  
  print( "Lugar" + " " + conteoLug);
  }
  
  
 

  
  if ( catCompA.localeCompare(catCompB[3]) == 0) {
 
    conteoCol++;
print( "Colectivo / Organización" + " " + conteoCol);


totales[3] = conteoCol;



} 


  
  

if (catCompA.localeCompare(catCompB[4]) == 0) {
 
  conteoCon++;
print( "Conmemoraciones" + " " + conteoCon);

totales[4] = conteoCon;


}

if (catCompA.localeCompare(catCompB[5]) == 0) {
 
  conteoBot++;
print( "Botánica" + " " + conteoBot);
totales[5] = conteoBot;


}

if (catCompA.localeCompare(catCompB[6]) == 0) {
 
  conteoPre++;
print( "Prensa" + " " + conteoPre);

totales[6] = conteoPre;


}

if (catCompA.localeCompare(catCompB[7]) == 0) {
 
  conteoCul++;
print( "Cultura" + " " + conteoCul);
totales[7] = conteoCul;


}

if (catCompA.localeCompare(catCompB[8]) == 0) {
 
  conteoMin++;
print( "Minerales" + " " + conteoMin);

totales[8] = conteoMin;


}

if (catCompA.localeCompare(catCompB[9]) == 0) {
 
    conteoEtn++;
print( "Etnias/Filaciones culturales" + " " + etniasFilac);

totales[8] = conteoEtn;


}

if (catCompA.localeCompare(catCompB[10]) == 0) {
 
  conteoCulR++;
print( "Cultura revisar" + " " + conteoCulR);
totales[9] = conteoCulR;


}

if (catCompA.localeCompare(catCompB[11]) == 0) {
 
  conteoN_A++;
print( "n/a" + " " + conteoN_A);
totales[10] = conteoN_A;


}

if (catCompA.localeCompare(catCompB[12]) == 0) {
 
  conteoZoo++;
print( "Zoología" + " " + conteoZoo);

totales[11] = conteoZoo;


}



  
}


    
    
  }
  


  
}

  //

  for ( var x = 0; x < totales.length; x++) {

    var marginX = 40;
    var spaceX = width/(totales.length*1.5); 
    var columnWidth = 40; 
    var sumArray = totales.reduce((a, b) => a + b, 0);
    fill(colores[x]);
    noStroke();
    if (totales[x] != null) {
    
    rect(marginX +(x*spaceX), 0, columnWidth, totales[x]/5);
    
    fill(255);

    textSize(14);
    text(catCompB2[x], marginX+(x*spaceX),(totales[x]/5) +20);
    text(totales[x], marginX+(x*spaceX),(totales[x]/5) +40);

    textSize(20);

    text("total = " + " " +sumArray, width* 0.75,height*0.75);

    
    }
    }
  
  
}