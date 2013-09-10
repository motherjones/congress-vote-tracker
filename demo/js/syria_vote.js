/*! Syria Vote - v0.1.0 - 2013-09-09
* https://github.com/motherjones/syria
* Copyright (c) 2013 Mother Jones Data Desk; Licensed MIT */
"use strict";

var current_d = 199;
var current_r = 234;
var current_empty = 2;
var total_seats = 435;
var showing_d_only = false;
var showing_r_only = false;
var displayed_leaning;

var play_time;

var compiled_tooltip = dust.compile(tooltip_template, 'tooltip');
dust.loadSource(compiled_tooltip);

var tooltip_element = jQuery('<div id="tooltip" style="display: none; position: absolute;"><p>text</p></div>');

window.onload = function() {
    jQuery('svg').before(tooltip_element);

//    dataset_times.sort(); oh god don't do this
    var cleaned_times = [];
    for (var i = 0; i < dataset_times.length; i++) {
        var time = dataset_times[i];
        var title;
        for(var k in time) {title = k;}
        cleaned_times.push(cleanup_dataset(time[title]));
    }


    var time_container = jQuery('#time_picker');
    var label_value_now = 'Latest vote tally';
    var time_label = jQuery('<label id="time_picker_label">' + label_value_now + '</label>');
    time_container.after(time_label);
    time_container.noUiSlider({
        range: [0, dataset_times.length],
        handles: 1,
        start: [dataset_times.length],
        step: 1,
        slide: function() {
            var value = $(this).val();
            count_whip(cleaned_times[value]);
            displayed_leaning = cleaned_times[value];

            var title = (value === dataset_times.length)
                ? label_value_now
                : function() { for (var k in dataset_times[value]) return k; }
            time_label.text(title);
        },
    });

    play_time = function(i) {
        if (typeof(i) === 'undefined') {
            i = time_container.val() + 1;
        }
        time_container.val(i);
        count_whip(cleaned_times[i]);
        displayed_leaning = cleaned_times[i];

        var title = (i === dataset_times.length)
            ? label_value_now
            : function() { for (var k in dataset_times[i]) return k; }
        time_label.text(title);
        if (i < dataset_times.length) {
            setTimeout(function() {play_time();}, 1000);
        } else { 
            jQuery('#play_times').removeClass('selected');
        }
    }

    jQuery('#play_times').click(function() {
        jQuery('#play_times').addClass('selected');
        play_time(0);
        return false;
    });

    Tabletop.init({ 
        key: public_spreadsheet_url,
        callback: function(dataset) {
            var leaning = displayed_leaning = cleanup_dataset(dataset);
            cleaned_times.push(leaning);
            count_whip(leaning);
        },
        simpleSheet: true 
    });


    jQuery('svg circle').bind('mouseout', function(){
      tooltip_element.css('display', 'none');
    });
    jQuery('svg circle').bind('mousemove', function(e){
      tooltip_element.css('left', e.pageX + 10)
        .css('top', e.pageY + 10)
        .css('display', 'block')
        .html(jQuery(this).attr('data-tooltip'));
    });

    jQuery('#show_all_parties').click(function() {
        jQuery('#party_picker .selected').removeClass('selected');
        jQuery('#show_all_parties').addClass('selected');
        var faded = jQuery('#syria_leaning .fade');
        for (var i = 0; i < faded.length; i++) {
            faded[i].setAttribute('class', faded[i].getAttribute('class').replace(/\sfade/, '')); 
        }
        showing_d_only = false;
        showing_r_only = false;
        update_count(displayed_leaning);
    });

    jQuery('#show_republicans_only').click(function() {
        jQuery('#party_picker .selected').removeClass('selected');
        jQuery('#show_republicans_only').addClass('selected');
        var faded = jQuery('#syria_leaning .fade');
        for (var i = 0; i < faded.length; i++) {
            faded[i].setAttribute('class', faded[i].getAttribute('class').replace(/\sfade/, '')); 
        }
        var tofade = jQuery('#syria_leaning .democratic,#syria_leaning .empty_seat');
        for (var i = 0; i < tofade.length; i++) {
            tofade[i].setAttribute('class', tofade[i].getAttribute('class') + ' fade'); 
        }
        showing_r_only = true;
        showing_d_only = false;
        update_count(displayed_leaning);
    });
    jQuery('#show_democrats_only').click(function() {
        jQuery('#party_picker .selected').removeClass('selected');
        jQuery('#show_democrats_only').addClass('selected');
        var faded = jQuery('#syria_leaning .fade');
        for (var i = 0; i < faded.length; i++) {
            faded[i].setAttribute('class', faded[i].getAttribute('class').replace(/\sfade/, '')); 
        }
        var tofade = jQuery('#syria_leaning .republican,#syria_leaning .empty_seat');
        for (var i = 0; i < tofade.length; i++) {
            tofade[i].setAttribute('class', tofade[i].getAttribute('class') + ' fade'); 
        }
        showing_d_only = true;
        showing_r_only = false;
        update_count(displayed_leaning);
    });

    jQuery(document).click(function() {
        jQuery('svg circle').bind('mousemove', function(e){
          tooltip_element.css('left', e.pageX + 10)
            .css('top', e.pageY + 10)
            .css('display', 'block')
            .html(jQuery(this).attr('data-tooltip'));
        });
        tooltip_element.css('display', 'none');
    });
    jQuery('svg circle').click(function(e){
        jQuery('svg circle').unbind('mouseout');
        jQuery('svg circle').unbind('mousemove');
        tooltip_element.css('left', e.pageX + 10)
            .css('top', e.pageY + 10)
            .css('display', 'block')
            .html(jQuery(this).attr('data-tooltip'));
        
        if(e.stopPropagation) {
            e.stopPropagation();
        } else {
            e.cancelBubble = true;
        }
        return false;
    });
};



