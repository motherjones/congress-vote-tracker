<!DOCTYPE html>
<meta charset="utf-8">
<script src="js/libs/jquery-loader.js" type="text/javascript"></script>
<script src="js/libs/tabletop.js" type="text/javascript"></script>
<script src="http://d3js.org/d3.v3.min.js"></script>
<link rel="stylesheet" href="{{css}}" type="text/css"></style>
<script src="{{js}}" type="text/javascript"></script>
<style>

circle {
  fill: rgb(255, 255, 255);
  stroke: rgb(31, 119, 180);
  stroke-width: 0px;
}

.leaf circle {
  fill: #ff7f0e;
  fill-opacity: 1;
}

/*
.democratic circle {
  fill: blue;
}
.republican circle {
  fill: red;
}
*/

.no circle {
  fill: white;
}

.yes circle {
  fill: white;
}
.strongyesD circle {
    fill: blue;
}

.strongyesR circle {
    fill: red;
}
.strongnoD circle {
    fill: blue;
}

.strongnoR circle {
    fill: red;
}
.weakyesD circle {
    fill-opacity: .5;
    fill: blue;
}

.weakyesR circle {
    fill-opacity: .5;
    fill: red;
}
.weaknoD circle {
    fill-opacity: .5;
    fill: blue;
}

.weaknoR circle {
    fill-opacity: .5;
    fill: red;
}
text {
  font: 10px sans-serif;
}

</style>
<body>
<script>
var public_spreadsheet_url = 'https://docs.google.com/spreadsheet/pub?key=0AmXJhRgn8UhudFlwcFdEVWt5TXdCRGFPWW5Pd21Sd3c&output=html';

var diameter = 630,
    format = d3.format(",d");

var pack = d3.layout.pack()
    .size([diameter - 4, diameter - 4])
    .value(function(d) { return d.size; });

var svg = d3.select("body").append("svg")
    .attr("width", diameter)
    .attr("height", diameter)
  .append("g")
    .attr("transform", "translate(2,2)");

d3.select(self.frameElement).style("height", diameter + "px");

</script>

