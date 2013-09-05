/*
 * syria_vote
 * https://github.com/motherjones/syria
 *
 * Copyright (c) 2013 Mother Jones Data Desk
 * Licensed under the MIT license.
 */
"use strict";

window.onload = function() {

        Tabletop.init( { 
            key: public_spreadsheet_url,
            callback: function(dataset) {
                var root = transform_csv_data(dataset);
                count_whip(root);
            },
            simpleSheet: true 
        } )
};


var transform_csv_data = function(dataset) {
    var placement = {
        R : {
            yes:{
                strong: [],
                weak: []
            },
            no:{
                strong: [],
                weak: []
            },
            undecided: [],
            unknown: []
        },
        D : {
            yes:{
                strong: [],
                weak: []
            },
            no:{
                strong: [],
                weak: []
            },
            undecided: [],
            unknown: []
        }
    }
    for (var i = 0; i < dataset.length; i++) {
        var leg = dataset[i];
        var yn = (leg.undecided)
            ? 'undecided'
            : (leg.unknown)
                ? 'unknown'
                : (leg.no || leg.leanno)
                    ? 'no'
                    : 'yes'
        var strength = (leg.no || leg.yes) ? 'strong' : 'weak';
        var leg_obj = {
            "name" : leg.member,
            "size" : 400,
            "party" : leg.party,
            "leaning" : strength + yn
        };
        if (yn === 'undecided' || yn === 'unknown') {
            //placement[leg.party][yn].push(leg_obj)
        } else {
            placement[leg.party][yn][strength].push(leg_obj)
        }

    }
    var root = {
        "name": "legislators",
        "children": [
            {
                "name": "democratic",
                "children": [
                    {
                        "name" : "unknown",
                        "children" : placement.D.unknown
                    },
                    {
                        "name" : "undecided",
                        "children" : placement.D.undecided
                    },
                    {
                        "name": "yes",
                        "children": [
                            {
                                "name": "strong",
                                "children" : placement.D.yes.strong
                            },
                            {
                                "name": "weak",
                                "children" : placement.D.yes.weak
                            }
                        ],
                    },
                    {
                        "name": "no",
                        "children": [
                            {
                                "name": "strong",
                                "children" : placement.D.no.strong
                            },
                            {
                                "name": "weak",
                                "children" : placement.D.no.weak
                            }
                        ],
                    }
                ],
            },
            {
                "name": "republican",
                "children": [
                    {
                        "name" : "unknown",
                        "children" : placement.R.unknown
                    },
                    {
                        "name" : "undecided",
                        "children" : placement.R.undecided
                    },
                    {
                        "name": "yes",
                        "children": [
                            {
                                "name": "strong",
                                "children" : placement.R.yes.strong
                            },
                            {
                                "name": "weak",
                                "children" : placement.R.yes.weak
                            }
                        ],
                    },
                    {
                        "name": "no",
                        "children": [
                            {
                                "name": "strong",
                                "children" : placement.R.no.strong
                            },
                            {
                                "name": "weak",
                                "children" : placement.R.no.weak
                            }
                        ],
                    }
                ],
            },

        ],
    };
    return root;
}

var count_whip = function( root ) {
  var node = svg.datum(root).selectAll(".node")
      .data(pack.nodes)
    .enter().append("g")
      .attr("class", function(d) { console.log(d); return d.children ? d.name : d.leaning + d.party; })
      .attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; });

  node.append("title")
      .text(function(d) { return d.name + (d.children ? "" : ": " + format(d.size)); });

  node.append("circle")
      .attr("r", function(d) { return d.r; });

  node.filter(function(d) { return !d.children; }).append("text")
      .attr("dy", ".3em")
      .style("text-anchor", "middle")
      .text(function(d) { return d.name.substring(0, d.r / 3); });
};
