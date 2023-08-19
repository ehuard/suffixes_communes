/**
 * Draws a legend in the area at the right of the screen, corresponding to the different suffixes visualized
 *
 * @param {*} color The color scale used throughout the visualisation
 */
export function draw (color) {
  color.domain().forEach(d => {
    const legend = d3.select('.legend')
      .append('div')
      .attr('class', 'legend-marker')

    legend.append('svg')
      .attr('width', 14)
      .attr('height', 20)
      .append('circle')
      .attr('r', 5)
      .attr('cx', 6)
      .attr('cy', 11)
      .attr('fill', color(d))

    legend.append('text')
      .text('-'.concat('', d))
  })
}
