// Swiper slider	
	
	var sharesSwiper = new Swiper ('.swiper-shares .swiper-container', {
		slidesPerView: "auto",
		spaceBetween: 20,
		navigation: {
			nextEl: ('.swiper-shares .swiper-button-next'),
			prevEl: ('.swiper-shares .swiper-button-prev'),
		},
		breakpoints: {
			1024: {
			  slidesPerView: "auto",
			  spaceBetween:32,
			},
		}
	})
	
	var restaurantsSwiper = new Swiper ('.swiper-restaurants .swiper-container', {
		slidesPerView: 1,
		spaceBetween: 20,
		navigation: {
			nextEl: '.swiper-restaurants .swiper-button-next',
			prevEl: '.swiper-restaurants .swiper-button-prev',
		},
		breakpoints: {
			450: { 
				slidesPerView: 2,
				spaceBetween: 20,
			},
			640: { 
				slidesPerView: 3,
				spaceBetween: 20,
			},
			1024: {
				slidesPerView: 3,
				spaceBetween: 32,
			},
			1280: {
				slidesPerView: 4,
				spaceBetween: 32,
			},
			1440: {
				slidesPerView: 5,
				spaceBetween: 32,
			},
		}
	})
	
	var shopsSwiper = new Swiper ('.swiper-shops .swiper-container', {
		slidesPerView: "auto",
		spaceBetween: 20,
		pagination: {
			el: '.swiper-pagination',
			type: 'progressbar',
		},
		navigation: {
			nextEl: '.swiper-shops .swiper-button-next',
			prevEl: '.swiper-shops .swiper-button-prev',
		},
		breakpoints: {
			1024: {
			  slidesPerView: "auto",
			  spaceBetween:32,
			},
		}
	})
	
	var entertainmentSwiper = new Swiper ('.swiper-entertainment .swiper-container', {
		slidesPerView: "1",
		spaceBetween: 20,
		navigation: {
			nextEl: '.swiper-entertainment .swiper-button-next',
			prevEl: '.swiper-entertainment .swiper-button-prev',
		},
		breakpoints: {
			640: {
			  slidesPerView: 2,
				spaceBetween: 20,
			},
			768: {
				slidesPerView: 2,
			  spaceBetween: 20,
			},
			1024: {
				slidesPerView: 2,
			  spaceBetween: 32,
			},
			1280: {
			  slidesPerView: 3,
			  spaceBetween: 32,
			},
		}
	})
	
	var eventsSwiper = new Swiper ('.swiper-events .swiper-container', {
		slidesPerView: 1,
      	spaceBetween: 20,
		navigation: {
			nextEl: '.swiper-events .swiper-button-next',
			prevEl: '.swiper-events .swiper-button-prev',
		},
		breakpoints: {
			640: {
			  slidesPerView: 3,
				spaceBetween: 20,
			},
			768: {
				slidesPerView: "auto",
			  spaceBetween: 20,
			},
			1024: {
				slidesPerView: "auto",
			  spaceBetween: 32,
			},
		}
	})
	
	var sightSwiper = new Swiper ('.swiper-sight .swiper-container', {
		slidesPerView: 1,
		spaceBetween: 20,
		navigation: {
			nextEl: '.swiper-sight .swiper-button-next',
			prevEl: '.swiper-sight .swiper-button-prev',
		},
		breakpoints: {
			500: { 
				slidesPerView: 2,
				spaceBetween: 20,
			},
			640: { 
				slidesPerView: 3,
				slidesPerColumn: 2,
				slidesPerColumnFill: "row",
				spaceBetween: 20,
			},
			768: { 
				slidesPerView: 2,
				slidesPerColumn: 2,
				slidesPerColumnFill: "row",
				spaceBetween: 20,
			},
			1024: {
				slidesPerView: 3,
				slidesPerColumn: 2,
				slidesPerColumnFill: "row",
				spaceBetween: 32,
			},
		}
	})
	
	var headerSwiper = new Swiper ('.swiper-header .swiper-container', {
		slidesPerView: 1,
		autoplay: {
			delay: 2500,
			disableOnInteraction: false,
		  },
		navigation: {
			nextEl: '.swiper-header .swiper-button-next',
			prevEl: '.swiper-header .swiper-button-prev',
		},
		pagination: {
			el: '.swiper-header .swiper-pagination',
			type: 'progressbar',
		},
//		pagination: {
//			el: '.swiper-pagination',
//			type: 'fraction',
//		},
	})
	
	var servicesSwiper = undefined;
	function initServicesSwiper() {
		var screenWidth = $(window).outerWidth();
		if ( (screenWidth < (1024)) && (servicesSwiper == undefined)) {
			servicesSwiper = new Swiper ('.swiper-services .swiper-container', {
				slidesPerView: 1,
				spaceBetween: 20,
				navigation: {
					nextEl: '.swiper-services .swiper-button-next',
					prevEl: '.swiper-services .swiper-button-prev',
				},
				breakpoints: {
					640: {
						slidesPerView: 3,
						spaceBetween: 20,
					},
					768: { 
						slidesPerView: 2,
						slidesPerColumn: 3,
						slidesPerColumnFill: "row",
						spaceBetween: 20,
					},
				}
			})
		} else if ((screenWidth > 1023) && (servicesSwiper != undefined)) {
		  servicesSwiper.destroy();
		  servicesSwiper = undefined;
		  $('.swiper-services .swiper-wrapper').removeAttr('style');
		  $('.swiper-services .swiper-slide').removeAttr('style');
		}
	}
	initServicesSwiper();

	$(window).resize(function() {
		initServicesSwiper();
	});
	
	var restSwiper = undefined;
	function initSwiper() {
		var screenWidth = $(window).outerWidth();
		if ( (screenWidth < (768)) && (restSwiper == undefined)) {
			restSwiper = new Swiper ('.swiper-restaurants-page .swiper-container', {
				slidesPerView: 1,
				spaceBetween: 20,
				navigation: {
					nextEl: '.swiper-restaurants-page .swiper-button-next',
					prevEl: '.swiper-restaurants-page .swiper-button-prev',
				},
				breakpoints: {
					450: { 
						slidesPerView: 2,
						spaceBetween: 20,
					},
					640: { 
						slidesPerView: 3,
						spaceBetween: 20,
					},
				}
			})
		} else if ((screenWidth > 767) && (restSwiper != undefined)) {
		  restSwiper.destroy();
		  restSwiper = undefined;
		  $('.swiper-restaurants-page .swiper-wrapper').removeAttr('style');
		  $('.swiper-restaurants-page .swiper-slide').removeAttr('style');
		}
	}
	initSwiper();

	$(window).resize(function() {
		initSwiper();
	});
	
	var ShopsGroupSwiper = undefined;
	function initShopsGroupSwiper() {
		var screenWidth = $(window).outerWidth();
		if ( (screenWidth < (768)) && (ShopsGroupSwiper == undefined)) {
			ShopsGroupSwiper = new Swiper ('.swiper-shops-only-mobile .swiper-container', {
				slidesPerView: 1,
				spaceBetween: 20,
				navigation: {
					nextEl: '.swiper-shops-only-mobile .swiper-button-next',
					prevEl: '.swiper-shops-only-mobile .swiper-button-prev',
				},
				breakpoints: {
					450: { 
						slidesPerView: 2,
						spaceBetween: 20,
					},
					640: { 
						slidesPerView: 3,
						spaceBetween: 20,
					},
				}
			})
		} else if ((screenWidth > 767) && (ShopsGroupSwiper != undefined)) {
		  ShopsGroupSwiper.destroy();
		  ShopsGroupSwiper = undefined;
		  $('.swiper-shops-only-mobile .swiper-wrapper').removeAttr('style');
		  $('.swiper-shops-only-mobile .swiper-slide').removeAttr('style');
		}
	}
	initShopsGroupSwiper();

	$(window).resize(function() {
		initShopsGroupSwiper();
	});

	var ProductsSwiper = undefined;
	function initProductsSwiper() {
		var screenWidth = $(window).outerWidth();
		if ( (screenWidth < (768)) && (ProductsSwiper == undefined)) {
			ProductsSwiper = new Swiper ('swiper-products .swiper-container', {
				slidesPerView: 1,
				spaceBetween: 20,
				navigation: {
					nextEl: 'swiper-products .swiper-button-next',
					prevEl: 'swiper-products .swiper-button-prev',
				},
				breakpoints: {
					450: { 
						slidesPerView: 2,
						spaceBetween: 20,
					},
					768: { 
						slidesPerView: 3,
						spaceBetween: 20,
					},
				}
			})
		} else if ((screenWidth > 767) && (ProductsSwiper != undefined)) {
		  ProductsSwiper.destroy();
		  ProductsSwiper = undefined;
		  $('swiper-products .swiper-wrapper').removeAttr('style');
		  $('swiper-products .swiper-slide').removeAttr('style');
		}
	}
	initProductsSwiper();

	$(window).resize(function() {
		initProductsSwiper();
	});