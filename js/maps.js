L.mapbox.accessToken = 'pk.eyJ1Ijoib21uaXVzbm93IiwiYSI6ImFlZ0pNSXMifQ.VNyOy9GaRZ1cAS2nDTp3tw';

var map = L.mapbox.map('map', 'mapbox.streets', {scrollWheelZoom: false}).setView([16.402333, 120.596007], 12);

// zoom the map to that bounding box

var myLayer = L.mapbox.featureLayer().addTo(map);

var geoJson = [{
    "type": "Feature",
    "geometry": {
        "type": "Point",
        "coordinates": [120.578325, 16.411615]
    },
    "properties": {
        "title": "Hospitals location",
//this should let the button code know whether this is a FireStation or a 
//Police catagory, IT IS CASE SENSATIVE!!
		 "FireStation":true,
		 "Police":false,
        "Hospitals":false,
        "icon": {
            "iconUrl": "http://www.pngall.com/wp-content/uploads/2017/05/Map-Marker-Transparent.png",
            "iconSize": [60,50], // size of the icon
            "iconAnchor": [50,50], // point of the icon which will correspond to marker's location
            "popupAnchor": [0, -25], // point from which the popup should open relative to the iconAnchor
            "className": "dot"
			
        },
		'images': [
          ['http://upload.wikimedia.org/wikipedia/commons/0/04/Garfield_Building_Detroit.jpg','<p><b>Descriptive text goes here']
        ]
		
    }
},{
    "type": "Feature",
    "geometry": {
        "type": "Point",
        "coordinates": [120.599572, 16.391066]
    },
    "properties": {
        "title": "Hospitals location 2",
		 "FireStation":false,
		 "Police":true,
        "Hospitals":false,
       "icon": {
            "iconUrl": "http://www.pngall.com/wp-content/uploads/2017/05/Map-Marker-PNG-HD.png",
            "iconSize": [50,50], // size of the icon
            "iconAnchor": [50,50], // point of the icon which will correspond to marker's location
            "popupAnchor": [0, -25], // point from which the popup should open relative to the iconAnchor
            "className": "dot"
			
        },
		'images': [
          ['http://upload.wikimedia.org/wikipedia/commons/0/04/Garfield_Building_Detroit.jpg','<p><b>Descriptive text goes here'],
        ]
    }

},{
    "type": "Feature",
    "geometry": {
        "type": "Point",
        "coordinates": [120.499572, 16.391066]
    },
    "properties": {
        "title": "Hospitals location 3",
		 "FireStation":false,
		 "Police":false,
        "Hospitals":true,
       "icon": {
            "iconUrl": "https://cdn1.iconfinder.com/data/icons/Map-Markers-Icons-Demo-PNG/256/Map-Marker-Flag--Chartreuse.png",
            "iconSize": [50,50], // size of the icon
            "iconAnchor": [50,50], // point of the icon which will correspond to marker's location
            "popupAnchor": [0, -25], // point from which the popup should open relative to the iconAnchor
            "className": "dot"
			
        },
		'images': [
          ['http://upload.wikimedia.org/wikipedia/commons/0/04/Garfield_Building_Detroit.jpg','<p><b>Descriptive text goes here']
        ]
		
    }

}];

// Set a custom icon on each marker based on feature properties.
myLayer.on('layeradd', function(e) {
    var marker = e.layer;
    var feature = marker.feature;
	 
    var images = feature.properties.images
    var slideshowContent = '';
	
marker.setIcon(L.icon(feature.properties.icon));
    for(var i = 0; i < images.length; i++) {
        var img = images[i];

        slideshowContent += '<div class="image' + (i === 0 ? ' active' : '') + '">' +
                              '<img src="' + img[0] + '" />' +
                              '<div class="caption">' + img[1] + '</div>' +
                            '</div>';
    }

    // Create custom popup content
    var popupContent =  '<div id="' + feature.properties.id + '" class="popup">' +
                            '<h2>' + feature.properties.title + '</h2>' +
                            '<div class="slideshow">' +
                                slideshowContent +
                            '</div>'
                        '</div>';

    // http://leafletjs.com/reference.html#popup
    marker.bindPopup(popupContent,{
        closeButton: false,
        minWidth: 400
    });
	
});

        
// Add features to the map
myLayer.setGeoJSON(geoJson)
.addTo(map);
//button stuff
$('.menu-ui a').on('click', function() {
    // For each filter link, get the 'data-filter' attribute value.
    var filter = $(this).data('filter');
    $(this).addClass('active').siblings().removeClass('active');
    myLayer.setFilter(function(f) {
        // If the data-filter attribute is set to "all", return
        // all (true). Otherwise, filter on markers that have
        // a value set to true based on the filter name.
        return (filter === 'all') ? true : f.properties[filter] === true;
    });
    return false;
});