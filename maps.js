// Create a map object
var map = new ol.Map({
  target: "map", // The id of the div where the map will be rendered
  layers: [
    new ol.layer.Tile({
      source: new ol.source.OSM(), // Use OpenStreetMap as the base layer
    }),
  ],
  view: new ol.View({
    center: ol.proj.fromLonLat([0, 0]), // Center the map at longitude 0, latitude 0
    zoom: 0, // Set the initial zoom level
  }),
});

document.getElementById("zoomIn").addEventListener("click", function () {
  var view = map.getView();
  view.setZoom(view.getZoom() + 1);
});

document.getElementById("zoomOut").addEventListener("click", function () {
  var view = map.getView();
  view.setZoom(view.getZoom() - 1);
});
