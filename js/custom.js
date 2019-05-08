jQuery(document).ready(function(){

	jQuery('.show_nav').click(function() {
		jQuery('.nav_top').slideToggle(100);
		jQuery(this).toggleClass('open');
		return false;
	});



	jQuery('.show_bot_nav').click(function() {
		jQuery('.nav_bot').slideToggle(100);
		jQuery(this).toggleClass('open');
		return false;
	});



	jQuery('.show_search').click(function() {
		jQuery('.search').addClass('open');
		return false;
	});
	jQuery(document).click( function(event){
		if( jQuery(event.target).closest(".top_search").length ) 
		return;
		jQuery(".search").removeClass('open');
		event.stopPropagation();
	});



	jQuery('.sub_nav').hover(
	function() {
		jQuery(this).find('.nav_top_sub').fadeIn(100);
	},
	function() {
		jQuery(this).find('.nav_top_sub').fadeOut(100);
	});



	jQuery('input.file, input[type="checkbox"], input[type="radio"], select').styler({
		filePlaceholder: 'Прикрепить файл',
	});



	jQuery(".validate").validate();



	jQuery('.slider').slick({
		dots: true,
		arrows: true,
		autoplay: true,
		autoplaySpeed: 7000,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
	});



	jQuery('.top_user').hover(
	function() {
		jQuery(this).find('ul').fadeIn(100);
	},
	function() {
		jQuery(this).find('ul').fadeOut(100);
	});



    jQuery('.upload a').click(function(){
        jQuery(this).parent().find('input').click();
    });

    jQuery('.upload').fileupload({
        dropZone: jQuery(this),
        add: function (e, data) {
            var tpl = jQuery('<div class="fu_file working"><div class="progress"></div><p></p><span></span></div>');
            var th = jQuery(this);
            tpl.find('p').text(data.files[0].name);
            data.context = tpl.appendTo(th);
            tpl.find('span').click(function(){
                if(tpl.hasClass('working')){
                    jqXHR.abort();
                }
                tpl.fadeOut(function(){
                    tpl.remove();
                });
            });
            var jqXHR = data.submit();
        },
        progress: function(e, data){
            var progress = parseInt(data.loaded / data.total * 100, 10);
            if(progress == 100){
                data.context.removeClass('working');
            }
            jQuery(this).find('.progress').css(
                'width', progress + '%'
            );
        },
        fail:function(e, data){
            data.context.addClass('error');
        }
    });



	jQuery('a.modal').click(function() {
		var id = jQuery(this).attr('href');
		var maskHeight = jQuery(document).height();
		var maskWidth = jQuery(document).width();
		var winH = jQuery(window).height();
		var winHt = jQuery(document).scrollTop();
		var modh = jQuery(id).innerHeight();
		if (modh > winH) {
			jQuery(id).css('top', winHt);
		} else {
			jQuery(id).css('top', winHt + winH/2-modh/2);
		}
		jQuery('.modal_mask').css({'width':maskWidth,'height':maskHeight}).fadeIn(200);
		jQuery(id).fadeIn(200);
		return false;
	});

	jQuery('.modal_close, .modal_mask').click(function() {
		jQuery('.modal_mask, .modal_win').hide();
		return false;
	});



	jQuery('.go_slow').click(function () { 
		elementClick = this.hash;
		destination = jQuery(elementClick).offset().top;
		jQuery('body,html').animate( { scrollTop: destination }, 300 );
		return false;
	});



	jQuery.fn.getTitle = function() {
		var arr = jQuery('a.fancybox');
		jQuery.each(arr, function() {
			var title = jQuery(this).children('img').attr('title');
			jQuery(this).attr('title',title);
		})
	}
	var thumbnails = 'a:has(img)[href$=".bmp"],a:has(img)[href$=".gif"],a:has(img)[href$=".jpg"],a:has(img)[href$=".jpeg"],a:has(img)[href$=".png"],a:has(img)[href$=".BMP"],a:has(img)[href$=".GIF"],a:has(img)[href$=".JPG"],a:has(img)[href$=".JPEG"],a:has(img)[href$=".PNG"]';
	jQuery(thumbnails).each(function(){
		if(jQuery(this).has('img')) {
			if(jQuery(this).hasClass('fancybox')) {
				jQuery(this).getTitle();
			} else {
				jQuery(this).addClass('fancybox').attr('rel','fancybox').getTitle();
			}
		}
	});  
	jQuery('a.fancybox').fancybox({
		'padding': 2,
		'overlayColor': '#000000',
		'overlayOpacity': 0.5,
		'centerOnScroll': true
	});

});