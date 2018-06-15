/**
 * Format WKID spatial reference variations into a standard structure.
 *
 * @param  {string|number|object} spatialRef - spatial reference variation
 * @return {object} standard spatial reference object
 */
function formatSpatialRef (spatialRef) {
  // Try to parse as in case it is a stringified object
  var parsed = tryJsonParse(spatialRef)

  // If it's not an object but is a number or string-number
  if (typeof parsed !== 'object' && !isNaN(Number(spatialRef))) return { wkid: Number(parsed) }

  // Otherwise, return parsed result
  return parsed
}

function tryJsonParse (json) {
  try {
    return JSON.parse(json)
  } catch (e) {
    return json
  }
}

module.exports = formatSpatialRef
