import { buildMap } from '../index'

/**
 * Draws a legend in the area at the right of the screen, corresponding to the different suffixes visualized
 *
 * @param {*} color The color scale used throughout the visualisation
 * @param {string[]} suffixesArray The array of the suffixes we are displaying, used to update it here
 */
export function draw (color, suffixesArray) {
  color.domain().forEach(d => {
    const legend = d3.select('.legend')
      .append('div')
      .attr('class', 'legend-marker')
      .attr('id', d)

    legend.append('svg')
      .attr('width', 14)
      .attr('height', 20)
      .append('circle')
      .attr('class', 'legend-circle')
      .attr('r', 5)
      .attr('cx', 6)
      .attr('cy', 11)
      .attr('fill', color(d))

    legend.append('text')
      .text('-'.concat('', d))

    legend.append('button')
      .attr('class', 'remove-button')
      .attr('type', 'button')
      .text('x')
      .on('click', function () {
        removeDivAndUpdateArray(d, suffixesArray)
      })
  })
}

/**
 * Removes the div corresponding to id in the legend and also removes it from suffixesArray
 *
 * @param {string} id identifier (suffix) of the elements we want to remove (div and array element)
 * @param {string[]} suffixesArray The array of the suffixes we are displaying, used to update it here
 */
export function removeDivAndUpdateArray (id, suffixesArray) {
  // Remove the div with the specified id
  const divToRemove = document.getElementById(id)
  if (divToRemove) {
    divToRemove.remove()
  }
  // Update the array - remove the corresponding data based on the button's id
  const indexToRemove = suffixesArray.indexOf(id)
  if (indexToRemove !== -1) {
    suffixesArray.splice(indexToRemove, 1)
    buildMap()
  }
}
