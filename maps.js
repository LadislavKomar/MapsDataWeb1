const map = new Map({
  target: "map",
  layers: [
    new TileLayer({
      source: new OSM(),
    }),
  ],
  view: new View({
    center: [0, 0],
    zoom: 0,
  }),
});
  
  document.getElementById('zoomIn').addEventListener('click', function() {
    var view = map.getView();
    view.setZoom(view.getZoom() + 1);
});

document.getElementById('zoomOut').addEventListener('click', function() {
  var view = map.getView();
  view.setZoom(view.getZoom() - 1);
});