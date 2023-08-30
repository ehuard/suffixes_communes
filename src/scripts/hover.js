/**
 * Set the comportment of the elements in the legend when hovered
 * When we hover the circle, all the markers associated with this suffix will grow
 * from 2px to 4px of radius
 */
export function setLegendMarkerHandler () {
  // Select the legend circles and set their event handlers
  const circles = d3.selectAll('.legend-circle')
  circles.on('mouseover', function () {
    const parentDivId = d3.select(this.parentNode.parentNode).attr('id')
    const markers = d3.selectAll('.marker')
    markers.filter(function (d) { return d.suffix === parentDivId })
      .transition()
      .duration(200)
      .attr('r', '4')
  })
  circles.on('mouseout', function () {
    const parentDivId = d3.select(this.parentNode.parentNode).attr('id')
    const markers = d3.selectAll('.marker')
    markers.filter(function (d) { return d.suffix === parentDivId })
      .transition()
      .duration(200)
      .attr('r', '2')
  })
}
