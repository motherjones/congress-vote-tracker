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



window.onload = function() {

        Tabletop.init( { 
            key: public_spreadsheet_url,
            callback: function(dataset) {
                var leaning = cleanup_dataset(dataset)
                count_whip(leaning);
            },
            simpleSheet: true 
        } )
};



var cleanup_dataset = function( dataset ) {
    console.log('dataset is this long: ' + dataset.length)
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
            console.log('no party');
            console.log(dataset[i]);
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
    console.log(num_d);
    console.log(num_r);
    return leaning;
};

var count_whip = function(leaning) {
    var strong_d_no = leaning.D.no.strong;
    for (var i = 0; i < strong_d_no.length; i++) {
        var circle = document.getElementById('seat' + i);
        circle.className.baseVal = 'strongDno';
        circle.setAttribute('data-tooltip', strong_d_no[i].tooltip);
    }
    console.log('stops at ' + i)

    var weak_d_no = leaning.D.no.weak;
    for (var i = 0; i < weak_d_no.length; i++) {
        var circle = document.getElementById('seat' + ((i + 0) + strong_d_no.length));
        circle.className.baseVal = 'weakDno';
        circle.setAttribute('data-tooltip', weak_d_no[i].tooltip);
    }

    var strong_r_no = leaning.R.no.strong;
    for (var i = 0; i < strong_r_no.length; i++) {
        var circle = document.getElementById('seat' + (total_seats - i - 1));
        circle.className.baseVal = 'strongRno';
        circle.setAttribute('data-tooltip', strong_r_no[i].tooltip );
    }
    var weak_r_no = leaning.R.no.weak;
    for (var i = 0; i < weak_r_no.length; i++) {
        var circle = document.getElementById('seat' + (total_seats - i - strong_r_no.length - 1));
        console.log(total_seats - i - strong_r_no.length - 1);
        circle.className.baseVal = 'weakRno';
        circle.setAttribute('data-tooltip', weak_r_no[i].tooltip);
    }

    var d_yes_start_point = current_d - 1;
    var strong_d_yes = leaning.D.yes.strong;
    for (var i = 0; i < strong_d_yes.length; i++) {
        var circle = document.getElementById('seat' + (d_yes_start_point - i));
        circle.className.baseVal = 'strongDyes';
        circle.setAttribute('data-tooltip', strong_d_yes[i].tooltip);
    }

    var weak_d_yes = leaning.D.yes.weak;
    for (var i = 0; i < weak_d_yes.length; i++) {
        var circle = document.getElementById('seat' + (d_yes_start_point - i - strong_d_yes.length));
        circle.className.baseVal = 'weakDyes';
        circle.setAttribute('data-tooltip', weak_d_yes[i].tooltip);
    }

    var r_yes_start_point = total_seats - current_r;
    var strong_r_yes = leaning.R.yes.strong;
    for (var i = 0; i < strong_r_yes.length; i++) {
        var circle = document.getElementById('seat' + (r_yes_start_point + i));
        circle.className.baseVal = 'strongRyes';
        circle.setAttribute('data-tooltip', strong_r_yes[i].tooltip );
    }

    var weak_r_yes = leaning.R.yes.weak;
    for (var i = 0; i < weak_r_yes.length; i++) {
        var circle = document.getElementById('seat' + (r_yes_start_point + i + strong_r_yes.length));
        circle.className.baseVal = 'weakRyes';
        circle.setAttribute('data-tooltip', weak_r_yes[i].tooltip);
    }

    var d_un_start_point = weak_d_no.length + weak_d_yes.length + 2;
    console.log('starts at ' + d_un_start_point + 2)
    var d_undecided = leaning.D.undecided;
    for (var i = 0; i < d_undecided.length; i++) {
        var circle = document.getElementById('seat' + (d_un_start_point + i + 1));
        circle.className.baseVal = 'd_undecided';
        circle.setAttribute('data-tooltip', d_undecided[i].tooltip);
    }
    var d_unknown = leaning.D.unknown;
    for (var i = 0; i < d_unknown.length; i++) {
        var circle = document.getElementById('seat' + (d_un_start_point + i + d_undecided.length + 1));
        circle.className.baseVal = 'd_unknown';
        circle.setAttribute('data-tooltip', d_unknown[i].tooltip);
    }

    var r_un_start_point = total_seats - 1 - (weak_r_no.length + strong_r_no.length);
    var r_undecided = leaning.R.undecided;
    for (var i = 0; i < r_undecided.length; i++) {
        var circle = document.getElementById('seat' + (r_un_start_point - i));
        circle.className.baseVal = 'r_undecided';
        circle.setAttribute('data-tooltip', r_undecided[i].tooltip);
    }
    var r_unknown = leaning.R.unknown;
    for (var i = 0; i < r_unknown.length; i++) {
        var circle = document.getElementById('seat' + (r_un_start_point - i - r_undecided.length));
        circle.className.baseVal = 'r_unknown';
        circle.setAttribute('data-tooltip', r_unknown[i].tooltip + r_unknown[i].lean);
    }

    document.getElementById('seat199').className.baseVal = 'empty_seat';
    document.getElementById('seat200').className.baseVal = 'empty_seat';
    document.getElementById('seat199').setAttribute('data-tooltip', 'Empty Seat');
    document.getElementById('seat200').setAttribute('data-tooltip', 'Empty Seat');

      var tooltip = jQuery('<div id="tooltip" style="display: none; position: absolute;"><p>text</p></div>');
      jQuery('svg').before(tooltip);

      jQuery('svg circle').bind('mouseout', function(){
          tooltip.css('display', 'none');
      });
      jQuery('svg circle').bind('mousemove', function(e){
          tooltip.css('left', e.pageX + 10)
            .css('top', e.pageY + 10)
            .css('display', 'block')
            .html(jQuery(this).attr('data-tooltip'));
      });


};
