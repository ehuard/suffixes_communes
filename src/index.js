'use strict'

import * as map from './scripts/map.js'
import * as preprocess from './scripts/preprocess.js'
import * as legend from './scripts/legend.js'
import * as hover from './scripts/hover.js'


function generateMapG (width, height) {
    // canvas
    d3.select('.map')
      .attr('width', width)
      .attr('height', height)
      // fond de carte
      .append("g")
        .attr("class","fond")
        .attr('width', width)
        .attr('height', height)
  
}

(function (d3) {
    const svgSize = {
      width: 800,
      height: 625
    }
    generateMapG(svgSize["width"], svgSize["height"])

    const projection = d3.geoConicConformal()
    .center([2.454071, 46.279229]) // Center of France
    .scale(2600) // Adjust scale as needed
    .translate([svgSize["width"] / 2, svgSize["height"] / 2]);

    const path = d3.geoPath().projection(projection);

    // Load GeoJSON data
    d3.json("data/fra2021.json").then(function(data) {
    // Create a path for each feature in the GeoJSON
    console.log(data)
    svg.selectAll(".path")
    .data(data.features)
    .enter()
    .append("path")
    .attr("d", path)
    .attr("stroke", "black")
    .attr("fill", "lightblue"); // Adjust fill color as needed
});
  
    console.log("salut")
})(d3);