/**
 * Defines the contents of the tooltip.
 *
 * @param {object} d The data associated to the hovered element
 * @returns {string} The tooltip contents
 */
export function getContents (d) {
  /* Define and return the tooltip contents including :
    + A title stating the hovered commune's name
    + the post code
    + the population
    + the surface in square km
  */
  const options = { useGrouping: true, minimumFractionDigits: 0, maximumFractionDigits: 0, minimumIntegerDigits: 1 }
  const commune = d.target.__data__.nom_reel
  const postcode = d.target.__data__.code_postal.toLocaleString('en-US', options).replace(/,/g, ' ')
  const habitants = d.target.__data__.pop2012.toLocaleString('en-US', options).replace(/,/g, ' ')
  const surface = d.target.__data__.surface.toLocaleString('en-US', options).replace(/,/g, ' ')
  const content = `
    <div class="tooltip-title"> ${commune}</div>
    <div>Code postal: ${postcode}</div>
    <div>Population (2012): ${habitants}</div>
    <div>Surface: ${surface} km²</div>
  `
  return content
}