var cleanup_dataset = function( dataset ) {
    var leaning = {
        D: {
            yes : {
                strong: [],
                weak: [],
            },
            no : {
                strong: [],
                weak: [],
            },
            unknown : [],
            undecided : [],
        },
        R: {
            yes : {
                strong: [],
                weak: [],
            },
            no : {
                strong: [],
                weak: [],
            },
            unknown : [],
            undecided : [],
        },
        I: {
            yes : {
                strong: [],
                weak: [],
            },
            no : {
                strong: [],
                weak: [],
            },
            unknown : [],
            undecided : [],
        },
    };

    var num_d = 0;
    var num_r = 0;
    var num_i = 0;

    for (var i = 0; i < dataset.length; i++) {
        var lean = dataset[i].lean = (dataset[i].undecided)
            ? 'undecided'
            : (dataset[i].unknown)
                ? 'unknown'
                : (dataset[i].no || dataset[i].leanno)
                    ? 'no'
                    : 'yes'
        var strength = dataset[i].strength = (dataset[i].undecided || dataset[i].unknown)
            ? ''
            : (dataset[i].no || dataset[i].yes) 
                ? 'strong' 
                : 'weak';
        if (dataset[i].party === 'D') {
            num_d++;
        } else if (dataset[i].party === 'R') {
            num_r++;
        } else if (dataset[i].party === 'I') {
            num_i++;
        }


        var member = { 
            name: dataset[i].member,
            party: dataset[i].party === 'R' ? 'Republican': 'Democrat',
            lean: lean, 
            strength: strength,
            source: dataset[i].link
        };

        dust.render('tooltip', member, function(err, out) {
            member.tooltip = out;
        });


        if (lean === 'undecided' || lean === 'unknown') {
            leaning[dataset[i].party][lean].push(member);
        } else {
            leaning[dataset[i].party][lean][strength].push(member);
        }

    }
    return leaning;
};

var count_whip = function(leaning) {
    var seat_count = 0;

    for (var i = 0; i < seat_fillers.length; i++) {
        seat_count = seat_filler[seat_fillers[i]](leaning, seat_count);
    }
    update_count(leaning);

};

var update_count = function(leaning) {
    if (!showing_d_only && !showing_r_only) {
        jQuery('#breakdown_no').text( leaning.D.no.strong.length + leaning.R.no.strong.length);
        jQuery('#breakdown_weak_no').text(leaning.D.no.weak.length + leaning.R.no.weak.length);
        jQuery('#breakdown_yes').text( leaning.D.yes.strong.length + leaning.R.yes.strong.length);
        jQuery('#breakdown_weak_yes').text(leaning.D.yes.weak.length + leaning.R.yes.weak.length);
        jQuery('#breakdown_neither').text(leaning.D.unknown.length + leaning.D.undecided.length + leaning.R.unknown.length + leaning.R.undecided.length );
    } else if ( showing_r_only ) {
        jQuery('#breakdown_no').text( leaning.R.no.strong.length);
        jQuery('#breakdown_weak_no').text( leaning.R.no.weak.length);
        jQuery('#breakdown_yes').text( leaning.R.yes.strong.length);
        jQuery('#breakdown_weak_yes').text( leaning.R.yes.weak.length);
        jQuery('#breakdown_neither').text(leaning.R.unknown.length + leaning.R.undecided.length );
    } else if ( showing_d_only ) {
        jQuery('#breakdown_no').text( leaning.D.no.strong.length);
        jQuery('#breakdown_weak_no').text( leaning.D.no.weak.length);
        jQuery('#breakdown_yes').text( leaning.D.yes.strong.length);
        jQuery('#breakdown_weak_yes').text( leaning.D.yes.weak.length);
        jQuery('#breakdown_neither').text(leaning.D.unknown.length + leaning.R.undecided.length );
    }
};

