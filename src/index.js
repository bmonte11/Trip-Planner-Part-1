console.log("This is working!!!")


const mapboxgl = require("mapbox-gl");
const newMarker = require('./marker.js')

mapboxgl.accessToken = "pk.eyJ1IjoibW9udGlmaWN1czExIiwiYSI6ImNrN3Vubm5sdzAxbzMzZXBodTB6MHR2OG0ifQ.AIysehDeDQYM0jkuLUXz9w";

const map = new mapboxgl.Map({
  container: "map",
  center: [-87.6354, 41.8885],
  zoom: 12,
  style: "mapbox://styles/mapbox/streets-v10"
});

const marker1 = document.createElement('div')
marker1.style.width = "32px";
marker1.style.height = "39px";
marker1.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)"

new mapboxgl.Marker(marker1).setLngLat([-87.641, 41.895]).addTo(map)

const marker2 = newMarker('Activity', [-87.6226, 41.8826])
marker2.addTo(map)
const marker3 = newMarker('Activity', [-87.6553, 41.9484])
marker3.addTo(map)
const marker4 = newMarker('Activity', [-87.6359, 41.8789])
marker4.addTo(map)


