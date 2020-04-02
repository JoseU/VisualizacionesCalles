
let categorias;
let totales=[];
let catCompA = ["Masculino", "Femenino", "Lugar", "Cultura", "Botanica", "Zoología", "Conmemoraciones", "Etnias/Filiaciones culturales", "Colectivo / Organización", "n/a"  ];

d3.json("http://pcalles.masakisanto.net/index.php/ws/tcategorias").then( categorias => {
    //console.log(categorias);


    let catCompB = ["Mas.", "Fem.", "Lugar", "Cult.", "Bot.", "Zoo.", "Con.", "Etn.", "Col/Org.", "n/a"  ];


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

var svgWidth = 500, svgHeight = 300, barPadding = 5;
var barWidth = svgWidth / totales.length;

console.log(svgWidth)

var svg = d3.select('svg')
    .attr("width", svgWidth)
    .attr("height", svgHeight);
    
var barChart = svg.selectAll("rect")
    .data(totales)
    .enter()
    .append("rect")
    .attr("y", function(d) {
         return svgHeight - (d*0.2) 
    })
    .attr("height", function(d) { 
        return d; 
    })
    .attr("width", barWidth - barPadding)
    .attr("class", "bar")
    .attr("fill", "blue")
    .attr("transform", function (d, i) {
        var translate = [barWidth * i, 0]; 
        return "translate("+ translate +")";
    });

var text = svg.selectAll("text")
    .data(totales)
    .enter()
    .append("text")
    .text(function(d) {
        return d;
    })
    .attr("y", function(d, i) {
        return svgHeight - (d*0.2) - 2;
    })
    .attr("x", function(d, i) {
        return barWidth * i;
    })
    .attr("fill", "#A64C38");


})




