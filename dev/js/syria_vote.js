/*
 * syria_vote
 * https://github.com/motherjones/syria
 *
 * Copyright (c) 2013 Mother Jones Data Desk
 * Licensed under the MIT license.
 */
"use strict";

var current_d = 199;
var current_r = 234;
var current_empty = 2;
var total_seats = 435;


var tooltip_template = ' \
    <h3>{name}</h3> \
    <p>Party Affiliation: {party}</p> \
    <p>{strength} {lean}</p> \
';
var compiled_tooltip = dust.compile(tooltip_template, 'tooltip');
dust.loadSource(compiled_tooltip);

var tooltip_element = jQuery('<div id="tooltip" style="display: none; position: absolute;"><p>text</p></div>');

window.onload = function() {
    jQuery('svg').before(tooltip_element);

    var present_dataset;
        Tabletop.init( { 
            key: public_spreadsheet_url,
            callback: function(dataset) {
                var leaning = present_dataset = cleanup_dataset(dataset)
                count_whip(leaning);
            },
            simpleSheet: true 
        } )

    dataset_times.sort().reverse();

    var time_container = jQuery('#time_picker');
    for (var i = 0; i < dataset_times.length; i++) {
        var time = dataset_times[i];
        var title;
        for(var k in time) title = k;

        var button = jQuery('<button>' + title +'</button>');
        (function(dataset) {
            button.click(function() {
                count_whip(dataset);
            });
        })(cleanup_dataset(time[title]))

        time_container.prepend(button);
    }

    jQuery('#current').click(function() {
        count_whip(present_dataset);
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
            strength: strength
        }

        dust.render('tooltip', member, function(err, out) {
            member.tooltip = out;
        })


        if (lean === 'undecided' || lean === 'unknown') {
            leaning[dataset[i].party][lean].push(member)
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


  jQuery('svg circle').bind('mouseout', function(){
      tooltip_element.css('display', 'none');
  });
  jQuery('svg circle').bind('mousemove', function(e){
      tooltip_element.css('left', e.pageX + 10)
        .css('top', e.pageY + 10)
        .css('display', 'block')
        .html(jQuery(this).attr('data-tooltip'));
  });


};

var seat_filler = {};

seat_filler.add_strong_d_no = function(leaning, seat_count) {
    var strong_d_no = leaning.D.no.strong;
    for (var i = 0; i < strong_d_no.length; i++) {
        var circle = document.getElementById('seat' + seat_count);
        seat_count++;
        circle.setAttribute('class', 'strongDno ' + strong_d_no[i].name.replace(/\s/, ''));
        circle.setAttribute('data-tooltip', strong_d_no[i].tooltip);
    }
    return seat_count;
}

seat_filler.add_weak_d_no = function(leaning, seat_count) {
    var weak_d_no = leaning.D.no.weak;
    for (var i = 0; i < weak_d_no.length; i++) {
        var circle = document.getElementById('seat' + seat_count);
        seat_count++;
        circle.setAttribute('class', 'weakDno ' + weak_d_no[i].name.replace(/\s/, ''));
        circle.setAttribute('data-tooltip', weak_d_no[i].tooltip);
    }
    return seat_count;
}

seat_filler.add_d_undecided = function(leaning, seat_count) {
    var d_undecided = leaning.D.undecided;
    for (var i = 0; i < d_undecided.length; i++) {
        var circle = document.getElementById('seat' + seat_count);
        seat_count++;
        circle.setAttribute('class', 'd_undecided ' + d_undecided[i].name.replace(/\s/, ''));
        circle.setAttribute('data-tooltip', d_undecided[i].tooltip);
    }
    return seat_count;
}

seat_filler.add_d_unknown = function(leaning, seat_count) {
    var d_unknown = leaning.D.unknown;
    for (var i = 0; i < d_unknown.length; i++) {
        var circle = document.getElementById('seat' + seat_count);
        seat_count++;
        circle.setAttribute('class', 'd_unknown ' + d_unknown[i].name.replace(/\s/, ''));
        circle.setAttribute('data-tooltip', d_unknown[i].tooltip);
    }
    return seat_count;
}

seat_filler.add_weak_d_yes = function(leaning, seat_count) {
    var weak_d_yes = leaning.D.yes.weak;
    for (var i = 0; i < weak_d_yes.length; i++) {
        var circle = document.getElementById('seat' + seat_count);
        seat_count++;
        circle.setAttribute('class', 'weakDyes ' + weak_d_yes[i].name.replace(/\s/, ''));
        circle.setAttribute('data-tooltip', weak_d_yes[i].tooltip);
    }
    return seat_count;
}

seat_filler.add_strong_d_yes = function(leaning, seat_count) {
    var strong_d_yes = leaning.D.yes.strong;
    for (var i = 0; i < strong_d_yes.length; i++) {
        var circle = document.getElementById('seat' + seat_count);
        circle.setAttribute('class', 'strongDyes ' + seat_count);
        seat_count++;
        circle.setAttribute('data-tooltip', strong_d_yes[i].tooltip);
    }
    return seat_count;
}

seat_filler.add_empty = function(leaning, seat_count) {
    document.getElementById('seat' + seat_count).setAttribute('class', 'empty_seat');
    document.getElementById('seat' + seat_count).setAttribute('data-tooltip', 'Empty Seat');
    seat_count++;
    document.getElementById('seat' + seat_count).setAttribute('class', 'empty_seat');
    document.getElementById('seat' + seat_count).setAttribute('data-tooltip', 'Empty Seat');
    seat_count++;
    return seat_count;
}

seat_filler.add_strong_r_yes = function(leaning, seat_count) {
    var strong_r_yes = leaning.R.yes.strong;
    for (var i = 0; i < strong_r_yes.length; i++) {
        var circle = document.getElementById('seat' + seat_count);
        seat_count++;
        circle.setAttribute('class', 'strongRyes ' + strong_r_yes[i].name.replace(/\s/, ''));
        circle.setAttribute('data-tooltip', strong_r_yes[i].tooltip );
    }
    return seat_count;
}

seat_filler.add_weak_r_yes = function(leaning, seat_count) {
    var weak_r_yes = leaning.R.yes.weak;
    for (var i = 0; i < weak_r_yes.length; i++) {
        var circle = document.getElementById('seat' + seat_count);
        seat_count++;
        circle.setAttribute('class', 'weakRyes ' + weak_r_yes[i].name.replace(/\s/, ''));
        circle.setAttribute('data-tooltip', weak_r_yes[i].tooltip);
    }
    return seat_count;
}

seat_filler.add_r_unknown = function(leaning, seat_count) {
    var r_unknown = leaning.R.unknown;
    for (var i = 0; i < r_unknown.length; i++) {
        var circle = document.getElementById('seat' + seat_count);
        seat_count++;
        circle.setAttribute('class', 'r_unknown ' + r_unknown[i].name.replace(/\s/, ''));
        circle.setAttribute('data-tooltip', r_unknown[i].tooltip + r_unknown[i].lean);
    }
    return seat_count;
}

seat_filler.add_r_undecided = function(leaning, seat_count) {
    var r_undecided = leaning.R.undecided;
    for (var i = 0; i < r_undecided.length; i++) {
        var circle = document.getElementById('seat' + seat_count);
        seat_count++;
        circle.setAttribute('class', 'r_undecided ' + r_undecided[i].name.replace(/\s/, ''));
        circle.setAttribute('data-tooltip', r_undecided[i].tooltip);
    }
    return seat_count;
}


seat_filler.add_weak_r_no = function(leaning, seat_count) {
    var weak_r_no = leaning.R.no.weak;
    for (var i = 0; i < weak_r_no.length; i++) {
        var circle = document.getElementById('seat' + seat_count);
        seat_count++;
        circle.setAttribute('class', 'weakRno ' + weak_r_no[i].name.replace(/\s/, ''));
        circle.setAttribute('data-tooltip', weak_r_no[i].tooltip);
    }
    return seat_count;
}

seat_filler.add_strong_r_no = function(leaning, seat_count) {
    var strong_r_no = leaning.R.no.strong;
    for (var i = 0; i < strong_r_no.length; i++) {
        var circle = document.getElementById('seat' + seat_count);
        seat_count++;
        circle.setAttribute('class', 'strongRno ' + strong_r_no[i].name.replace(/\s/, ''));
        circle.setAttribute('data-tooltip', strong_r_no[i].tooltip );
    }
    return seat_count;
}


