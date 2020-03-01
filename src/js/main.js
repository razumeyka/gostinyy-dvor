@@include('./lib/jquery.fancybox.min.js')
@@include('./lib/swiper.js')
@@include('./lib/jquery.viewportchecker.js')
@@include('./lib/select2.full.js')
@@include('./lib/jquery.maskedinput.js')


$(document).ready(function(){
	
	@@include('./lib/swiper-sliders.js')
	@@include('./lib/animation.js')
	
	$('.burger').click( function() { 
        $('.menu-column').toggleClass('visible'); 
    });
	
// plus-button
	
	$('.plus-button').click(function(){
		$(this).slideToggle(300); 
		$(this).parent().next().addClass('active');	
	});
	
// plates height
	
	var w1= $('.dark-plate').width();
	$('.dark-plate').css({
		'height': w1 + 'px'
	});
	
	$(window).resize(function(){
		var w2= $('.dark-plate').width();
		$('.dark-plate').css({
			'height': w2 + 'px'
		});
	});
	
//text open
	
	$('.more-info').click(function(){
		$(this).addClass('open');
	});

// select2
	
	$('.select2').select2({
		width: 'resolve',
		minimumResultsForSearch: Infinity,
		allowClear: true,
		dropdownCssClass: 'select-new-dropdown'
	});
	
// tabs
	
    $('.tabs__button').click(function(){ 
		$('.tabs__button').removeClass('active');
		$(this).addClass('active');
		$('.tabs__content').css('margin-left','-'+$(this).index()+'00%'); 
    });
	
// mask
	
	$('input[type="tel"]').mask("8-999-999-99-99");

	
$(window).resize();
setTimeout(function(){
	ww=0;
	$(window).resize();
},400)
	
}); 

// 	GoogleMap
	
var markerImage, marker;

function initMap() {
	initialize();

	markerImage = new google.maps.MarkerImage(
		'../images/icons/map.png',
		new google.maps.Size(300, 300),
//		new google.maps.Point(0, 0)
	);

	marker = new google.maps.Marker({
		icon: markerImage,
		position: {lat: 54.192193, lng: 37.617769},
		map: map,
		title:"ТРЦ Гостиный двор"
	});		
}

//инициализация карты в div "map"

