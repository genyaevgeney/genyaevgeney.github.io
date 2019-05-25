const navForm = document.getElementById('navigator');
const addressFrom = document.getElementById('addressFrom');
const addressTo = document.getElementById('addressTo');
const drivingMode = document.getElementById('drivingMode');
let map;
let directionsService;
let directionsDisplay;
const markersArray = [];

navForm.addEventListener('submit', (e) => {
	e.preventDefault();
	clearOverlays();
	const start = addressFrom.value;
	const end = addressTo.value;
	const mode = drivingMode.value;
	start && end ? calcRoute(start, end, mode) : start ? findPoint(start) :  end ? findPoint(end) : alert('Enter address');
});

function initMap() {
	directionsService = new google.maps.DirectionsService();
	directionsDisplay = new google.maps.DirectionsRenderer();
	const krem = {lat: 49.062785, lng: 33.4156805};
	map = new google.maps.Map(document.getElementById('map'), {zoom: 13, center: krem, styles: [
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#1d2c4d"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#8ec3b9"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#1a3646"
      }
    ]
  },
  {
    "featureType": "administrative.country",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#4b6878"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#64779e"
      }
    ]
  },
  {
    "featureType": "administrative.province",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#4b6878"
      }
    ]
  },
  {
    "featureType": "landscape.man_made",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#334e87"
      }
    ]
  },
  {
    "featureType": "landscape.natural",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#023e58"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#283d6a"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#6f9ba5"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#1d2c4d"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#023e58"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#3C7680"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#80ff00"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#98a5be"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#1d2c4d"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#2c6675"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#255763"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#b0d5ce"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#023e58"
      }
    ]
  },
  {
    "featureType": "transit",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#98a5be"
      }
    ]
  },
  {
    "featureType": "transit",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#1d2c4d"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#283d6a"
      }
    ]
  },
  {
    "featureType": "transit.station",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#3a4762"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#00ffff"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#4e6d70"
      }
    ]
  }
]});
	directionsDisplay.setMap(map);
}

function findPoint(address) {
	const geocoder = new google.maps.Geocoder();
	const infowindow = new google.maps.InfoWindow;
	geocoder.geocode( { 'address': address}, function(results, status) {
		if (status == 'OK') {
			map.zoom = 12;
			map.setCenter(results[0].geometry.location);
			const marker = addMarker(results[0].geometry.location);
			infowindow.setContent(results[0].formatted_address);
			infowindow.open(map, marker);
		} else {
			console.log('Geocode was not successful for the following reason: ' + status);
		}
	});
}

function calcRoute(start, end, drivingMode) {
	directionsDisplay.setMap(map);
	var request = {
		origin: start,
		destination: end,
		travelMode: drivingMode
	};
	directionsService.route(request, function(result, status) {
		directionsDisplay.setOptions( { suppressMarkers: true } ); // remove default markers
		if (status == 'OK') {
			directionsDisplay.setDirections(result);
			//add custom markers
			var leg = result.routes[ 0 ].legs[ 0 ];
			addMarker( leg.start_location);
			addMarker( leg.end_location);
		}
	});
}

function addMarker(location) {
	const icon = '../img/marker.png'; // custom marker
	const marker = new google.maps.Marker({
		position: location,
		icon: icon,
		map: map,
		className: 'marker'
	});
	markersArray.push(marker);
	return marker;
}

// Removes the overlays from the map, but keeps them in the array
function clearOverlays() {
	directionsDisplay.setMap(null);
	if (markersArray) {
		for (let i in markersArray) {
			markersArray[i].setMap(null);
		}
	}
}

// Shows any overlays currently in the array
function showOverlays() {
	if (markersArray) {
		for (let i in markersArray) {
			markersArray[i].setMap(map);
		}
	}
}

// Deletes all markers in the array by removing references to them
function deleteOverlays() {
	if (markersArray) {
		for (let i in markersArray) {
			markersArray[i].setMap(null);
		}
		markersArray.length = 0;
	}
}