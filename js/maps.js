L.mapbox.accessToken = 'pk.eyJ1Ijoib21uaXVzbm93IiwiYSI6ImFlZ0pNSXMifQ.VNyOy9GaRZ1cAS2nDTp3tw';

var map = L.mapbox.map('map', 'mapbox.streets', {scrollWheelZoom: false}).setView([16.402333, 120.596007], 14);

// zoom the map to that bounding box

var myLayer = L.mapbox.featureLayer().addTo(map);

var geoJson = [{
    "type": "Feature",
    "geometry": {
        "type": "Point",
        "coordinates": [120.598262, 16.411478]
    },
    "properties": {
        "title": "Police, Luneta Hill Dr, Baguio, Benguet",
        //this should let the button code know whether this is a FireStation or a 
        //Police catagory, IT IS CASE SENSATIVE!!
        "FireStation":false,
        "Police":true,
        "Hospitals":false,
        "icon": {
            "iconUrl": "js/markers/police.png",
            "iconSize": [25,40], // size of the icon
            "iconAnchor": [50,50], // point of the icon which will correspond to marker's location
            "popupAnchor": [0, -25], // point from which the popup should open relative to the iconAnchor
            "className": "dot"
			
        },
		'images': [
          ['http://upload.wikimedia.org/wikipedia/commons/0/04/Garfield_Building_Detroit.jpg','<p><b>Descriptive text goes here</b></p>']
        ]
		
    }
} ,{
    "type": "Feature",
    "geometry": {
        "type": "Point",
        "coordinates": [120.596429, 16.416112]

    },
    "properties": {
        "title": "Baguio City Police Office Compac 3, Staion 7, 67-69 Lower Bonifacio St, Baguio, Benguet",
		 "FireStation":false,
		 "Police":true,
        "Hospitals":false,
       "icon": {
            "iconUrl": "js/markers/police.png",
            "iconSize": [25,40], // size of the icon
            "iconAnchor": [50,50], // point of the icon which will correspond to marker's location
            "popupAnchor": [0, -25], // point from which the popup should open relative to the iconAnchor
            "className": "dot"
			
        },
		'images': [
          ['http://upload.wikimedia.org/wikipedia/commons/0/04/Garfield_Building_Detroit.jpg','<p><b>Descriptive text goes here</b></p>']
        ]
    }

} ,{
    "type": "Feature",
    "geometry": {
        "type": "Point",
        "coordinates": [120.592413, 16.41446]

    },
    "properties": {
        "title": "Baguio City Crime Laboratory Office, 105 Kayang St, Baguio, 2600 Benguet",
		 "FireStation":false,
		 "Police":true,
        "Hospitals":false,
       "icon": {
            "iconUrl": "js/markers/police.png",
            "iconSize": [25,40], // size of the icon
            "iconAnchor": [50,50], // point of the icon which will correspond to marker's location
            "popupAnchor": [0, -25], // point from which the popup should open relative to the iconAnchor
            "className": "dot"
			
        },
		'images': [
          ['http://upload.wikimedia.org/wikipedia/commons/0/04/Garfield_Building_Detroit.jpg','<p><b>Descriptive text goes here</b></p>']
        ]
    }

} ,{
    "type": "Feature",
    "geometry": {
        "type": "Point",
        "coordinates": [120.59972, 16.421931]

    },
    "properties": {
        "title": "Rimando Police Station, Manuel Roxas, Baguio, Benguet",
		 "FireStation":false,
		 "Police":true,
        "Hospitals":false,
       "icon": {
            "iconUrl": "js/markers/police.png",
            "iconSize": [25,40], // size of the icon
            "iconAnchor": [50,50], // point of the icon which will correspond to marker's location
            "popupAnchor": [0, -25], // point from which the popup should open relative to the iconAnchor
            "className": "dot"
        },
		'images': [
          ['http://upload.wikimedia.org/wikipedia/commons/0/04/Garfield_Building_Detroit.jpg','<p><b>Descriptive text goes here</b></p>']
        ]
    }

} ,{
    "type": "Feature",
    "geometry": {
        "type": "Point",
        "coordinates": [120.593155, 16.424948]
    },
    "properties": {
        "title": "Baguio Police Precinct 2, Under the Flyover,, Magsaysay Ave, Baguio, Benguet",
		 "FireStation":false,
		 "Police":true,
        "Hospitals":false,
       "icon": {
            "iconUrl": "js/markers/police.png",
            "iconSize": [25,40], // size of the icon
            "iconAnchor": [50,50], // point of the icon which will correspond to marker's location
            "popupAnchor": [0, -25], // point from which the popup should open relative to the iconAnchor
            "className": "dot"
        },
		'images': [
          ['http://upload.wikimedia.org/wikipedia/commons/0/04/Garfield_Building_Detroit.jpg','<p><b>Descriptive text goes here</b></p>']
        ]
    }

} ,{
    "type": "Feature",
    "geometry": {
        "type": "Point",
        "coordinates": [120.61451, 16.422939]
    },
    "properties": {
        "title": "STATION 3, Pacdal Cir, Baguio, Benguet",
		 "FireStation":false,
		 "Police":true,
        "Hospitals":false,
       "icon": {
            "iconUrl": "js/markers/police.png",
            "iconSize": [25,40], // size of the icon
            "iconAnchor": [50,50], // point of the icon which will correspond to marker's location
            "popupAnchor": [0, -25], // point from which the popup should open relative to the iconAnchor
            "className": "dot"
			
        },
		'images': [
          ['http://upload.wikimedia.org/wikipedia/commons/0/04/Garfield_Building_Detroit.jpg','<p><b>Descriptive text goes here</b></p>']
        ]
    }

} ,{
    "type": "Feature",
    "geometry": {
        "type": "Point",
        "coordinates": [120.600087, 16.391889]
    },
    "properties": {
        "title": "POLICE PRECINT No.8, Kennon Rd, Baguio, Benguet",
		 "FireStation":false,
		 "Police":true,
        "Hospitals":false,
       "icon": {
            "iconUrl": "js/markers/police.png",
            "iconSize": [25,40], // size of the icon
            "iconAnchor": [50,50], // point of the icon which will correspond to marker's location
            "popupAnchor": [0, -25], // point from which the popup should open relative to the iconAnchor
            "className": "dot"
			
        },
		'images': [
          ['http://upload.wikimedia.org/wikipedia/commons/0/04/Garfield_Building_Detroit.jpg','<p><b>Descriptive text goes here</b></p>']
        ]
    }

} ,{
    "type": "Feature",
    "geometry": {
        "type": "Point",
        "coordinates": [120.57884, 16.412767]
    },
    "properties": {
        "title": "POLICE STATION 1, Naguilian Rd, Baguio, Benguet",
		 "FireStation":false,
		 "Police":true,
        "Hospitals":false,
       "icon": {
            "iconUrl": "js/markers/police.png",
            "iconSize": [25,40], // size of the icon
            "iconAnchor": [50,50], // point of the icon which will correspond to marker's location
            "popupAnchor": [0, -25], // point from which the popup should open relative to the iconAnchor
            "className": "dot"
			
        },
		'images': [
          ['http://upload.wikimedia.org/wikipedia/commons/0/04/Garfield_Building_Detroit.jpg','<p><b>Descriptive text goes here</b></p>']
        ]
    }

} ,{
    "type": "Feature",
    "geometry": {
        "type": "Point",
        "coordinates": [120.581503, 16.402725]
    },
    "properties": {
        "title": "Baguio Police Precinct 10, Marcos Highway 2, Baguio City, Benguet",
		 "FireStation":false,
		 "Police":true,
        "Hospitals":false,
       "icon": {
            "iconUrl": "js/markers/police.png",
            "iconSize": [25,40], // size of the icon
            "iconAnchor": [50,50], // point of the icon which will correspond to marker's location
            "popupAnchor": [0, -25], // point from which the popup should open relative to the iconAnchor
            "className": "dot"
			
        },
		'images': [
          ['http://upload.wikimedia.org/wikipedia/commons/0/04/Garfield_Building_Detroit.jpg','<p><b>Descriptive text goes here</b></p>']
        ]
    }

} ,{
    "type": "Feature",
    "geometry": {
        "type": "Point",
        "coordinates": [120.607286, 16.374975]
    },
    "properties": {
        "title": "Police Station 8, Kennon Rd, Baguio, 2600 Benguet",
		 "FireStation":false,
		 "Police":true,
        "Hospitals":false,
       "icon": {
            "iconUrl": "js/markers/police.png",
            "iconSize": [25,40], // size of the icon
            "iconAnchor": [50,50], // point of the icon which will correspond to marker's location
            "popupAnchor": [0, -25], // point from which the popup should open relative to the iconAnchor
            "className": "dot"
			
        },
		'images': [
          ['http://upload.wikimedia.org/wikipedia/commons/0/04/Garfield_Building_Detroit.jpg','<p><b>Descriptive text goes here</b></p>']
        ]
    }

} ,{
    "type": "Feature",
    "geometry": {
        "type": "Point",
        "coordinates": [120.597602, 16.409604]
    },
    "properties": {
        "title": "Commission on Elections, Gov. Pack Rd, Baguio, Benguet",
		 "FireStation":false,
		 "Police":true,
        "Hospitals":false,
       "icon": {
            "iconUrl": "js/markers/police.png",
            "iconSize": [25,40], // size of the icon
            "iconAnchor": [50,50], // point of the icon which will correspond to marker's location
            "popupAnchor": [0, -25], // point from which the popup should open relative to the iconAnchor
            "className": "dot"
			
        },
		'images': [
          ['http://upload.wikimedia.org/wikipedia/commons/0/04/Garfield_Building_Detroit.jpg','<p><b>Descriptive text goes here</b></p>']
        ]
    }

} ,{
    "type": "Feature",
    "geometry": {
        "type": "Point",
        "coordinates": [120.601432, 16.407411]
    },
    "properties": {
        "title": "DEPARTMENT OF INTERIOR AND LOCAL GOVERNMENT, 125 North Dr, Baguio, Benguet",
		 "FireStation":false,
		 "Police":true,
        "Hospitals":false,
       "icon": {
            "iconUrl": "js/markers/police.png",
            "iconSize": [25,40], // size of the icon
            "iconAnchor": [50,50], // point of the icon which will correspond to marker's location
            "popupAnchor": [0, -25], // point from which the popup should open relative to the iconAnchor
            "className": "dot"
			
        },
		'images': [
          ['http://upload.wikimedia.org/wikipedia/commons/0/04/Garfield_Building_Detroit.jpg','<p><b>Descriptive text goes here</b></p>']
        ]
    }

} ,{
    "type": "Feature",
    "geometry": {
        "type": "Point",
        "coordinates": [120.591366, 16.414553]
    },
    "properties": {
        "title": "CITY DISASTER RISK REDUCTION MANAGEMENT COUNCIL, City Hall Loop, Baguio, Benguet",
		 "FireStation":false,
		 "Police":true,
        "Hospitals":false,
       "icon": {
            "iconUrl": "js/markers/police.png",
            "iconSize": [25,40], // size of the icon
            "iconAnchor": [50,50], // point of the icon which will correspond to marker's location
            "popupAnchor": [0, -25], // point from which the popup should open relative to the iconAnchor
            "className": "dot"
			
        },
		'images': [
          ['http://upload.wikimedia.org/wikipedia/commons/0/04/Garfield_Building_Detroit.jpg','<p><b>Descriptive text goes here</b></p>']
        ]
    }

} ,{
    "type": "Feature",
    "geometry": {
        "type": "Point",
        "coordinates": [120.592998, 16.401553]
    },
    "properties": {
        "title": "BCPO Station, Worcester Rd, Baguio, Benguet",
		 "FireStation":false,
		 "Police":true,
        "Hospitals":false,
       "icon": {
            "iconUrl": "js/markers/police.png",
            "iconSize": [25,40], // size of the icon
            "iconAnchor": [50,50], // point of the icon which will correspond to marker's location
            "popupAnchor": [0, -25], // point from which the popup should open relative to the iconAnchor
            "className": "dot"
			
        },
		'images': [
          ['http://upload.wikimedia.org/wikipedia/commons/0/04/Garfield_Building_Detroit.jpg','<p><b>Descriptive text goes here</b></p>']
        ]
    }

} ,{
    "type": "Feature",
    "geometry": {
        "type": "Point",
        "coordinates": [120.598028, 16.412165]
    },
    "properties": {
        "title": "Mines & Geosciences Bureau, Cordillera Administrative Region, 80 Diego Silang St, Barangay Kabayanihan, Baguio, 2600 Benguet",
		 "FireStation":false,
		 "Police":true,
        "Hospitals":false,
       "icon": {
            "iconUrl": "js/markers/police.png",
            "iconSize": [25,40], // size of the icon
            "iconAnchor": [50,50], // point of the icon which will correspond to marker's location
            "popupAnchor": [0, -25], // point from which the popup should open relative to the iconAnchor
            "className": "dot"
			
        },
		'images': [
          ['http://upload.wikimedia.org/wikipedia/commons/0/04/Garfield_Building_Detroit.jpg','<p><b>Descriptive text goes here</b></p>']
        ]
    }

} ,{
    "type": "Feature",
    "geometry": {
        "type": "Point",
        "coordinates": [120.588986, 16.450278]
    },
    "properties": {
        "title": "La Trinidad Municipal Police Station, La Trinidad, Benguet",
		 "FireStation":false,
		 "Police":true,
        "Hospitals":false,
       "icon": {
            "iconUrl": "js/markers/police.png",
            "iconSize": [25,40], // size of the icon
            "iconAnchor": [50,50], // point of the icon which will correspond to marker's location
            "popupAnchor": [0, -25], // point from which the popup should open relative to the iconAnchor
            "className": "dot"
			
        },
		'images': [
          ['http://upload.wikimedia.org/wikipedia/commons/0/04/Garfield_Building_Detroit.jpg','<p><b>Descriptive text goes here</b></p>']
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