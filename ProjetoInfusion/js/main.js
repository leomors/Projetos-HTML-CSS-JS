(function(){
	// window.addEventListener('load', function(){
		// console.log(aasa);

		var $body = document.querySelector('body');
		$body.classList.remove('no-js');
		$body.classList.add('js');

		// var $btnMenu = document.querySelector('.header__btn-menu');
		// $btnMenu.removeAttribute('style');
		// var $navMenu = document.querySelector('.header__nav');

		// $btnMenu.addEventListener('click', function(){
		// 	$navMenu.classList.toggle('escondeMenu');
		// });
		
		var menu = new Menu(
		{	container:'.header__nav',
			toggleBtn:'.header__btn-menu',
			widthEnabled:1024
		});
	// });

	var carouselImgs = new Carousel({
		container:'.laptop-slider .slideshow',
		itens: 'figure',
		btnPrev:'.prev',
		btnNext:'.next'
	});


	var carouselQuotes = new Carousel({
		container:'.quote-slideshow',
		itens: 'figure',
		btnPrev:'.prev',
		btnNext:'.next'
	});

})();