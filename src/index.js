/* eslint-disable dot-notation */
'use strict'

import * as map from './scripts/map.js'
import * as preprocess from './scripts/preprocess.js'
import * as legend from './scripts/legend.js'
import * as hover from './scripts/hover.js'

/**
 * Gives the canvas the right size  and create a container for the map background
 * @param {number} width The data to be displayed
 * @param {number} height The projection to use to convert the longitude and latitude
 */
function generateMapG (width, height) {
  // canvas
  d3.select('.map')
    .attr('width', width)
    .attr('height', height)
    // fond de carte
    .append('g')
    .attr('class', 'fond')
    .attr('width', width)
    .attr('height', height)
}

(function (d3) {
  const svgSize = {
    width: 800,
    height: 625
  }
  generateMapG(svgSize['width'], svgSize['height'])

  const projection = d3.geoEqualEarth()
    .center([2.454071, 46.279229]) // Center of France
    .scale(3000) // Adjust scale as needed
    .translate([svgSize['width'] / 2, svgSize['height'] / 2])

  const path = d3.geoPath().projection(projection)
  // Load GeoJSON data
  d3.json('./fra2021.json', d3.autoType).then(function (data) {
    // Create a path for each feature in the GeoJSON
    console.log(data)
    d3.select('.fond').selectAll('.path')
      .data(data.features)
      .enter()
      .append('path')
      .attr('d', path)
      .attr('stroke', 'black')
      .attr('fill', 'lightblue') // Adjust fill color as needed
  })
})(d3)
