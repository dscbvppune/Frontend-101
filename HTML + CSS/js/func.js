$(function(){

		var bar1 = new ProgressBar.Line(progressline1, {
		strokeWidth: 2,
		easing: 'easeInOut',
		duration: 1400,
		color: '#13171c',
		trailColor: '#999',
		trailWidth: 1,
		svgStyle: {width: '75%', height: '30%'}
	});

	var bar2 = new ProgressBar.Line(progressline2, {
		strokeWidth: 2,
		easing: 'easeInOut',
		duration: 1400,
		color: '#13171c',
		trailColor: '#999',
		trailWidth: 1,
		svgStyle: {width: '75%', height: '30%'}
	});

	var bar3 = new ProgressBar.Line(progressline3, {
		strokeWidth: 2,
		easing: 'easeInOut',
		duration: 1400,
		color: '#13171c',
		trailColor: '#999',
		trailWidth: 1,
		svgStyle: {width: '75%', height: '30%'}
	});

	var bar4 = new ProgressBar.Line(progressline4, {
		strokeWidth: 2,
		easing: 'easeInOut',
		duration: 1400,
		color: '#13171c',
		trailColor: '#999',
		trailWidth: 1,
		svgStyle: {width: '75%', height: '30%'}
	});

	var bar5 = new ProgressBar.Line(progressline5, {
		strokeWidth: 2,
		easing: 'easeInOut',
		duration: 1400,
		color: '#13171c',
		trailColor: '#999',
		trailWidth: 1,
		svgStyle: {width: '75%', height: '30%'}
	});

	var bar6 = new ProgressBar.Line(progressline6, {
		strokeWidth: 2,
		easing: 'easeInOut',
		duration: 1400,
		color: '#13171c',
		trailColor: '#999',
		trailWidth: 1,
		svgStyle: {width: '75%', height: '30%'}
	});

	$(window).load(function(){
		setTimeout(function(){
			$('body').removeClass('noflow')
			$('.loader').addClass('remove-loader')
		}, 2000)
	    var hwid=$(window).innerWidth();
		setTimeout(function(){
			$('.loader').addClass('move-loader')
		}, 2200)
		$('body').css('width', ''+hwid+'');
	})

	$(window).resize(function(){
	    var htemp=$(window).innerHeight();
	    var hwid=$(window).innerWidth();
		$('.masthead').css('height', ''+htemp+'');
		$('body').css('width', ''+hwid+'');
	})

	setInterval(function(){
	    var htemp=$(window).innerHeight();
	    var pdd=htemp/2;
	    pdd=pdd-175;
		$('.masthead').css('height', ''+htemp+'');
		$('.masthead').css('padding-top', ''+pdd+'px');
	}, 10)

	$('.c-line').click(function(){
		window.open("mailto:dewanshrawat15@gmail.com")
	})

	$('.foss').click(function(){
		window.open("https://github.com/coala")
	})

	$('.los-code').click(function(){
		window.open("https://github.com/dewanshrawat15/lastofus")
	})

	$('.los-link').click(function(){
		window.open("https://dewanshrawat.me/lastofus")
	})

	$('.portfolio-code').click(function(){
		window.open("https://github.com/dewanshrawat15/portfolio-redesign")
	})

	$('.portfolio-link').click(function(){
		window.open("https://dewanshrawat.me/portfolio-redesign")
	})

	$('.photographer-code').click(function(){
		window.open("https://github.com/dewanshrawat15/photographer")
	})

	$('.photographer-link').click(function(){
		window.open("https://dewanshrawat.me/photographer")
	})

	$('.edc-code').click(function(){
		window.open("https://github.com/dewanshrawat15/edc19")
	})

	$('.edc-link').click(function(){
		window.open("https://www.edcbvucoep.com/")
	})

	$('.blog-code').click(function(){
		window.open("https://github.com/dewanshrawat15/Blog-App")
	})

	$('.taption-code').click(function(){
		window.open("https://taption.herokuapp.com")
	})

	$('.mitocw-code').click(function(){
		window.open("https://github.com/dewanshrawat15/mit-video-downloader")
	})

	$('.ms-code').click(function(){
		window.open("https://github.com/dewanshrawat15/Mailing-Script")
	})

	var s1 = $('.skills').offset().top;

	$(window).scroll(function(){
		var y = $('html, body').scrollTop();
		if(y>=s1){
			bar1.animate(0.95);
			bar2.animate(0.87);
			bar3.animate(0.75);
			bar4.animate(1.0);
			bar5.animate(0.75);
			bar6.animate(0.84);
		}
	})

	// Easter Egg
	var $a5 = $('#a5');
	var a5 = $a5[0];


	$('.masthead-title').click(function(){
		a5.play()
		var width = $(window).innerWidth();
		if(width>=992){
			$('html, body').animate({scrollTop: $('.contact').offset().top }, 32000)
		}
		else if(width<992 && width >=768){
			$('html, body').animate({scrollTop: $('.contact').offset().top }, 48000)
		}
		else{
			$('html, body').animate({scrollTop: $('.contact').offset().top }, 64000)
		}
	})

})
