export function setLegendMarkerHandler () {
  // Select the squares and set their event handlers
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
