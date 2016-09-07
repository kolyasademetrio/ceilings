$(document).ready(function(){

	/*--------------------------------- функция для адаптивного меню -----------------------------*/

		function menuAdapt(menuBtn, menu, header) {

			var $menuBtn = menuBtn,
				$menu = menu,
				$header = header,
				menuHeight;

			$menuBtn.on('click', function(){
				menuHeight = $header.height();
				$menu.css('top', menuHeight);
				$menu.slideToggle();
			});

			$(window).resize(function(){
				if (window.matchMedia('(max-width: 992px)').matches && $($menu).is(':visible')) {
					$($menu).hide();
				} else if (window.matchMedia('(min-width: 992px)').matches) {
					$($menu).show();
				}
			});

		}

		menuAdapt($('.header .glyphicon.glyphicon-menu-hamburger'), $('.header__navList'), $('.header'));
	
	/*--------------------------------- функция для адаптивного меню End -------------------------*/



	/*--------------------------------- функция для якоря -------------------------*/

		function ancor (ancor, goal) {

			$(ancor).on('click', function(e){
			  $('html,body').stop().animate({ scrollTop: $(goal).offset().top }, 2000);
			  e.preventDefault();
			});

		}

		ancor($('#advantages'), $('.advantages'));
		ancor($('#goods'), $('.goods'));
		ancor($('#cooperation'), $('.cooperation'));
		ancor($('#getConsultation'), $('.getConsultation'));
		ancor($('#ourContacts'), $('.ourContacts'));
	
	/*--------------------------------- функция для якоря Конец -------------------------*/



	/*--------------------------------- функция для вкладок -----------------------------*/

		function getTabs(tabsClass, sectionsClass, classActive, posAbsClass){
			var $tabs = $('.' + tabsClass),
				$sections = $('.' + sectionsClass);

			$sections.not(':first').addClass(posAbsClass);

			$tabs.click(function(){
				$tabs.removeClass(classActive).eq($(this).index()).addClass(classActive);
				$sections.addClass(posAbsClass).eq($(this).index()).removeClass(posAbsClass);
			}).eq(0).addClass(classActive);
		}
		
		/* вызов функции вкладок */
		getTabs('tab', 'slider', 'active', 'posAbs');
	
	/*--------------------------------- функция для вкладок End -------------------------*/



	/*--------------------------------- функция для карусели -------------------------*/

		function getCarousel(viewport, list, item, prev, next) {
			var $viewport = $('.' + viewport),
				$list = $('.' + list),
				$item = $('.' + item),
				$prev = $('.' + prev),
				$next = $('.' + next),
				viewportWidth = $viewport.outerWidth(true),
				timerId;

			$item.width(viewportWidth);
			$list.css({'left' : -viewportWidth}).prepend($item.last());

			$(window).resize(function(){

				var $viewport = $('.' + viewport),
					$list = $('.' + list),
					$item = $('.' + item),
					$prev = $('.' + prev),
					$next = $('.' + next),
					viewportWidth = $viewport.outerWidth(true);

				$item.width(viewportWidth);
				$list.css({'left' : -viewportWidth}).prepend($item.last());

			});

			function nextSlide() {
				$list.animate({'margin-left' : -viewportWidth}, 500, function(){
					$item.first().appendTo($list);
					$list.css({'margin-left' : 0});
				});
			}

			function prevSlide() {
				$list.animate({'margin-left' : viewportWidth}, 500, function(){
					$item.last().prependTo($list);
					$list.css({'margin-left' : 0});
				});
			}

			timerId = setInterval(function() {
				nextSlide();
			}, 2000);

			$prev.click(function(){
				clearInterval(timerId);
				prevSlide();
			});

			$next.click(function(){
				clearInterval(timerId);
				nextSlide();
			});

		}

		/* вызов функции для карусели carouselSimple */
		getCarousel('sliderSimple__viewport', 'sliderSimple__list', 'sliderSimple__item', 'sliderSimple__prev', 'sliderSimple__next');

	/*--------------------------------- функция для карусели End -------------------------*/


	/*--------------------------------- функция для выравнивания высоты колонок -------------------------*/

		function setMaxHeight(elem) {
		    var $elem = $('.' + elem),
		        arrAllHeight = [],
		        maxHeight;
		    
		    $elem.each(function(){
		      arrAllHeight.push($(this).height());
		    });
		    
		    maxHeight = Math.max.apply(null, arrAllHeight);
		    
		    $elem.height(maxHeight);
		}


		/* вызов функции для выравнивания высоты колонок */
		// if (window.matchMedia('only screen and (max-width : 992px)').matches) {

		// 	setMaxHeight('itemQuestion');
		// 	setMaxHeight('itemAnswer');

		// }

		// $(window).resize(function(){

		// 		if ( window.matchMedia('only screen and (max-width : 992px)').matches ) {

		// 			setMaxHeight('itemQuestion');
		// 	  		setMaxHeight('itemAnswer');

		// 		}

		// });

		// setMaxHeight('serviceFooter');
	
	/*--------------------------------- функция для выравнивания высоты колонок End -------------------------*/	  

});