var m = [80, 80, 80, 80]; //margins
var w = 1000 -m[1] - m[3]; //width
var h = 600 - m[0] - m[2]; //height

var data = [[1,0]];
      
var x = d3.scale.linear().domain([0,6]).range([0,w]);
var y = d3.scale.log().domain([1e-15,1e2]).range([h,0]);

var line = d3.svg.line()
    .x(function(d,i) {
        return x(d[0]);
    })
    .y(function(d) {
        return y(d[1]);
    })

var graph = d3.select("#graph").append("svg:svg")
    .attr("width",w+m[1]+m[3])
    .attr("height",h+m[0]+m[2])
    .append("svg:g")
    .attr("transform", "translate(" + m[3] + "," + m[0] + ")");

var xAxis = d3.svg.axis().scale(x).tickSize(-h).tickSubdivide(true);

graph.append("svg:g")
    .attr("class","x axis")
    .attr("transform","translate(0," + h + ")")
    .call(xAxis);

var yAxisLeft = d3.svg.axis().scale(y).ticks(4).orient("left");

graph.append("svg:g")
    .attr("class","y axis")
    .call(yAxisLeft);

var trendline = graph.append("svg:path").attr("d",line(data))

d3.select("#radius").on("change",calculate)
d3.select("#contrast").on("change",calculate)
d3.select("#scale").on("change",calculate)
d3.select("#noise").on("change",calculate)
