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
    <h3>{member}</h3> \
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

    var sep_5_6pm_title = [];
    for(var k in sep_5_6pm) sep_5_6pm_title.push(k);
    sep_5_6pm_title = sep_5_6pm_title[0]

    var sep_6_12am_title = [];
    for(var k in sep_6_12am) sep_6_12am_title.push(k);
    sep_6_12am_title = sep_6_12am_title[0]


    var sep_5_6pm_cleaned = cleanup_dataset(sep_5_6pm[sep_5_6pm_title])
    var sep_6_12am_cleaned = cleanup_dataset(sep_6_12am[sep_6_12am_title])

    jQuery('#sep5_6pm').click(function() {
        count_whip(sep_5_6pm_cleaned);
    });
    jQuery('#sep6_12am').click(function() {
        count_whip(sep_6_12am_cleaned);
    });
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

        dust.render('tooltip', dataset[i], function(err, out) {
            dataset[i].tooltip = out;
        })

        var member = { 
            name: dataset[i].member,
            party: dataset[i].party,
            lean: lean + strength, 
            tooltip: dataset[i].tooltip
        }
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

    var strong_d_no = leaning.D.no.strong;
    for (var i = 0; i < strong_d_no.length; i++) {
        var circle = document.getElementById('seat' + seat_count);
        seat_count++;
        circle.setAttribute('class', 'strongDno ' + strong_d_no[i].name.replace(/\s/, ''));
        circle.setAttribute('data-tooltip', strong_d_no[i].tooltip);
    }

    var weak_d_no = leaning.D.no.weak;
    for (var i = 0; i < weak_d_no.length; i++) {
        var circle = document.getElementById('seat' + seat_count);
        seat_count++;
        circle.setAttribute('class', 'weakDno ' + weak_d_no[i].name.replace(/\s/, ''));
        circle.setAttribute('data-tooltip', weak_d_no[i].tooltip);
    }

    var d_undecided = leaning.D.undecided;
    for (var i = 0; i < d_undecided.length; i++) {
        var circle = document.getElementById('seat' + seat_count);
        seat_count++;
        circle.setAttribute('class', 'd_undecided ' + d_undecided[i].name.replace(/\s/, ''));
        circle.setAttribute('data-tooltip', d_undecided[i].tooltip);
    }
    var d_unknown = leaning.D.unknown;
    for (var i = 0; i < d_unknown.length; i++) {
        var circle = document.getElementById('seat' + seat_count);
        seat_count++;
        circle.setAttribute('class', 'd_unknown ' + d_unknown[i].name.replace(/\s/, ''));
        circle.setAttribute('data-tooltip', d_unknown[i].tooltip);
    }

    var weak_d_yes = leaning.D.yes.weak;
    for (var i = 0; i < weak_d_yes.length; i++) {
        var circle = document.getElementById('seat' + seat_count);
        seat_count++;
        circle.setAttribute('class', 'weakDyes ' + weak_d_yes[i].name.replace(/\s/, ''));
        circle.setAttribute('data-tooltip', weak_d_yes[i].tooltip);
    }

    var strong_d_yes = leaning.D.yes.strong;
    for (var i = 0; i < strong_d_yes.length; i++) {
        var circle = document.getElementById('seat' + seat_count);
        circle.setAttribute('class', 'strongDyes ' + seat_count);
        seat_count++;
        circle.setAttribute('data-tooltip', strong_d_yes[i].tooltip);
    }

    document.getElementById('seat' + seat_count).setAttribute('class', 'empty_seat');
    document.getElementById('seat' + seat_count).setAttribute('data-tooltip', 'Empty Seat');
    seat_count++;
    document.getElementById('seat' + seat_count).setAttribute('class', 'empty_seat');
    document.getElementById('seat' + seat_count).setAttribute('data-tooltip', 'Empty Seat');
    seat_count++;

    var strong_r_yes = leaning.R.yes.strong;
    for (var i = 0; i < strong_r_yes.length; i++) {
        var circle = document.getElementById('seat' + seat_count);
        seat_count++;
        circle.setAttribute('class', 'strongRyes ' + strong_r_yes[i].name.replace(/\s/, ''));
        circle.setAttribute('data-tooltip', strong_r_yes[i].tooltip );
    }

    var weak_r_yes = leaning.R.yes.weak;
    for (var i = 0; i < weak_r_yes.length; i++) {
        var circle = document.getElementById('seat' + seat_count);
        seat_count++;
        circle.setAttribute('class', 'weakRyes ' + weak_r_yes[i].name.replace(/\s/, ''));
        circle.setAttribute('data-tooltip', weak_r_yes[i].tooltip);
    }

    var r_un_start_point = r_yes_start_point + strong_r_yes.length + weak_r_yes.length;
    var r_unknown = leaning.R.unknown;
    for (var i = 0; i < r_unknown.length; i++) {
        var circle = document.getElementById('seat' + seat_count);
        seat_count++;
        circle.setAttribute('class', 'r_unknown ' + r_unknown[i].name.replace(/\s/, ''));
        circle.setAttribute('data-tooltip', r_unknown[i].tooltip + r_unknown[i].lean);
    }

    //var r_un_start_point = total_seats - 1 - (weak_r_no.length + strong_r_no.length);
    var r_undecided = leaning.R.undecided;
    for (var i = 0; i < r_undecided.length; i++) {
        var circle = document.getElementById('seat' + seat_count);
        seat_count++;
        circle.setAttribute('class', 'r_undecided ' + r_undecided[i].name.replace(/\s/, ''));
        circle.setAttribute('data-tooltip', r_undecided[i].tooltip);
    }
    

    var r_yes_start_point = r_un_start_point + r_unknown.length + r_undecided.length;
    var weak_r_no = leaning.R.no.weak;
    for (var i = 0; i < weak_r_no.length; i++) {
        var circle = document.getElementById('seat' + seat_count);
        seat_count++;
        circle.setAttribute('class', 'weakRno ' + weak_r_no[i].name.replace(/\s/, ''));
        circle.setAttribute('data-tooltip', weak_r_no[i].tooltip);
    }

    var strong_r_no = leaning.R.no.strong;
    for (var i = 0; i < strong_r_no.length; i++) {
        var circle = document.getElementById('seat' + seat_count);
        seat_count++;
        circle.setAttribute('class', 'strongRno ' + strong_r_no[i].name.replace(/\s/, ''));
        circle.setAttribute('data-tooltip', strong_r_no[i].tooltip );
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
