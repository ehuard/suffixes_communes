/**
 * Gives the canvas the right size  and create a container for the map background
 *
 * @param {number} width The data to be displayed
 * @param {number} height The projection to use to convert the longitude and latitude
 */
export function generateMapG (width, height) {
  // canvas
  d3.select('.map')
    .attr('width', width)
    .attr('height', height)
    // fond de carte
    .append('g')
    .attr('id', 'fond')
    .attr('width', width)
    .attr('height', height)
}

/**
 * Generates the SVG element g which will contain the map markers.
 *
 * @param {number} width The width of the graph
 * @param {number} height The height of the graph
 * @returns {*} The d3 Selection for the created g element
 */
export function generateMarkerG (width, height) {
  return d3.select('.map')
    .append('g')
    .attr('id', 'marker-g')
    .attr('width', width)
    .attr('height', height)
}

/**
 * Add the map background
 *
 * @param {*} geoData list of suffixes to keep
 * @param {*} path d3.geoPath() with projection
 */
export function addBackground (geoData, path) {
  d3.select('#fond').selectAll('.path')
    .data(geoData.features)
    .enter()
    .append('path')
    .attr('d', path)
    .attr('stroke', 'black')
    .attr('fill', '#d8f9ff')
}

/**
 * Sets the domain of the color scale.
 *
 * @param {string[]} suffixes One suffix = one color (a color will have several suffixes if too many suffixes)
 * @returns {any} colorScale, takes a string in argument and returns a color
 */
export function colorDomain (suffixes) {
  // Set the color domain
  const color = d3.scaleOrdinal(d3.schemeCategory10)
  color.domain(suffixes)
  return color
}

/**
 * Displays the markers for each commune that we keep
 *
 * @param {object[]} data The communes to show
 * @param {*} color The color scaled used to determine the color of the circles
 * @param {*} tip the tooltip object
 */
export function mapMarkers (data, color, tip) {
  d3.select('#marker-g').selectAll('circle')
    .data(data)
    .enter()
    .append('circle')
    .attr('class', 'marker')
    .attr('fill', function (d) { return color(d.suffix) })
    .attr('stroke-width', 0.5)
    .attr('stroke', 'white')
    .attr('cx', function (d) { return d.x })
    .attr('cy', function (d) { return d.y })
    .attr('r', 2)
    .on('mouseover', tip.show)
    .on('mouseout', tip.hide)
    .on('mouseenter', function (d, event) {
      const currentMarker = d3.select(this)
      currentMarker.attr('r', 5)
    })
    .on('mouseleave', function (d, event) {
      const currentMarker = d3.select(this)
      currentMarker.attr('r', 2)
    })
}