var seat_filler = {};

seat_filler.add_strong_d_no = function(leaning, seat_count) {
    var strong_d_no = leaning.D.no.strong;
    for (var i = 0; i < strong_d_no.length; i++) {
        var circle = document.getElementById('seat' + seat_count);
        seat_count++;
        circle.setAttribute('class', 'strongDno ' + strong_d_no[i].name.replace(/\s/, '')
                + ' democratic strong no'
                + (showing_r_only ? ' fade' : '')
        );
        circle.setAttribute('data-tooltip', strong_d_no[i].tooltip);
    }
    return seat_count;
};

seat_filler.add_weak_d_no = function(leaning, seat_count) {
    var weak_d_no = leaning.D.no.weak;
    for (var i = 0; i < weak_d_no.length; i++) {
        var circle = document.getElementById('seat' + seat_count);
        seat_count++;
        circle.setAttribute('class', 'weakDno ' + weak_d_no[i].name.replace(/\s/, '')
                + ' democratic weak no'
                + (showing_r_only ? ' fade' : '')
        );
        circle.setAttribute('data-tooltip', weak_d_no[i].tooltip);
    }
    return seat_count;
};

seat_filler.add_d_undecided = function(leaning, seat_count) {
    var d_undecided = leaning.D.undecided;
    for (var i = 0; i < d_undecided.length; i++) {
        var circle = document.getElementById('seat' + seat_count);
        seat_count++;
        circle.setAttribute('class', 'd_undecided ' + d_undecided[i].name.replace(/\s/, '')
                + (showing_r_only ? ' fade' : '')
                + ' democratic undecided');
        circle.setAttribute('data-tooltip', d_undecided[i].tooltip);
    }
    return seat_count;
};

seat_filler.add_d_unknown = function(leaning, seat_count) {
    var d_unknown = leaning.D.unknown;
    for (var i = 0; i < d_unknown.length; i++) {
        var circle = document.getElementById('seat' + seat_count);
        seat_count++;
        circle.setAttribute('class', 'd_unknown ' + d_unknown[i].name.replace(/\s/, '')
                + (showing_r_only ? ' fade' : '')
                + ' democratic unknown');
        circle.setAttribute('data-tooltip', d_unknown[i].tooltip);
    }
    return seat_count;
};

seat_filler.add_weak_d_yes = function(leaning, seat_count) {
    var weak_d_yes = leaning.D.yes.weak;
    for (var i = 0; i < weak_d_yes.length; i++) {
        var circle = document.getElementById('seat' + seat_count);
        seat_count++;
        circle.setAttribute('class', 'weakDyes ' + weak_d_yes[i].name.replace(/\s/, '')
                + (showing_r_only ? ' fade' : '')
                + ' democratic weak yes');
        circle.setAttribute('data-tooltip', weak_d_yes[i].tooltip);
    }
    return seat_count;
};

seat_filler.add_strong_d_yes = function(leaning, seat_count) {
    var strong_d_yes = leaning.D.yes.strong;
    for (var i = 0; i < strong_d_yes.length; i++) {
        var circle = document.getElementById('seat' + seat_count);
        circle.setAttribute('class', 'strongDyes ' + strong_d_yes[i].name.replace(/\s/, '')
                + (showing_r_only ? ' fade' : '')
                + ' democratic strong yes');
        seat_count++;
        circle.setAttribute('data-tooltip', strong_d_yes[i].tooltip);
    }
    return seat_count;
};

