L.mapbox.accessToken = 'pk.eyJ1Ijoib21uaXVzbm93IiwiYSI6ImFlZ0pNSXMifQ.VNyOy9GaRZ1cAS2nDTp3tw';

var map = L.mapbox.map('map', 'mapbox.streets', {scrollWheelZoom: false}).setView([16.402333, 120.596007], 14);

// zoom the map to that bounding box

var myLayer = L.mapbox.featureLayer().addTo(map);

var geoJson = [
//-------------------------------------------------POLICE STATION--------------------------------------------------------------------------    
{
    "type": "Feature",
    "geometry": {
        "type": "Point",
        "coordinates": [120.592209, 16.414176]
    },
    "properties": {
        "title": "Baguio City Police Office Station 1",
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
        "coordinates": [120.599978, 16.391897]

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
        "coordinates": [120.552417, 16.421943]

    },
    "properties": {
        "title": "Baguio City - Police Precinct 9 Office, Quirino National Hwy, Purok 3, Irisan, Baguio, 2600 Benguet",
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
        "coordinates": [120.615569, 16.416719]

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
        "coordinates": [120.598323, 16.412119]
    },
    "properties": {
        "title": "Office of the Station Commander, Session Rd, Baguio, 2600 Benguet",
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
        "coordinates": [120.57936, 16.412446]
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
        "coordinates": [120.607112, 16.375308]
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
        "coordinates": [120.593724, 16.425615]
    },
    "properties": {
        "title": "POLICE STATION 2, Magsaysay Ave, Baguio, Benguet",
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
        "coordinates": [120.619334, 16.379571]
    },
    "properties": {
        "title": "POLICE STATION 4, Baguio, Benguet",
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
        "coordinates": [120.599131, 16.410828]
    },
    "properties": {
        "title": "Police, Luneta Hill Dr, Baguio, Benguet",
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
        "coordinates": [120.592235, 16.414465]
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
        "coordinates": [120.582195, 16.396808]
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
        "coordinates": [120.592727, 16.411248]
    },
    "properties": {
        "title": "TOURIST POLICE UNIT, Shanum Street Corner/ Lakedrive Corner, Lake Dr, Baguio, Benguet",
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
        "coordinates": [120.600237, 16.421613]
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
        "coordinates": [120.600237, 16.421613]
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
        "coordinates": [120.575488, 16.388897]
    },
    "properties": {
        "title": "Baguio Police Precinct 10 Sto Tomas, Marcos Highway, Baguio, Benguet",
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
        "coordinates": [120.596259, 16.416775]
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
        "coordinates": [120.593558, 16.420518]
    },
    "properties": {
        "title": "Brgy. Police Outpost, Slaughterhouse Rd, Brgy. Sto.Nino, Baguio, 2600 Benguet",
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
        "coordinates": [120.633563, 16.414076]
    },
    "properties": {
        "title": "ITOGON MUNICIPAL POLICE STATION, Tuding, Antamok Rd, Itogon, 2604 Benguet",
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
        "coordinates": [120.577482, 16.421633]
    },
    "properties": {
        "title": "Compact Police Station, Baguio, Benguet",
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
        "coordinates": [120.657116, 16.394831]
    },
    "properties": {
        "title": "Ucab Baranggay Police Outpost, Baguio - Bua - Itogon Rd, Itogon, Benguet",
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

}
//-------------------------------------------------FIRE STATION----------------------------------------------------------------------    
,{
    "type": "Feature",
    "geometry": {
        "type": "Point",
        "coordinates": [120.612833, 16.374401]
    },
    "properties": {
        "title": "CRASH FIRE RESCUE UNIT",
		"FireStation":true,
        "Police":false,
        "Hospitals":false,
       "icon": {
            "iconUrl": "js/markers/firestation.png",
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
        "coordinates": [120.606173, 16.426247]
    },
    "properties": {
        "title": "Aurora Hill FIRE STATION, North Central, Baguio, 2600 Benguet",
		"FireStation":true,
        "Police":false,
        "Hospitals":false,
       "icon": {
            "iconUrl": "js/markers/firestation.png",
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
        "coordinates": [120.557298, 16.419183]
    },
    "properties": {
        "title": "Irisan Fire Station, Baguio, Benguet",
		"FireStation":true,
        "Police":false,
        "Hospitals":false,
       "icon": {
            "iconUrl": "js/markers/firestation.png",
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
        "coordinates": [120.591581, 16.414744]
    },
    "properties": {
        "title": "Baguio City Central Fire Station, 1 Corner Abanao and Kayang Streets, Baguio, 2600 Benguet",
        "FireStation":true,
        "Police":false,
        "Hospitals":false,
       "icon": {
            "iconUrl": "js/markers/firestation.png",
            "iconSize": [25,40], // size of the icon
            "iconAnchor": [50,50], // point of the icon which will correspond to marker's location
            "popupAnchor": [0, -25], // point from which the popup should open relative to the iconAnchor
            "className": "dot"
			
        },
		'images': [
          ['http://upload.wikimedia.org/wikipedia/commons/0/04/Garfield_Building_Detroit.jpg','<p><b>Descriptive text goes here</b></p>']
        ]
    }

}
//-------------------------------------------------HOSPITALS----------------------------------------------------------------------    
,{
    "type": "Feature",
    "geometry": {
        "type": "Point",
        "coordinates": [120.5984, 16.41532]
    },
    "properties": {
        "title": "NOTRE DAME DE CHARTRES HOSPITAL, 25, Main Building, Gen Luna Road, Baguio, 2600 Benguet",
        "FireStation":false,
        "Police":false,
        "Hospitals":true,
       "icon": {
            "iconUrl": "js/markers/hospital.png",
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
        "coordinates": [16.401998, 120.597001]
    },
    "properties": {
        "title": "Pines City Doctors Hospital, Magsaysay Avenue, Baguio City2600 Baguio City Benguet, 2600",
        "FireStation":false,
        "Police":false,
        "Hospitals":true,
       "icon": {
            "iconUrl": "js/markers/hospital.png",
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
        "coordinates": [120.595985, 16.401075]
    },
    "properties": {
        "title": "Baguio General Hospital, Baguio General Hospital Driveway, Baguio, 2600 Benguet",
        "FireStation":false,
        "Police":false,
        "Hospitals":true,
       "icon": {
            "iconUrl": "js/markers/hospital.png",
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
        "coordinates": [120.594445, 16.42701]
    },
    "properties": {
        "title": "Pines City Doctor's Hospital, Pines City Doctor's Hospital, Magsaysay Avenue, Baguio City, Benguet",
        "FireStation":false,
        "Police":false,
        "Hospitals":true,
       "icon": {
            "iconUrl": "js/markers/hospital.png",
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
        "coordinates": [120.597517, 16.417153]
    },
    "properties": {
        "title": "Saint Louis University - Hospital of the Sacred Heart, Assumption Rd, Baguio, 2600 Benguet",
        "FireStation":false,
        "Police":false,
        "Hospitals":true,
       "icon": {
            "iconUrl": "js/markers/hospital.png",
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
        "coordinates": [120.597591, 16.40196]
    },
    "properties": {
        "title": "Baguio Medical Center, Kennon Rd, Baguio, Benguet",
        "FireStation":false,
        "Police":false,
        "Hospitals":true,
       "icon": {
            "iconUrl": "js/markers/hospital.png",
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
        "coordinates": [120.597427, 16.413299]
    },
    "properties": {
        "title": "Assumption Medical Diagnostic Center, Inc., VFM Building, 10 Assumption Road, Baguio, 2600 Benguet",
        "FireStation":false,
        "Police":false,
        "Hospitals":true,
       "icon": {
            "iconUrl": "js/markers/hospital.png",
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
        "coordinates": [120.598113, 16.409976]
    },
    "properties": {
        "title": "Celestrel May W. Oras, MD@Baguio General Hospital & Medical Center, Gov. Pack Road, Baguio City, Benguet",
        "FireStation":false,
        "Police":false,
        "Hospitals":true,
       "icon": {
            "iconUrl": "js/markers/hospital.png",
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
        "coordinates": [120.59104, 16.420494]
    },
    "properties": {
        "title": "Baguio Kidney Care, 348 Magsaysay Ave, Baguio, 2602 Benguet",
        "FireStation":false,
        "Police":false,
        "Hospitals":true,
       "icon": {
            "iconUrl": "js/markers/hospital.png",
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
        "coordinates": [120.619984, 16.365228]
    },
    "properties": {
        "title": "FORT DEL PILAR STATION HOSPITAL, Quezon Ave, Baguio, Benguet",
        "FireStation":false,
        "Police":false,
        "Hospitals":true,
       "icon": {
            "iconUrl": "js/markers/hospital.png",
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