var map;
function initialize() {
	map = new google.maps.Map(document.getElementById('map'), {
		disableDefaultUI: true,
		scrollwheel: false,
		center: {lat: 54.192223, lng: 37.619049},
		zoom: 18,
		styles:[
		  {
			"elementType": "geometry",
			"stylers": [
			  {
				"color": "#1b1b1a"
			  }
			]
		  },
		  {
			"elementType": "labels",
			"stylers": [
			  {
				"color": "#63533e"
			  },
			  {
				"lightness": -40
			  },
			  {
				"visibility": "on"
			  },
			  {
				"weight": 1.5
			  }
			]
		  },
		  {
			"elementType": "labels.icon",
			"stylers": [
			  {
				"visibility": "off"
			  }
			]
		  },
		  {
			"elementType": "labels.text",
			"stylers": [
			  {
				"color": "#6e5c43"
			  }
			]
		  },
		  {
			"elementType": "labels.text.fill",
			"stylers": [
			  {
				"color": "#63533e"
			  }
			]
		  },
		  {
			"elementType": "labels.text.stroke",
			"stylers": [
			  {
				"color": "#63533e"
			  },
			  {
				"visibility": "off"
			  }
			]
		  },
		  {
			"featureType": "administrative",
			"elementType": "geometry",
			"stylers": [
			  {
				"color": "#6e5c43"
			  }
			]
		  },
		  {
			"featureType": "administrative",
			"elementType": "geometry.stroke",
			"stylers": [
			  {
				"visibility": "off"
			  }
			]
		  },
		  {
			"featureType": "administrative",
			"elementType": "labels",
			"stylers": [
			  {
				"color": "#6e5c43"
			  },
			  {
				"weight": 1
			  }
			]
		  },
		  {
			"featureType": "administrative",
			"elementType": "labels.icon",
			"stylers": [
			  {
				"visibility": "on"
			  }
			]
		  },
		  {
			"featureType": "administrative",
			"elementType": "labels.text.fill",
			"stylers": [
			  {
				"visibility": "off"
			  }
			]
		  },
		  {
			"featureType": "administrative.country",
			"elementType": "labels",
			"stylers": [
			  {
				"color": "#6e5c43"
			  }
			]
		  },
		  {
			"featureType": "administrative.country",
			"elementType": "labels.text.fill",
			"stylers": [
			  {
				"color": "#9e9e9e"
			  },
			  {
				"visibility": "on"
			  }
			]
		  },
		  {
			"featureType": "administrative.land_parcel",
			"stylers": [
			  {
				"visibility": "off"
			  }
			]
		  },
		  {
			"featureType": "administrative.locality",
			"elementType": "labels.text.fill",
			"stylers": [
			  {
				"color": "#bdbdbd"
			  }
			]
		  },
		  {
			"featureType": "poi",
			"elementType": "labels",
			"stylers": [
			  {
				"saturation": -25
			  },
			  {
				"visibility": "on"
			  }
			]
		  },
		  {
			"featureType": "poi",
			"elementType": "labels.text",
			"stylers": [
			  {
				"color": "#63533e"
			  }
			]
		  },
		  {
			"featureType": "poi",
			"elementType": "labels.text.fill",
			"stylers": [
			  {
				"color": "#757575"
			  },
			  {
				"visibility": "off"
			  }
			]
		  },
		  {
			"featureType": "poi.park",
			"elementType": "geometry",
			"stylers": [
			  {
				"color": "#181818"
			  }
			]
		  },
		  {
			"featureType": "poi.park",
			"elementType": "labels.text.fill",
			"stylers": [
			  {
				"color": "#616161"
			  }
			]
		  },
		  {
			"featureType": "poi.park",
			"elementType": "labels.text.stroke",
			"stylers": [
			  {
				"color": "#1b1b1b"
			  }
			]
		  },
		  {
			"featureType": "road",
			"elementType": "geometry",
			"stylers": [
			  {
				"color": "#191919"
			  }
			]
		  },
		  {
			"featureType": "road",
			"elementType": "geometry.fill",
			"stylers": [
			  {
				"color": "#191919"
			  }
			]
		  },
		  {
			"featureType": "road",
			"elementType": "labels.text.fill",
			"stylers": [
			  {
				"color": "#63593e"
			  }
			]
		  },
		  {
			"featureType": "road.arterial",
			"elementType": "geometry",
			"stylers": [
			  {
				"color": "#191919"
			  }
			]
		  },
		  {
			"featureType": "road.arterial",
			"elementType": "geometry.stroke",
			"stylers": [
			  {
				"color": "#373533"
			  }
			]
		  },
		  {
			"featureType": "road.highway",
			"elementType": "geometry",
			"stylers": [
			  {
				"color": "#191919"
			  }
			]
		  },
		  {
			"featureType": "road.highway",
			"elementType": "geometry.stroke",
			"stylers": [
			  {
				"color": "#373533"
			  }
			]
		  },
		  {
			"featureType": "road.highway.controlled_access",
			"elementType": "geometry",
			"stylers": [
			  {
				"color": "#4e4e4e"
			  }
			]
		  },
		  {
			"featureType": "road.local",
			"elementType": "geometry.stroke",
			"stylers": [
			  {
				"color": "#373533"
			  }
			]
		  },
		  {
			"featureType": "road.local",
			"elementType": "labels.text.fill",
			"stylers": [
			  {
				"color": "#63533e"
			  }
			]
		  },
		  {
			"featureType": "transit",
			"elementType": "labels.text.fill",
			"stylers": [
			  {
				"color": "#757575"
			  }
			]
		  },
		  {
			"featureType": "water",
			"elementType": "geometry",
			"stylers": [
			  {
				"color": "#000000"
			  }
			]
		  },
		  {
			"featureType": "water",
			"elementType": "labels.text.fill",
			"stylers": [
			  {
				"color": "#3d3d3d"
			  }
			]
		  }
		]
//		[{"elementType": "geometry",
//			"stylers": [
//			  {
//				"color": "#1b1b1a"
//			  }
//			]
//		},
//		{"elementType": "labels",
//			"stylers": [
//			  {
//				"color": "#63533e"
//			  },
//			  {
//				"lightness": -40
//			  },
//			  {
//				"visibility": "on"
//			  },
//			  {
//				"weight": 1.5
//			  }
//			]
//		},
//		{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#322f2c"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#2b2b24"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"on"}, {"color":"#63533e"}]},{"featureType":"road","elementType":"all","stylers":[{"color":"#191919"}]},
//		{"featureType": "road", "elementType":"labels.text.fill","stylers": [{
//        "color": "#63593e"}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#e6e6e6"},{"visibility":"off"}]}]
	});
}