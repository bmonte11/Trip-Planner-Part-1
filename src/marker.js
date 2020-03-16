const mapbox = require('mapbox-gl')

const iconUrl = {
  Activity: "url(http://i.imgur.com/WbMOfMl.png)",
  Hotel: "url(http://i.imgur.com/D9574Cu.png)",
  Restaurant: "url(http://i.imgur.com/cqR6pUI.png)",
}

function buildMarker (type, coordArr) {
  const marker = document.createElement('div')
  marker.style.width = "32px";
  marker.style.height = "39px";
  console.log(iconUrl[type])
  marker.style.backgroundImage = iconUrl[type];
  const createdMarker = new mapbox.Marker(marker).setLngLat(coordArr)
  console.log(createdMarker)
  return createdMarker
}

console.log("marker is running")

module.exports = buildMarker
