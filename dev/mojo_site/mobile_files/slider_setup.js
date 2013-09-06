make_this_a_slider = function(slider_container_id) {
    var slider_container = document.getElementById(slider_container_id);
    var arrows_holder = jQuery('<ul class="slider_arrows_holder"></ul>')
    var slide_right = jQuery('<li class="slider_arrows slide_right">&raquo;</span>');
    var slide_left = jQuery('<li class="slider_arrows slide_left disabled">&laquo;</span>');

    var slider = new Swipe(slider_container, {
        callback: function(event, index, elem) {
            arrows_holder.find('li').removeClass('selected');
            arrows_holder.find('.slider_story_' + slider.index).addClass('selected');
            slide_right.removeClass('disabled');
            slide_left.removeClass('disabled');
            if (slider.index === 0) {
                slide_left.addClass('disabled')
            } else if (slider.index === (slider.length - 1)) {
                slide_right.addClass('disabled')
            }
        }
    });

    for (var i = 0; i < slider.length; i++) {
        var slide_dot = jQuery('<li><span class="marker">&nbsp;</span></li>');
        slide_dot.addClass('slider_story_' + i);
        (function(i) {
            slide_dot.bind('click', function() {
                slider.slide(i);
            })
        })(i);
        if (i === 0) { slide_dot.addClass('selected'); }
        arrows_holder.append(slide_dot);
    }

    slide_right.bind('click', function() {
        if (!jQuery(this).hasClass('disabled')) {
            slider.next();
        }
    });
    arrows_holder.append(slide_right);
    slide_left.bind('click', function() {
        if (!jQuery(this).hasClass('disabled')) {
            slider.prev();
        }
    });
    arrows_holder.prepend(slide_left);

    var total_holder_lis = slider.length + 2;
    var slider_dot_width = Math.floor(100 / total_holder_lis) + '%';
    /*
    arrows_holder.find('li').each(function() {
        jQuery(this).css('width', slider_dot_width);
    });
    */


    jQuery('#' + slider_container_id).after(arrows_holder);
}
