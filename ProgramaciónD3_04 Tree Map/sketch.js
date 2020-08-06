//d3.json("http://pcalles.masakisanto.net/index.php/ws/tcategorias")

colores = [
  "#9902cd", //masculino 0
  "#ff7534", // femenino 1
  "#ff3301", //colectivo organización 10
  "#ffe054", // conmemoraciones 6
  "#50c2f2", //lugar 3
  "#32cd34", //botánica 4
  "#c4d6d6", // prensa 9

  "#ff00cc", // tradiciones y costumbres 8

  "#AB7B69", // otros 2

  "#0166ff",

  "#ff9899", //zoología 5

  "#ffcc33", // etnias y filiaciones culturales 7

  "white",
];

// set the dimensions and margins of the graph
var margin = { top: 10, right: 10, bottom: 10, left: 10 },
  width = 800 - margin.left - margin.right,
  height = 800 - margin.top - margin.bottom;

// append the svg object to the body of the page
var svg = d3
  .select("#my_dataviz")
  .append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

// read json data

//d3.json("https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/data_dendrogram_full.json", function(data) {
d3.json("http://pcalles.masakisanto.net/index.php/ws/tcategorias", function (
  data
) {
  // Give the data to this cluster layout:

  var tree = { name: "Principal", children: [] };

  var arrprincipal = data.filter(
    (resp) => resp.idtipocategoria == 11 && resp.categoria != "n/a"
  );
  let total=0;
for (const iterator of arrprincipal) {
    total+=iterator.total*1;
}
console.log(total)
  for (const iterator of arrprincipal) {
    tree.children.push({
      name: iterator.categoria,
      colname: iterator.categoria,
      value: iterator.total,
      porcentaje: ((iterator.total*100)/total).toFixed(0) 
    });
  }

  console.log(tree);

  var root = d3.hierarchy(tree).sum((d) => {
    return d.value;
  }); // Here the size of each leave is given in the 'value' field in input data

  // Then d3.treemap computes the position of each element of the hierarchy
  d3.treemap().size([width, height]).padding(2)(root);

  // use this information to add rectangles:
  svg
    .selectAll("rect")
    .data(root.leaves())
    .enter()
    .append("rect")
    .attr("x", function (d) {
      return d.x0;
    })
    .attr("y", function (d) {
      return d.y0;
    })
    .attr("width", function (d) {
      return d.x1 - d.x0;
    })
    .attr("height", function (d) {
      return d.y1 - d.y0;
    })
    .style("stroke", "white")
    .style("fill", (d, i) => {
      return colores[i];
    });

  // and to add the text labels
  svg
    .selectAll("text")
    .data(root.leaves())
    .enter()
    .append("text")
    .attr("x", function (d) {
      return d.x0 + 5;
    }) // +10 to adjust position (more right)
    .attr("y", function (d,i) {
        if (i == 0) {
            return d.y0 + 30;
          } else if (i == 1 || i == 4 || i == 5) {
            return d.y0 + 30;
          } else {
            return d.y0 + 15;
          }
    }) // +20 to adjust position (lower)
    .text(function (d, i) {
      if (i == 2) {
        return "Colectivo";
      } else if (i == 9) {
        return "Etnias";
      } else if (i == 8) {
        return "Min.";
      } else if (i == 10) {
        return "Zoo.";
      } else {
        return d.data.name;
      }
    })
    .attr("font-family", "Mukta")
    .attr("font-size", (d, i) => {
      if (i == 0) {
        return "30px";
      } else if (i == 1 || i == 4 || i == 5) {
        return "22px";
      } else {
        return "13px";
      }
    })
    .attr("fill", (d, i) => {
        if (i == 3) {
            return "#696969";
          }
          if (i == 6) {
            return "#696969";
          }
      if (i == 0) {
        return "white";
      } else {
        return "white";
      }
    });

  // and to add the text labels
  svg
    .selectAll("vals")
    .data(root.leaves())
    .enter()
    .append("text")
    .attr("x", function (d) {
      return d.x0 + 5;
    }) // +10 to adjust position (more right)
    .attr("y", function (d,i) {
        if (i == 0) {
            return d.y0 + 60;
          } else if (i == 1 || i == 4 || i == 5) {
            return d.y0 + 60;
          } else {
            return d.y0 + 28;
          }
      return d.y0 + 40;
    }) // +20 to adjust position (lower)
    .text(function (d) {
      return d.data.value;
    })

    .attr("font-family", "Mukta")
    .attr("font-size", (d, i) => {
      if (i == 0) {
        return "30px";
      } else if (i == 1 || i == 4 || i == 5) {
        return "22px";
      } else {
        return "13px";
      }
    })
    .attr("fill", (d, i) => {
        if (i == 3) {
            return "#696969";
          }
          if (i == 6) {
            return "#696969";
          }
      if (i == 0) {
        return "white";
      } else {
        return "white";
      }
    });
    svg
    .selectAll("title")
    .data(root.leaves())
    .enter()
    .append("text")
    .attr("x", function (d) {
      return d.x0 + 5;
    }) // +10 to adjust position (more right)
    .attr("y", function (d,i) {
        if (i == 0) {
            return d.y0 + 90;
          } else if (i == 1 || i == 4 || i == 5) {
            return d.y0 + 90;
          } else {
            return d.y0 + 45;
          }
      return d.y0 + 40;
    }) // +20 to adjust position (lower)
    .text(function (d) {
      return d.data.porcentaje+"%";
    })

    .attr("font-family", "Mukta")
    .attr("font-size", (d, i) => {
      if (i == 0) {
        return "30px";
      } else if (i == 1 || i == 4 || i == 5) {
        return "22px";
      } else {
        return "13px";
      }
    })
    .attr("fill", (d, i) => {
        if (i == 3) {
            return "#696969";
          }
          if (i == 6) {
            return "#696969";
          }
      if (i == 0) {
        return "white";
      } else {
        return "white";
      }
    });
});
