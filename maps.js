mapboxgl.accessToken = 'pk.eyJ1IjoibWl0Y2hhaW5zbGllaXQiLCJhIjoiY2pmYzBjMzd6MG13YjMxcGF3ZzhzbDlkNiJ9.L31BT52cSRJKJsUoIQrNKg';
var map = new mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/mapbox/streets-v9',
    center: [120.596007, 16.402333], // starting position
    zoom: 12, // starting zoom
    interactive: false
});
map.on('load', function () {
        // Add a layer showing the places.
        map.addImage("custom-marker", image);
        map.addLayer({
            "id": "places",
            "type": "symbol",
            "source": {
                "type": "geojson",
                "data": {
                    "type": "FeatureCollection",
                    "features": [{
                        "type": "Feature",
                        "properties": {
                            "description": "<strong>POLICE PRECINT No.8</strong><p class='holder'>Testing 2Testing 2Testing 2Testing 2TestingTesting 2Testing 2Testing 2Testing 2Testing 2Testing 2Testing 2Testing 2Testing 2Testing 2Testing 2Testing 2Testing 2Testing 2Testing 2Testing 2Testing 2Testing 2Testing 2Testing 2Testing 2Testing 2Testing 2Testing 2Testing 2Testing 2Testing 2Testing 2Testing 2Testing 2Testing 2Testing 2Testing 2Testing 2Testing 2Testing 2Testing 2Testing 2Testing 2Testing 2Testing 2Testing 2Testing 2Testing 2Testing 2Testing 2Testing 2Testing 2Testing 2Testing 2Testing 2Testing 2Testing 2Testing 2Testing 2Testing 2Testing 2Testing 2 2Testing 2Testing 2Testing 2Testing 2Testing 2</p>",
                            "iconSize": [40, 40],
                            "icon" : "FireStation"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [120.599572, 16.391066]
                        }
                    }]
                }
            },
            "layout": {
                "icon-image": "{icon}",
                "text-field": "{title}",
                "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
            }
        });

        // When a click event occurs on a feature in the places layer, open a popup at the
        // location of the feature, with description HTML from its properties.

        // Change the cursor to a pointer when the mouse is over the places layer.
        map.on('mouseenter', 'places', function () {
            map.getCanvas().style.cursor = 'pointer';
        });

        // Change it back to a pointer when it leaves.
        map.on('mouseleave', 'places', function () {
            map.getCanvas().style.cursor = '';
        });
});
