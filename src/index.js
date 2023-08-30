/* eslint-disable dot-notation */
'use strict'

import * as map from './scripts/map.js'
import * as preprocess from './scripts/preprocess.js'
import * as legend from './scripts/legend.js'
import * as tooltip from './scripts/tooltip.js'
import d3Tip from 'd3-tip'

const suffixes = ['ville', 'court', 'oy', 'ac']
let jsonData = null
let csvData = null
let colorScale = map.colorDomain(suffixes)
const svgSize = {
  width: 800,
  height: 625
}
const projection = d3.geoEqualEarth()
  .center([2.454071, 46.13]) // Center of France
  .scale(3800) // Adjust scale as needed
  .translate([svgSize['width'] / 2, svgSize['height'] / 2])

const path = d3.geoPath().projection(projection)

const tip = d3Tip().attr('class', 'd3-tip').html(function (d) { return tooltip.getContents(d) })

/**
 * Call the functions to update the html to init the graph
 */
function initMap () {
  map.generateMapG(svgSize['width'], svgSize['height'])
  map.generateMarkerG(svgSize['width'], svgSize['height'])
  d3.select('.map').call(tip)
  map.addBackground(jsonData, path)
}

/**
 * Draw the markers and the legend
 */
function buildMap () {
  // Remove the existing maarkers and legend
  d3.select('.map').select('#marker-g').selectAll('circle').remove()
  d3.select('.legend').selectAll('.legend-marker').remove()

  const data2 = preprocess.filterBySuffixe(suffixes, csvData, projection)
  map.mapMarkers(data2, colorScale, tip)
  legend.draw(colorScale)
}

document.getElementById('suffixInput').addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    const textInput = document.getElementById('suffixInput')
    const inputValue = textInput.value.trim()
    if (inputValue !== '') {
      suffixes.push(inputValue)
      colorScale = map.colorDomain(suffixes)
      textInput.value = '' // Clear the input field
      buildMap() // Update the map
    }
  }
})

// Load data from CSV and JSON files
d3.csv('./villes_france_simple.csv').then((data) => {
  csvData = data // Store the CSV data in the global scope

  d3.json('./fra2021.json').then((data2) => {
    jsonData = data2 // Store the JSON data in the global scope
    initMap()
    buildMap()
  })
})
