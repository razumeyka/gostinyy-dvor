@@include('./lib/svg-pan-zoom.js')
@@include('./lib/hammer.js')
@@include('./lib/jquery.ui.touch-punch.min.js')

$(document).ready(function(){
	
// scheme plates
	
	$.ajax({
		url: 'shops.xml',
		dataType: 'xml',
		success: function(data){
			// Extract relevant data from XML
			var xml = $('shop',data);
			var hoverPlates = [];
			$(xml).each(function() {
				var shopCode = $(this).attr('code');
				var shopName = $(this).find('name').text();
				var shopPhone = $(this).find('phone').text();
				var internalLink = $(this).find('internal').text();
				hoverPlates.push({code: shopCode, name: shopName, phone: shopPhone, internal: internalLink});
			});
			
			for ( var i=0; i<hoverPlates.length; i++ ) {
				var codeVal = hoverPlates[i].code;
				var hoverPlate = $('.hover-plate[data-id=' + codeVal + ']');
				hoverPlate.find(".hover-plate__name").html(hoverPlates[i].name);
				hoverPlate.find(".contact_phone").html(hoverPlates[i].phone).attr('href', 'tel:' + hoverPlates[i].phone);
				hoverPlate.find(".button").attr('href', hoverPlates[i].internal);
			}
		},
		error: function(data){
			console.log('Error loading XML data');
		}
	});

	
// scheme search
	
	var availableShops = [];
	$('.hover-plate').each(function() {
		var num = $(this).data('id');
		var names = $(this).data('name');
		var name = $(this).find('.hover-plate__name').html();
		availableShops.push({id: num, label: names, value: name});
	});

	$( "#input-search-scheme" ).autocomplete({
		source: availableShops,
		autoFocus: true,
		response:function(event,ui){
			for ( var i=0; i<ui.content.length; i++ ) {
				var newVal = ui.content[i].value;
				var newLabel = ui.content[i].value;
				var newId = ui.content[i].id;
				ui.content[i] = ({id: newId, label: newLabel, value: newVal})
			}
		},
		open:function(event,ui){
			$("#input-search-scheme").addClass("is-open");
			$('.hover-plate').removeClass('hover');
		},
		close:function(event,ui){
			$( "#input-search-scheme" ).removeClass("is-open");
		},
		focus:function(event,ui){
			$('.hover-plate').removeClass('hover');
			$('.scheme .cls-1').removeClass('active');
			var shopId = ui.item.id;
			var hoverPlate = $('.hover-plate[data-id=' + shopId + ']');
			var scheme = hoverPlate.closest('.scheme');
			var index = scheme.closest('.tabs__item').index();
			var height = scheme.closest('.tabs__item').height();
			$('.tabs__button').removeClass('active');
			$('.tabs__button').eq(index).addClass('active');
			$('.tabs__content').css({
				'margin-left': '-'+index+'00%',
				'height': height + 'px'
			});
			var path = $('.scheme .cls-1[data-id=' + shopId + ']');
			path.addClass('active');
			hoverPlate.addClass('hover');
			var leftWidth = hoverPlate.innerWidth();
			var topHeight = hoverPlate.innerHeight();
			var offsetTop = path[0].getBoundingClientRect().top - scheme[0].getBoundingClientRect().top;
			var offsetLeft = path[0].getBoundingClientRect().left - scheme[0].getBoundingClientRect().left;
			var centerLeft = parseInt(path[0].getBoundingClientRect().right - path[0].getBoundingClientRect().left);
			hoverPlate.css({
				'top': (offsetTop - topHeight) + 'px',
				'left': (offsetLeft - leftWidth/2 + centerLeft/2) + 'px'
			});
		},
		select:function(event,ui){
			$('.hover-plate').removeClass('hover');
			$('.scheme .cls-1').removeClass('active');
			var shopId = ui.item.id;
			var path = $('.scheme .cls-1[data-id=' + shopId + ']');
			var hoverPlate = $('.hover-plate[data-id=' + shopId + ']');
			var scheme = hoverPlate.closest('.scheme');
			
			var index = scheme.closest('.tabs__item').index();
			var height = scheme.closest('.tabs__item').height();
			$('.tabs__button').removeClass('active');
			$('.tabs__button').eq(index).addClass('active');
			$('.tabs__content').css({
				'margin-left': '-'+index+'00%',
				'height': height + 'px'
			});
			var leftWidth = hoverPlate.innerWidth();
			var topHeight = hoverPlate.innerHeight();
			var offsetTop = path[0].getBoundingClientRect().top - scheme[0].getBoundingClientRect().top;
			var offsetLeft = path[0].getBoundingClientRect().left - scheme[0].getBoundingClientRect().left;
			var centerLeft = parseInt(path[0].getBoundingClientRect().right - path[0].getBoundingClientRect().left);	
			$('html').animate({scrollTop: offsetTop
			}, 500 );
			path.addClass('active');
			hoverPlate.addClass('hover');
			hoverPlate.css({
				'top': (offsetTop - topHeight) + 'px',
				'left': (offsetLeft - leftWidth/2 + centerLeft/2) + 'px'
			});
		}
	});
	
// scheme zoom
		
	var eventsHandler;
    eventsHandler = {
        haltEventListeners: ['touchstart', 'touchend', 'touchmove', 'touchleave', 'touchcancel']
        ,init: function(options) {
            var instance = options.instance
            , initialScale = 0.1

            // Init Hammer
            // Listen only for pointer and touch events
            this.hammer = Hammer(options.svgElement, {
              inputClass: Hammer.SUPPORT_POINTER_EVENTS ? Hammer.PointerEventInput : Hammer.TouchInput
            })

            // Enable pinch
            this.hammer.get('pinch').set({enable: true})

            // Handle pan
            this.hammer.on('panstart panmove', function(ev){
              // Pan only the difference
              instance.panBy({x: ev.deltaX - pannedX, y: ev.deltaY - pannedY})
              pannedX = ev.deltaX
              pannedY = ev.deltaY
            })

            // Handle pinch
            this.hammer.on('pinchstart pinchmove', function(ev){
              // On pinch start remember initial zoom
              if (ev.type === 'pinchstart') {
                initialScale = instance.getZoom()
                instance.zoomAtPoint(initialScale * ev.scale, {x: ev.center.x, y: ev.center.y})
              }

              instance.zoomAtPoint(initialScale * ev.scale, {x: ev.center.x, y: ev.center.y})
            })

            // Prevent moving the page on some devices when panning over SVG
            options.svgElement.addEventListener('touchmove', function(e){ e.preventDefault(); });
          }

        , destroy: function(){
            this.hammer.destroy()
          }
    }
	
	var panZoom = svgPanZoom('.svg-scheme_1', {
		minZoom:1,
		maxZoom: 2,
		zoomEnabled: true,
		panEnabled: false,
		mouseWheelZoomEnabled: false,
		dblClickZoomEnabled: false,
		controlIconsEnabled: false,
		customEventsHandler: eventsHandler,
	});

	$('.scheme_1 .zoom-svg-in').click(function(ev){
		ev.preventDefault()
		panZoom.zoomIn()
	});

	$('.scheme_1 .zoom-svg-out').click(function(ev){
		ev.preventDefault()
		panZoom.zoomOut()
	});
	
	$('.tabs__button').click(function(ev){
		ev.preventDefault()
		panZoom.resetZoom()
	});
	
	var panZoom2 = svgPanZoom('.svg-scheme_2', {
		minZoom:1,
		maxZoom: 2,
		zoomEnabled: true,
		panEnabled: false,
		mouseWheelZoomEnabled: false,
		dblClickZoomEnabled: false,
		controlIconsEnabled: false,
		customEventsHandler: eventsHandler,
	});

	$('.scheme_2 .zoom-svg-in').click(function(ev){
		ev.preventDefault()
		panZoom2.zoomIn()
	});

	$('.scheme_2 .zoom-svg-out').click(function(ev){
		ev.preventDefault()
		panZoom2.zoomOut()
	});
	
	$('.tabs__button').click(function(ev){
		ev.preventDefault()
		panZoom2.resetZoom()
	});
	
	var panZoom3 = svgPanZoom('.svg-scheme_3', {
		minZoom:1,
		maxZoom: 2,
		zoomEnabled: true,
		panEnabled: false,
		mouseWheelZoomEnabled: false,
		dblClickZoomEnabled: false,
		controlIconsEnabled: false,
		customEventsHandler: eventsHandler,
	});

	$('.scheme_3 .zoom-svg-in').click(function(ev){
		ev.preventDefault()
		panZoom3.zoomIn()
	});

	$('.scheme_3 .zoom-svg-out').click(function(ev){
		ev.preventDefault()
		panZoom3.zoomOut()
	});
	
	$('.tabs__button').click(function(ev){
		ev.preventDefault()
		panZoom3.resetZoom()
	});
	
	var panZoom4 = svgPanZoom('.svg-scheme_4', {
		minZoom:1,
		maxZoom: 2,
		zoomEnabled: true,
		panEnabled: false,
		mouseWheelZoomEnabled: false,
		dblClickZoomEnabled: false,
		controlIconsEnabled: false,
		customEventsHandler: eventsHandler,
	});

	$('.scheme_4 .zoom-svg-in').click(function(ev){
		ev.preventDefault()
		panZoom4.zoomIn()
	});

	$('.scheme_4 .zoom-svg-out').click(function(ev){
		ev.preventDefault()
		panZoom4.zoomOut()
	});
	
	$('.tabs__button').click(function(ev){
		ev.preventDefault()
		panZoom4.resetZoom()
	});
	
	var panZoom5 = svgPanZoom('.svg-scheme_5', {
		minZoom:1,
		maxZoom: 2,
		zoomEnabled: true,
		panEnabled: false,
		mouseWheelZoomEnabled: false,
		dblClickZoomEnabled: false,
		controlIconsEnabled: false,
		customEventsHandler: eventsHandler,
	});

	$('.scheme_5 .zoom-svg-in').click(function(ev){
		ev.preventDefault()
		panZoom5.zoomIn()
	});

	$('.scheme_5 .zoom-svg-out').click(function(ev){
		ev.preventDefault()
		panZoom5.zoomOut()
	});
	
	$('.tabs__button').click(function(ev){
		ev.preventDefault()
		panZoom5.resetZoom()
	});
	
// scheme draggable
	
	$(".svg-scheme" ).draggable({
		containment: ".drag-container",
		drag: function (event,ui) {
			$('.hover-plate').removeClass('hover');
			$('.scheme .cls-1').removeClass('active');
		},
		revert: function (event,ui) {
			var h = $(this).closest('.scheme').height();
			var w = $(this).closest('.scheme').width();
			var topPos = (Math.abs(parseInt($(this).css('top'))))*10;
			var leftPos = (Math.abs(parseInt($(this).css('left'))))*10;
			if ( (topPos/h)>3) {
				return true;
			}
			else {
				if ((leftPos/w)>1) {
					return true;
				} else {
					return false;
				}
			}
		}
	});
	
// Ховер по магазину - открывается подсказка
	
	$('.scheme .cls-1').on("mouseenter touchend touchstart touchmove", function(){
		$('.hover-plate').removeClass('hover');
		$('.scheme .cls-1').removeClass('active');
		$(this).addClass('active');
		var hoverPlate = $('.hover-plate[data-id=' + $(this).data('id') + ']');
		hoverPlate.addClass('hover');
		var leftWidth = hoverPlate.innerWidth();
		var topHeight = hoverPlate.innerHeight();
		var offsetTop = $(this)[0].getBoundingClientRect().top - $('.scheme')[0].getBoundingClientRect().top;
		var offsetLeft = $(this)[0].getBoundingClientRect().left - $(this).closest('.scheme')[0].getBoundingClientRect().left;
		var centerLeft = parseInt($(this)[0].getBoundingClientRect().right - $(this)[0].getBoundingClientRect().left);
		hoverPlate.css({
			'top': (offsetTop - topHeight) + 'px',
			'left': (offsetLeft - leftWidth/2 + centerLeft/2) + 'px'
		});
		return false;
	});	
	
	$('.scheme .cls-1').mouseleave(function(){
		$('.hover-plate').removeClass('hover');
		$(this).removeClass('active');
	});
	
	$('.hover-plate').mouseenter(function(){
		$(this).addClass('hover');
		$('.scheme .cls-1[data-id=' + $(this).data('id') + ']').addClass('active');
	});
	
	$('.hover-plate__close').click(function(){
		$(this).closest('.hover-plate').removeClass('hover');
		$('.scheme .cls-1[data-id=' + $(this).closest('.hover-plate').data('id') + ']').removeClass('active');
	});
	
	$('.hover-plate').mouseleave(function(){
		$(this).removeClass('hover');
		$('.scheme .cls-1[data-id=' + $(this).data('id') + ']').removeClass('active');
	});
	
// Ховер по лого - открывается подсказка
	
	$('.scheme #LOGO g').on("mouseenter touchend", function(){
		$('.hover-plate').removeClass('hover');
		$('.scheme .cls-1').removeClass('active');
		var path = $('.scheme .cls-1[data-id=' + $(this).data('id') + ']');
		path.addClass('active');
		var hoverPlate = $('.hover-plate[data-id=' + $(this).data('id') + ']');
		hoverPlate.addClass('hover');
		var leftWidth = hoverPlate.innerWidth();
		var topHeight = hoverPlate.innerHeight();
		var offsetTop = path[0].getBoundingClientRect().top - $('.scheme')[0].getBoundingClientRect().top;
		var offsetLeft = path[0].getBoundingClientRect().left - $(this).closest('.scheme')[0].getBoundingClientRect().left;
		var centerLeft = parseInt(path[0].getBoundingClientRect().right - path[0].getBoundingClientRect().left);
		hoverPlate.css({
			'top': (offsetTop - topHeight) + 'px',
			'left': (offsetLeft - leftWidth/2 + centerLeft/2) + 'px'
		});
	});
});