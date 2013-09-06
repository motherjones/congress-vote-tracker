var mj_fix_embed = function(embed) {
    var div = jQuery('<div class="mobile_video_embed_container"></div>');
    var padding_bottom = parseInt(embed.attr('height')) 
        / parseInt(embed.attr('width')) 
        * 100;
    console.log(padding_bottom);
    embed.attr('style', '');
    div.css('padding-bottom', padding_bottom + '%')
    embed.before(div);
    div.append(embed);
}

jQuery(document).ready(function() {
    jQuery('iframe, object, embed').each(function() {
        var $this = jQuery(this);
        if (
               $this.attr('src').match(/youtu/)
            || $this.attr('src').match(/appspot/)
            || $this.attr('src').match(/vimeo/)
            || $this.attr('src').match(/msnbc/)
            || $this.attr('src').match(/livestream/)
        ) {
            console.log('fixin');
            mj_fix_embed($this);
        }
    });
});
