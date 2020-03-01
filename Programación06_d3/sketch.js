
let categorias;
let totales=[];
let catCompA = ["Masculino", "Femenino", "Lugar", "Cultura", "Botanica", "Zoología", "Conmemoraciones", "Etnias/Filiaciones culturales", "Colectivo / Organización", "n/a"  ];

d3.json("http://pcalles.masakisanto.net/index.php/ws/tcategorias").then( categorias => {
    //console.log(categorias);


    let catCompB = ["Mas.", "Fem.", "Lugar", "Cult.", "Bot.", "Zoo.", "Con.", "Etn.", "Col/Org.", "n/a"  ];


//Width and height
var w = 500;
var h = 100;

var svg = d3.select("body")
            .append("svg")
            .attr("width", w)   // <-- Here
            .attr("height", h); // <-- and here!

    var dataset = [ 5, 10, 15, 20, 25 ];

var circles = svg.selectAll("circle")
    .data(dataset)
    .enter()
    .append("circle");

    circles.attr("cx", function(d, i) {
        return (i * 50) + 25;
    })
   .attr("cy", h/2)
   .attr("r", function(d) {
        return d;
   });

})




