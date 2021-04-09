mapboxgl.accessToken = 'hidden';
  var map = new mapboxgl.Map({
    style: 'mapbox://styles/anx2020/ck8yr9dfv05am1imab71jh9a0',
    center: [ 11.1629, 59.5845],
    zoom: 11.05,
    pitch: 60,
    bearing: -17.6,
    container: 'mat_map',
    antialias: true
  });



map.on('load', function() {

  
map.resize();
    
// Insert the layer beneath any symbol layer.
var layers = map.getStyle().layers;
 
var labelLayerId;
for (var i = 0; i < layers.length; i++) {
if (layers[i].type === 'symbol' && layers[i].layout['text-field']) {
labelLayerId = layers[i].id;
break;
}
}
 
map.addLayer(
{
'id': '3d-buildings',
'source': 'composite',
'source-layer': 'building',
'filter': ['==', 'extrude', 'true'],
'type': 'fill-extrusion',
'minzoom': 15,
'paint': {
'fill-extrusion-color': '#aaa',
 
// use an 'interpolate' expression to add a smooth transition effect to the
// buildings as the user zooms in
'fill-extrusion-height': [
'interpolate',
['linear'],
['zoom'],
15,
0,
15.05,
['get', 'height']
],
'fill-extrusion-base': [
'interpolate',
['linear'],
['zoom'],
15,
0,
15.05,
['get', 'min_height']
],
'fill-extrusion-opacity': 0.6
}
},
labelLayerId
);
});


// Add geolocate control to the map. 

map.addControl(
  new mapboxgl.GeolocateControl({
      fitBoundsOptions: {
          zoom: 13.5,
      },
      positionOptions: {
          enableHighAccuracy: true
      },
      trackUserLocation: true,
 })
);
    
  


  // Your coordinates function 

  function getUserCoordinates() {
        navigator.geolocation.getCurrentPosition(getUserLongLat);
  }

function getUserLongLat (longlat) {
    setInterval( ()=> {
        // console.log('l.grader ' + longlat.coords.latitude);
        // console.log('b.grader ' + longlat.coords.longitude);
        const userlat = longlat.coords.latitude.toFixed(4);
        const userlong = longlat.coords.longitude.toFixed(4);
        document.getElementById('lengdegrader').innerHTML ="L/B.grader: " + userlat + ' / ' + userlong;
        
    }, 20000)
  
    
}

getUserCoordinates();
