class MultiLine{
constructor(){

}
line_graph(){
  let flag;
  let category;
/*
  function myFunction() {
    console.log("pressed");
  category='JPN';
  flag=1;
  }
  */
  function myFunction(){
   console.log("pressed");
   category='JPN';
   flag=1;
   line_graph();
   }
  console.log("cat",category);
var data=[{name:"URS",values:
          [{date:"1980",medals:"660"},{date:"1988",medals:"647"},{date:"1984",medals:"-1"},{date:"1992",medals:"-1"},{date:"1996",medals:"-1"},{date:"2000",medals:"-1"},{date:"2004",medals:"-1"},{date:"2008",medals:"-1"},{date:"2012",medals:"-1"},{date:"2016",medals:"-1"}]},

           {name:"ITA",values:
           [{date:"1980",medals:"203"},{date:"1984",medals:"368"},{date:"1988",medals:"374"},{date:"1992",medals:"431"},{date:"1996",medals:"460"},{date:"2000",medals:"457"},{date:"2004",medals:"474"},{date:"2008",medals:"459"},{date:"2012",medals:"382"},{date:"2016",medals:"399"}]},
           {name:"GBR",values:[{date:"1980",medals:"328"},{date:"1984",medals:"509"},{date:"1988",medals:"472"},{date:"1992",medals:"512"},{date:"1996",medals:"391"},{date:"2000",medals:"415"},{date:"2004",medals:"360"},{date:"2008",medals:"417"},{date:"2012",medals:"684"},{date:"2016",medals:"478"}]},
          {name:"POR",values:[{date:"1980",medals:"18"},{date:"1984",medals:"48"},{date:"1988",medals:"91"},{date:"1992",medals:"115"},{date:"1996",medals:"131"},{date:"2000",medals:"64"},{date:"2004",medals:"93"},{date:"2008",medals:"84"},{date:"2012",medals:"98"},{date:"2016",medals:"106"}]},
          {name:"FRA",values:[{date:"1980",medals:"200"},{date:"1984",medals:"354"},{date:"1988",medals:"413"},{date:"1992",medals:"486"},{date:"1996",medals:"453"},{date:"2000",medals:"470"},{date:"2004",medals:"461"},{date:"2008",medals:"445"},{date:"2012",medals:"426"},{date:"2016",medals:"512"}]},
          {name:"IND",values:[{date:"1980",medals:"78"},{date:"1984",medals:"53"},{date:"1988",medals:"55"},{date:"1992",medals:"61"},{date:"1996",medals:"54"},{date:"2000",medals:"70"},{date:"2004",medals:"81"},{date:"2008",medals:"67"},{date:"2012",medals:"95"},{date:"2016",medals:"130"}]},
          {name:"JAM",values:[{date:"1980",medals:"32"},{date:"1984",medals:"75"},{date:"1988",medals:"49"},{date:"1992",medals:"51"},{date:"1996",medals:"69"},{date:"2000",medals:"65"},{date:"2004",medals:"62"},{date:"2008",medals:"66"},{date:"2012",medals:"62"},{date:"2016",medals:"77"}]},
          {name:"AUS",values:[{date:"1980",medals:"190"},{date:"1984",medals:"337"},{date:"1988",medals:"339"},{date:"1992",medals:"390"},{date:"1996",medals:"550"},{date:"2000",medals:"788"},{date:"2004",medals:"601"},{date:"2008",medals:"567"},{date:"2012",medals:"514"},{date:"2016",medals:"518"}]},
          {name:"HUN",values:[{date:"1980",medals:"392"},{date:"1984",medals:"-1"},{date:"1988",medals:"315"},{date:"1992",medals:"351"},{date:"1996",medals:"315"},{date:"2000",medals:"238"},{date:"2004",medals:"258"},{date:"2008",medals:"216"},{date:"2012",medals:"201"},{date:"2016",medals:"204"}]},
          {name:"GDR",values:[{date:"1980",medals:"495"},{date:"1984",medals:"-1"},{date:"1988",medals:"402"},{date:"1992",medals:"-1"},{date:"1996",medals:"-1"},{date:"2000",medals:"-1"},{date:"2004",medals:"-1"},{date:"2008",medals:"-1"},{date:"2012",medals:"-1"},{date:"2016",medals:"-1"}]},
          {name:"PRK",values:[{date:"1980",medals:"121"},{date:"1992",medals:"123"},{date:"1996",medals:"36"},{date:"2000",medals:"47"},{date:"2004",medals:"71"},{date:"2008",medals:"66"},{date:"2012",medals:"57"},{date:"2016",medals:"38"},{date:"1984",medals:"-1"},{date:"1988",medals:"-1"}]},
          {name:"CAN",values:[{date:"1980",medals:"-1"},{date:"1984",medals:"572"},{date:"1988",medals:"503"},{date:"1992",medals:"445"},{date:"1996",medals:"408"},{date:"2000",medals:"422"},{date:"2004",medals:"391"},{date:"2008",medals:"446"},{date:"2012",medals:"354"},{date:"2016",medals:"405"}]},

          {name:"JPN",values:[{date:"1980",medals:"-1"},{date:"1984",medals:"365"},{date:"1988",medals:"412"},{date:"1992",medals:"392"},{date:"1996",medals:"448"},{date:"2000",medals:"363"},{date:"2004",medals:"414"},{date:"2008",medals:"454"},{date:"2012",medals:"399"},{date:"2016",medals:"436"}]},
          {name:"USA",values:[{date:"1980",medals:"-1"},{date:"1984",medals:"693"},{date:"1988",medals:"715"},{date:"1992",medals:"734"},{date:"1996",medals:"839"},{date:"2000",medals:"764"},{date:"2004",medals:"726"},{date:"2008",medals:"760"},{date:"2012",medals:"689"},{date:"2016",medals:"719"}]},
          {name:"FRG",values:[{date:"1980",medals:"-1"},{date:"1984",medals:"571"},{date:"1988",medals:"516"},{date:"1992",medals:"-1"},{date:"1996",medals:"-1"},{date:"2000",medals:"-1"},{date:"2004",medals:"-1"},{date:"2008",medals:"-1"},{date:"2012",medals:"-1"},{date:"2016",medals:"-1"}]},
          {name:"QAT",values:[{date:"1980",medals:"-1"},{date:"1984",medals:"26"},{date:"1988",medals:"13"},{date:"1992",medals:"30"},{date:"1996",medals:"13"},{date:"2000",medals:"19"},{date:"2004",medals:"15"},{date:"2008",medals:"20"},{date:"2012",medals:"14"},{date:"2016",medals:"42"}]},
          {name:"PAK",values:[{date:"1980",medals:"-1"},{date:"1984",medals:"33"},{date:"1988",medals:"33"},{date:"1992",medals:"28"},{date:"1996",medals:"24"},{date:"2000",medals:"27"},{date:"2004",medals:"26"},{date:"2008",medals:"22"},{date:"2012",medals:"21"},{date:"2016",medals:"7"}]},


          {name:"CHN",values:[{date:"1980",medals:"-1"},{date:"1984",medals:"323"},{date:"1988",medals:"427"},{date:"1992",medals:"394"},{date:"1996",medals:"438"},{date:"2000",medals:"414"},{date:"2004",medals:"518"},{date:"2008",medals:"730"},{date:"2012",medals:"479"},{date:"2016",medals:"499"}]},
          {name:"ISV",values:[{date:"1980",medals:"-1"},{date:"1984",medals:"52"},{date:"1988",medals:"46"},{date:"1992",medals:"34"},{date:"1996",medals:"14"},{date:"2000",medals:"12"},{date:"2004",medals:"9"},{date:"2008",medals:"8"},{date:"2012",medals:"9"},{date:"2016",medals:"7"}]},
          {name:"BAN",values:[{date:"1980",medals:"-1"},{date:"1984",medals:"2"},{date:"1988",medals:"11"},{date:"1992",medals:"9"},{date:"1996",medals:"4"},{date:"2000",medals:"6"},{date:"2004",medals:"4"},{date:"2008",medals:"5"},{date:"2012",medals:"7"},{date:"2016",medals:"7"}]},
          {name:"GER",values:[{date:"1980",medals:"-1"},{date:"1984",medals:"-1"},{date:"1988",medals:"-1"},{date:"1992",medals:"653"},{date:"1996",medals:"626"},{date:"2000",medals:"567"},{date:"2004",medals:"592"},{date:"2008",medals:"555"},{date:"2012",medals:"510"},{date:"2016",medals:"536"}]},
          {name:"RUS",values:[{date:"1980",medals:"-1"},{date:"1984",medals:"-1"},{date:"1988",medals:"-1"},{date:"1992",medals:"-1"},{date:"1996",medals:"552"},{date:"2000",medals:"602"},{date:"2004",medals:"593"},{date:"2008",medals:"600"},{date:"2012",medals:"549"},{date:"2016",medals:"406"}]}

];

var width = 500;
var height = 300;
var margin = 50;
var duration = 250;

var lineOpacity = "0.25";
var lineOpacityHover = "0.85";
var otherLinesOpacityHover = "0.1";
var lineStroke = "1.5px";
var lineStrokeHover = "2.5px";

var circleOpacity = '0.85';
var circleOpacityOnLineHover = "0.25"
var circleRadius = 3;
var circleRadiusHover = 6;


/* Format Data */
var parseDate = d3.timeParse("%Y");
data.forEach(function(d) {
  d.values.forEach(function(d) {
    d.date = parseDate(d.date);
    d.medals = +d.medals;
  });
});
let max=0,l;
for(let i=0;i<22;i++){
  l = d3.max(data[i].values, d => d.medals);
  if(l>max){
    max=l;
  }
}

/* Scale */
var xScale = d3.scaleTime()
  .domain(d3.extent(data[0].values, d => d.date))
  .range([0, width-margin+100]);

var yScale = d3.scaleLinear()
  .domain([0, max+11])
  .range([height-margin+100, 0]);

var color = d3.scaleOrdinal(d3.schemeCategory10);

/* Add SVG */
var svg = d3.select("#chart").append("svg")
  .attr("width", (width+margin+500)+"px")
  .attr("height", (height+margin+300)+"px")
  .append('g')
  .attr("transform", `translate(${margin+250}, ${margin+150})`);


/* Add line into SVG */
var line = d3.line()
.defined(function(d) {return d.medals > 0})
  .x(d => xScale(d.date))
  .y(d => yScale(d.medals));

let lines = svg.append('g')
  .attr('class', 'lines');

lines.selectAll('.line-group')
.data(
  function d(){
    if(flag==1){data.filter(function(d){return d.name == category;})}
    else{
       return data
    }
  }

)
.enter()
  .append('g')
  .attr('class', 'line-group')
  .on("mouseover", function(d, i) {
      svg.append("text")
        .attr("class", "title-text")
        .style("fill", color(i))
        .text(d.name)
        .attr("text-anchor", "middle")
        .attr("x", (width-margin)/2)
        .attr("y", 5);
    })
  .on("mouseout", function(d) {
      svg.select(".title-text").remove();
    })
  .append('path')
  .attr('class', 'line')
  .attr('d', d => line(d.values))
  .style('stroke', (d, i) => color(i))
  .style('opacity', lineOpacity)
  .on("mouseover", function(d) {
      d3.selectAll('.line')
					.style('opacity', otherLinesOpacityHover);
      d3.selectAll('.circle')
					.style('opacity', circleOpacityOnLineHover);
      d3.select(this)
        .style('opacity', lineOpacityHover)
        .style("stroke-width", lineStrokeHover)
        .style("cursor", "pointer");
    })
  .on("mouseout", function(d) {
      d3.selectAll(".line")
					.style('opacity', lineOpacity);
      d3.selectAll('.circle')
					.style('opacity', circleOpacity);
      d3.select(this)
        .style("stroke-width", lineStroke)
        .style("cursor", "none");
    });


/* Add circles in the line */
lines.selectAll("circle-group")
  .data(data).enter()
  .append("g")
  .style("fill", (d, i) => color(i))
  .selectAll("circle")
  .data(d => d.values).enter()
  .append("g")
  .attr("class", "circle")
  .on("mouseover", function(d) {
      d3.select(this)
        .style("cursor", "pointer")
        .append("text")
        .attr("class", "text")
        .text(`${d.medals}`)
        .attr("x", d => xScale(d.date) + 5)
        .attr("y", d => yScale(d.medals) - 10);
    })
  .on("mouseout", function(d) {
      d3.select(this)
        .style("cursor", "none")
        .transition()
        .duration(duration)
        .selectAll(".text").remove();
    })
  .append("circle")
  .attr("cx", d => xScale(d.date))
  .attr("cy", d => yScale(d.medals))
  .attr("r", circleRadius)
  .style('opacity', circleOpacity)
  .on("mouseover", function(d) {
        d3.select(this)
          .transition()
          .duration(duration)
          .attr("r", circleRadiusHover);
      })
    .on("mouseout", function(d) {
        d3.select(this)
          .transition()
          .duration(duration)
          .attr("r", circleRadius);
      });


/* Add Axis into SVG */
var xAxis = d3.axisBottom(xScale).ticks(12);
var yAxis = d3.axisLeft(yScale).ticks(20);

svg.append("g")
  .attr("class", "x axis")
  .attr("transform", `translate(0, ${height-margin+100})`)
  .call(xAxis);

svg.append("g")
  .attr("class", "y axis")
  .call(yAxis)
  .append('text')
  .attr("y", 15)
  .attr("transform", "rotate(-90)")
  .attr("fill", "#000")
  .text("Total Medals");
}


}