seat_filler.add_empty = function(leaning, seat_count) {
    document.getElementById('seat' + seat_count).setAttribute('class', 'empty_seat'
                + (showing_d_only || showing_r_only ? ' fade' : '')
    );
    document.getElementById('seat' + seat_count).setAttribute('data-tooltip', 'Vacant Seat');
    seat_count++;
    document.getElementById('seat' + seat_count).setAttribute('class', 'empty_seat'
                + (showing_d_only || showing_r_only ? ' fade' : '')
    );
    document.getElementById('seat' + seat_count).setAttribute('data-tooltip', 'Vacant Seat');
    seat_count++;
    return seat_count;
};

seat_filler.add_strong_r_yes = function(leaning, seat_count) {
    var strong_r_yes = leaning.R.yes.strong;
    for (var i = 0; i < strong_r_yes.length; i++) {
        var circle = document.getElementById('seat' + seat_count);
        seat_count++;
        circle.setAttribute('class', 'strongRyes ' + strong_r_yes[i].name.replace(/\s/, '')
                + (showing_d_only ? ' fade' : '')
                + ' strong republican yes');
        circle.setAttribute('data-tooltip', strong_r_yes[i].tooltip );
    }
    return seat_count;
};

seat_filler.add_weak_r_yes = function(leaning, seat_count) {
    var weak_r_yes = leaning.R.yes.weak;
    for (var i = 0; i < weak_r_yes.length; i++) {
        var circle = document.getElementById('seat' + seat_count);
        seat_count++;
        circle.setAttribute('class', 'weakRyes ' + weak_r_yes[i].name.replace(/\s/, '')
                + (showing_d_only ? ' fade' : '')
                + ' weak republican yes');
        circle.setAttribute('data-tooltip', weak_r_yes[i].tooltip);
    }
    return seat_count;
};

seat_filler.add_r_unknown = function(leaning, seat_count) {
    var r_unknown = leaning.R.unknown;
    for (var i = 0; i < r_unknown.length; i++) {
        var circle = document.getElementById('seat' + seat_count);
        seat_count++;
        circle.setAttribute('class', 'r_unknown ' + r_unknown[i].name.replace(/\s/, '')
                + (showing_d_only ? ' fade' : '')
                + ' republican unknown');
        circle.setAttribute('data-tooltip', r_unknown[i].tooltip + r_unknown[i].lean);
    }
    return seat_count;
};

seat_filler.add_r_undecided = function(leaning, seat_count) {
    var r_undecided = leaning.R.undecided;
    for (var i = 0; i < r_undecided.length; i++) {
        var circle = document.getElementById('seat' + seat_count);
        seat_count++;
        circle.setAttribute('class', 'r_undecided ' + r_undecided[i].name.replace(/\s/, '')
                + (showing_d_only ? ' fade' : '')
                + ' republican undecided');
        circle.setAttribute('data-tooltip', r_undecided[i].tooltip);
    }
    return seat_count;
};

seat_filler.add_weak_r_no = function(leaning, seat_count) {
    var weak_r_no = leaning.R.no.weak;
    for (var i = 0; i < weak_r_no.length; i++) {
        var circle = document.getElementById('seat' + seat_count);
        seat_count++;
        circle.setAttribute('class', 'weakRno ' + weak_r_no[i].name.replace(/\s/, '')
                + (showing_d_only ? ' fade' : '')
                + ' weak republican no');
        circle.setAttribute('data-tooltip', weak_r_no[i].tooltip);
    }
    return seat_count;
};

seat_filler.add_strong_r_no = function(leaning, seat_count) {
    var strong_r_no = leaning.R.no.strong;
    for (var i = 0; i < strong_r_no.length; i++) {
        var circle = document.getElementById('seat' + seat_count);
        seat_count++;
        circle.setAttribute('class', 'strongRno ' + strong_r_no[i].name.replace(/\s/, '')
                + (showing_d_only ? ' fade' : '')
                + ' strong republican no');
        circle.setAttribute('data-tooltip', strong_r_no[i].tooltip );
    }
    return seat_count;
};

function fixWebkitHeightBug(){

    //broke in ff
var svgW = 1280;
var svgH = 659.89313;
var curSVGW = $('#syria_leaning').width();
if(curSVGW === 100) { return; }
var newSVGH = heightInRatio(svgH,svgW,curSVGW);
$('#syria_leaning').height(newSVGH);

}
function heightInRatio(oH,oW,nW){

return (oH / oW * nW);

}


$(window).resize(function() {
fixWebkitHeightBug();
});
$(document).ready(function() {
fixWebkitHeightBug();
});
