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
		filePlaceholder: 'ÐŸÑ€Ð¸ÐºÑ€ÐµÐ¿Ð¸Ñ‚ÑŒ Ñ„Ð°Ð¹Ð»',
	});

	jQuery('.maskPhone').inputmask('9(999)9999999');

  jQuery(".validate").validate({ignore: ''});

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

    jQuery('.upload').each(function() {
        jQuery(this).fileupload({
            dropZone: jQuery(this),
            add: function (e, data) {
                data.url = 'upload.php';
                var tpl = jQuery('<div class="fu_file working"><div class="progress"></div><p></p><span></span><input type="text" name="" value="" /></div>');
                var th = jQuery(this);
                tpl.find('p').text(data.files[0].name);
                data.context = tpl.appendTo(th);
                tpl.find('span').click(function(){
                    if(tpl.hasClass('working')){
                        jqXHR.abort();
                    }
                    tpl.fadeOut(function(){
                        tpl.remove();
                        var paths = '';
                        th.find('.fu_file').each(function() {
                            if (paths != '') {
                                paths += ',';
                            }
                            paths += $(this).data('filename');
                        });
                        th.find('input[type="hidden"]').val(paths);
                    });
                });
                var jqXHR = data.submit();
            },
            progress: function(e, data){
                var progress = parseInt(data.loaded / data.total * 100, 10);
                if(progress == 100){
                    data.context.removeClass('working');
                }
                data.context.find('.progress').css(
                    'width', progress + '%'
                );
            },
            done:function(e, data){
                var result = jQuery.parseJSON(data.result);
                if (result.status == 'success') {
                    data.context.data('filename', result.path);
                    var paths = '';
                    data.context.parent().find('.fu_file').each(function() {
                        if (paths != '') {
                            paths += ',';
                        }
                        paths += jQuery(this).data('filename');
                    });
                    data.context.parent().find('input[type="hidden"]').val(paths);
                    data.context.find('input[type="text"]').attr('name', result.name);
                    data.context.find('input[type="text"]').val(result.value);
                }
                else{
                    data.context.addClass('error');
                }
            },
            fail:function(e, data){
                data.context.addClass('error');
            }
        });
    });
    
    jQuery('.fu_file span').click(function() {
        var th = jQuery(this).parents().filter('.upload');
        var tpl = jQuery(this).parent();
        tpl.fadeOut(function(){
            tpl.remove();
            var paths = '';
            th.find('.fu_file').each(function() {
                if (paths != '') {
                    paths += ',';
                }
                paths += jQuery(this).data('filename');
            });
            th.find('input[type="hidden"]').val(paths);
        });
    });

    jQuery(document).bind('dragover', function (e) {
        var dropZones = jQuery('.upload'),
            timeout = window.dropZoneTimeout;
        if (timeout) {
            clearTimeout(timeout);
        } else {
            dropZones.addClass('in');
        }
        var hoveredDropZone = jQuery(e.target).closest(dropZones);
        dropZones.not(hoveredDropZone).removeClass('hover');
        hoveredDropZone.addClass('hover');
        window.dropZoneTimeout = setTimeout(function () {
            window.dropZoneTimeout = null;
            dropZones.removeClass('in hover');
        }, 100);
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

    jQuery('body').on('change', 'input.no-required-file', function() {
        var curCheckbox = jQuery(this);
        if (curCheckbox.prop('checked')) {
            curCheckbox.parent().parent().find('.upload').hide();
        } else {
            curCheckbox.parent().parent().find('.upload').show();
        }
    });

    jQuery('body').on('click', '#form-sub-save', function() {
        var curForm = $(this).parents().filter('form');
        curForm.find('.required').removeClass('required');
    });

    jQuery('#form-sub-send').each(function() {
        window.setInterval(checkFormSub, 1000);
    });

    function checkFormSub() {
        var curForm = jQuery('#form-sub-send').parents().filter('form');
        var curStatus = true;
        curForm.find('.required').each(function() {
            if (jQuery(this).val() == '' || jQuery(this).hasClass('error')) {
                curStatus = false;
            }
        });
        if (curStatus) {
            jQuery('#form-sub-send').removeClass('disabled').removeAttr('disabled');
        } else {
            jQuery('#form-sub-send').addClass('disabled').attr('disabled', true);
        }
    }

    jQuery('body').on('click', '#form-sub-save', function() {
        var curForm = $(this).parents().filter('form');
        curForm.find('.required').removeClass('required');
    });

});
