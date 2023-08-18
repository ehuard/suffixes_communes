
/**
 * Filter the data to keep only the communes with the popular suffixes
 * Also project the coordinates from long/lat to x/y
 *
 * @param {string[]} suffixes list of suffixes to keep
 * @param {object[]} data list of communes
 * @param {*} projection projection to use to convert coordinates
 * @returns {object[]} new filtered data
 */
export function filterBySuffixe (suffixes, data, projection) {
  const data2 = []
  data.forEach((obj) => {
    const parts = obj.nom_reel.split(/[\s-']/)
    for (const suffix of suffixes) {
      if (parts.some(part => part.endsWith(suffix))) {
        const projectedPoint = projection([obj.long_deg, obj.lat_deg])
        obj.suffix = suffix
        obj.x = projectedPoint[0]
        obj.y = projectedPoint[1]
        data2.push(obj)
        break
      }
    }
  })
  console.log(data2)
  return data2
}
