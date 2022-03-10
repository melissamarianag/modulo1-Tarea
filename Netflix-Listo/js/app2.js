window.addEventListener('load', function(){
	new Glider(document.querySelector('.carousel__lista2'), {
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: '.carousel__indicadores2',
		arrows: {
			prev: '.carousel__anterior2',
			next: '.carousel__siguiente2'
		},
		responsive: [
			{
			  // screens greater than >= 775px
			  breakpoint: 100,
			  settings: {
				// Set to `auto` and provide item width to adjust to viewport
				slidesToShow: 2,
				slidesToScroll: 2
			  }
			},
			{
				// screens greater than >= 775px
				breakpoint: 500,
				settings: {
				  // Set to `auto` and provide item width to adjust to viewport
				  slidesToShow: 3,
				  slidesToScroll: 3
				}
			  },

			  {
				// screens greater than >= 775px
				breakpoint: 1000,
				settings: {
				  // Set to `auto` and provide item width to adjust to viewport
				  slidesToShow: 4,
				  slidesToScroll: 4
				}
			  },
			  {
				// screens greater than >= 775px
				breakpoint: 1500,
				settings: {
				  // Set to `auto` and provide item width to adjust to viewport
				  slidesToShow: 5,
				  slidesToScroll: 5
				}
			  },
			
			
			{
			  // screens greater than >= 1024px
			  breakpoint: 2000,
			  settings: {
				slidesToShow: 6,
				slidesToScroll: 6
			  }
			}
		]
	});
});