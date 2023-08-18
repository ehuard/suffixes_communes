/* eslint-disable dot-notation */
'use strict'

import * as map from './scripts/map.js'
import * as preprocess from './scripts/preprocess.js'
import * as legend from './scripts/legend.js'
import * as hover from './scripts/hover.js'



(function (d3) {
  const svgSize = {
    width: 800,
    height: 625
  }
  map.generateMapG(svgSize['width'], svgSize['height'])
  map.generateMarkerG(svgSize['width'], svgSize['height'])
  let suffixes = ['ville', 'court', 'oy']
  let colorScale = map.colorDomain(suffixes)

  const projection = d3.geoEqualEarth()
    .center([2.454071, 46.279229]) // Center of France
    .scale(3000) // Adjust scale as needed
    .translate([svgSize['width'] / 2, svgSize['height'] / 2])

  const path = d3.geoPath().projection(projection)
  // Load GeoJSON data and create map background
  d3.json('./fra2021.json', d3.autoType).then(function (data) {
    map.addBackground(data, path)
  })
  d3.csv('./villes_france_simple.csv', d3.autoType).then(data => {
    const data2 = preprocess.filterBySuffixe(suffixes, data, projection)
    map.mapMarkers(data2, colorScale)
  })
})(d3)
