
let categorias;
let totales=[];
var catCompA = ["Masculino", "Femenino", "Lugar", "Cultura", "Botanica", "Zoología", "Conmemoraciones", "Etnias/Filiaciones culturales", "Colectivo / Organización", "n/a"  ];
var catCompB = ["Mas.", "Fem.", "Lugar", "Cult.", "Bot.", "Zoo.", "Con.", "Etn.", "Col/Org.", "n/a"  ];

d3.json("http://pcalles.masakisanto.net/index.php/ws/tcategorias").then( categorias => {
    //console.log(categorias);




for (var i = 0; i <categorias.length; i++ ){
  categorias[i].idtipocategoria;
  //print(callesOpt[i].idtipocategoria);

  var tipoCat = categorias[i].idtipocategoria;
  if (tipoCat ==11 ) {

    console.log(categorias[i].categoria  +" " + categorias[i].total);

    for (var c = 0; c < catCompA.length; c++){
      if (categorias[i].categoria == catCompA[c]){
        totales[c] = categorias[i].total;
      }
    }
   
  }


}

console.log(totales.length + "TOTAL")

d3.select(".chart")
  .selectAll("div")
  .data(totales)
    .enter()
    .append("div")
    .style("width", function(d) { return d *0.5 + "px"; })
    .text(function(d) { return d; });

})




