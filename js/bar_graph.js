class BarGraph{
constructor(){
this.activeYear="2016";
this.data=[{"key":"GBR","values":[{"key":"1980","value":47},{"key":"1984","value":71},{"key":"1988","value":54},{"key":"1992","value":50},{"key":"1996","value":26},{"key":"2000","value":54},{"key":"2004","value":57},{"key":"2008","value":81},{"key":"2012","value":126},{"key":"2016","value":145}]},{"key":"RUS","values":[{"key":"1980","value":442},{"key":"1988","value":300},{"key":"1996","value":115},{"key":"2000","value":187},{"key":"2004","value":189},{"key":"2008","value":142},{"key":"2012","value":140},{"key":"2016","value":115}]},{"key":"GER","values":[{"key":"1980","value":264},{"key":"1984","value":158},{"key":"1988","value":296},{"key":"1992","value":198},{"key":"1996","value":124},{"key":"2000","value":118},{"key":"2004","value":149},{"key":"2008","value":96},{"key":"2012","value":94},{"key":"2016","value":159}]},{"key":"HUN","values":[{"key":"1980","value":61},{"key":"1988","value":44},{"key":"1992","value":45},{"key":"1996","value":43},{"key":"2000","value":53},{"key":"2004","value":40},{"key":"2008","value":27},{"key":"2012","value":26},{"key":"2016","value":22}]},{"key":"FRA","values":[{"key":"1980","value":29},{"key":"1984","value":67},{"key":"1988","value":29},{"key":"1992","value":57},{"key":"1996","value":51},{"key":"2000","value":66},{"key":"2004","value":53},{"key":"2008","value":77},{"key":"2012","value":82},{"key":"2016","value":96}]},{"key":"IND","values":[{"key":"1980","value":16},{"key":"1996","value":1},{"key":"2000","value":1},{"key":"2004","value":1},{"key":"2008","value":3},{"key":"2012","value":6},{"key":"2016","value":2}]},{"key":"ITA","values":[{"key":"1980","value":37},{"key":"1984","value":63},{"key":"1988","value":29},{"key":"1992","value":45},{"key":"1996","value":71},{"key":"2000","value":65},{"key":"2004","value":104},{"key":"2008","value":42},{"key":"2012","value":68},{"key":"2016","value":72}]},{"key":"AUS","values":[{"key":"1980","value":13},{"key":"1984","value":52},{"key":"1988","value":35},{"key":"1992","value":57},{"key":"1996","value":132},{"key":"2000","value":183},{"key":"2004","value":157},{"key":"2008","value":149},{"key":"2012","value":114},{"key":"2016","value":82}]},{"key":"PRK","values":[{"key":"1980","value":5},{"key":"1992","value":10},{"key":"1996","value":5},{"key":"2000","value":4},{"key":"2004","value":5},{"key":"2008","value":6},{"key":"2012","value":6},{"key":"2016","value":7}]},{"key":"JAM","values":[{"key":"1980","value":3},{"key":"1984","value":7},{"key":"1988","value":7},{"key":"1992","value":4},{"key":"1996","value":16},{"key":"2000","value":23},{"key":"2004","value":13},{"key":"2008","value":14},{"key":"2012","value":25},{"key":"2016","value":30}]},{"key":"CAN","values":[{"key":"1984","value":87},{"key":"1988","value":23},{"key":"1992","value":44},{"key":"1996","value":50},{"key":"2000","value":31},{"key":"2004","value":17},{"key":"2008","value":35},{"key":"2012","value":55},{"key":"2016","value":69}]},{"key":"PAK","values":[{"key":"1984","value":16},{"key":"1988","value":1},{"key":"1992","value":16}]},{"key":"JPN","values":[{"key":"1984","value":49},{"key":"1988","value":20},{"key":"1992","value":47},{"key":"1996","value":42},{"key":"2000","value":44},{"key":"2004","value":93},{"key":"2008","value":51},{"key":"2012","value":84},{"key":"2016","value":64}]},{"key":"USA","values":[{"key":"1984","value":352},{"key":"1988","value":208},{"key":"1992","value":224},{"key":"1996","value":259},{"key":"2000","value":242},{"key":"2004","value":263},{"key":"2008","value":317},{"key":"2012","value":248},{"key":"2016","value":264}]},{"key":"CHN","values":[{"key":"1984","value":74},{"key":"1988","value":52},{"key":"1992","value":82},{"key":"1996","value":106},{"key":"2000","value":79},{"key":"2004","value":94},{"key":"2008","value":184},{"key":"2012","value":125},{"key":"2016","value":113}]},{"key":"POR","values":[{"key":"1984","value":3},{"key":"1988","value":1},{"key":"1996","value":3},{"key":"2000","value":2},{"key":"2004","value":3},{"key":"2008","value":2},{"key":"2012","value":2},{"key":"2016","value":1}]},{"key":"QAT","values":[{"key":"1992","value":1},{"key":"2000","value":1},{"key":"2012","value":2},{"key":"2016","value":1}]}];
          this.margin = {top: 20, right: 30, bottom: 30, left: 40};
          this.width = 800 - this.margin.left - this.margin.right;
          this.height = 800 - this.margin.top - this.margin.bottom;

          // space for the labels
      this.textWidth = 40;
      this.max =0;
      this.min=9999999;
      for(let i=0;i<this.data.length;i++){
        console.log(this.data[i].values,"-----");
        for(let j=0;j<this.data[i].values.length;j++){
            console.log("lopapa",this.data[i].values[j].value);
            console.log(this.max,"<",this.data[i].values[j].value);
            if(this.max<(this.data[i].values[j].value)){
              console.log(this.data[i].values[j].value);

              this.max=(this.data[i].values[j].value);
            }
            if(this.min>(this.data[i].values[j].value)){
              console.log(this.data[i].values[j].value);

              this.min=(this.data[i].values[j].value);
            }
          //}
        }
      }
      console.log("---",this.max);
      this.xScale = d3.scaleLinear()
              .domain([0, this.max])
              .range([0, this.width -this.textWidth])
              .nice();

      this.x_axis_scale = d3.scaleLinear()
              .domain([0, this.width -this.textWidth])
              .range([0, this.max])
              .nice();
      this.animationDuration = 2000;
      this.xAxis = d3.axisBottom().scale(this.xScale);

      this.new_data = this.data;
      this.new_data = this.new_data.sort(function (a, b) {
      //for(let i=0;i< that.new_data.length;i++){
      let that=this;
          for(let j=0;j<a.values.length;j++){
            for(let k=0;k<b.values.length;k++){

              if(a.values[j].key=="2016" && b.values[k].key=="2016"){
                   if(a.values[j].value < b.values[k].value)
                       return -1;
                  else if  (a.values[j].value > b.values[k].value)
                      return 1;
                  else {
                    return 0;
                  }

              }


            }

          }
          }
      );

      this.color = d3.scaleOrdinal(d3.schemePaired);

}

beforeBar(){
  let that=this;
console.log("BAR");


let svg = d3.select("#chart")
        .attr("width", that.width + that.margin.left + that.margin.right)
        .attr("height", that.height + that.margin.top + that.margin.bottom)
        // here we create a master <g> element and move everything by the margins
        .append("g")
        .attr("class","bars")
        .attr("transform", "translate(" + that.margin.left + "," +that.margin.top + ")");


        svg.append("g")
                   .classed("axis", true);
  d3.select('#yearbar')
      .append('div').attr('id', 'activeYear-bar');

  let yearSlider = d3.select('#activeYear-bar')
      .append('div').classed('slider-wrap', true)
      .append('input').classed('slider', true)
      .attr('type', 'range')
      .attr('min', 1980)
      .attr('max', 2016)
      .attr('step', 4)
      .attr('value', this.activeYear);

  let sliderLabel = d3.select('.slider-wrap')
      .append('div').classed('slider-label', true)
      .append('svg');

  let sliderText = sliderLabel.append('text').text(this.activeYear);
  this.drawYearBar(this.activeYear)

}
drawYearBar() {
    let that = this;

    //Slider to change the activeYear of the data
    let yearScale = d3.scaleLinear().domain([1980, 2016]).range([30, 730]);
    let yearSlider = d3.select('.slider');

    let tag = d3.select('.label')
                .attr("class", "activeYear-background");

    yearSlider.on('input', function() {

    //YOUR CODE HERE
    let year = yearSlider.node().value;

    let tag = d3.select('.activeYear-background');
    tag.text(year);

    let sliderLabel = d3.select('.slider-wrap');
    let sliderText = sliderLabel.select('text').text(year);
    sliderText.attr('x', yearScale(year));
    sliderText.attr('y', 25)
              .attr('font-size', "large")
              .attr('font-weight', 'bold');

    that.activeYear=year;
  let bb=  d3.selectAll(".barGroup");
  bb.remove();
  that.new_data=that.data;
  that.new_data=that.new_data.filter(function (d) {
    for(let j=0;j<d.values.length;j++){
      if(d.values[j].key==that.activeYear){
        return d;

      }
}});



that.new_data = that.new_data.sort(function (a, b) {
//for(let i=0;i< that.new_data.length;i++){
    for(let j=0;j<a.values.length;j++){
      for(let k=0;k<b.values.length;k++){

        if(a.values[j].key==year && b.values[k].key==year){
             if(a.values[j].value < b.values[k].value)
                 return -1;
            else if  (a.values[j].value > b.values[k].value)
                return 1;
            else {
              return 0;
            }

        }


      }

    }
    }
);






    that.createBar();

    });
}
createBar(){
  // Note that execute here is also called as the update function,
  // so everything that can be is already initialized outside of this function

  // here we update the yscale and set the domain to `product`
  // see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
let that=this;
let axis_for=0;

let svg=d3.select("#chart").selectAll(".bars");
  let barGroups = svg.selectAll(".barGroup")
                    .data(that.new_data.filter(function (d) {
                      for(let j=0;j<d.values.length;j++){
                        if(d.values[j].key==that.activeYear){
                          return d.key;

                        }
                  }}));

   let barGroupsEnter = barGroups.enter()
           // we package each data item into a g
               .append("g")
               .classed("barGroup", true)
                .attr("transform", function(d,i){
                  for(let j=0;j<d.values.length;j++){
                    if(d.values[j].key==that.activeYear){
                      axis_for=i*40+50;

                        return `translate(0, ${i*40+50})`;
                    }
                  }

               }
             );

             // entering with transparent text and rects of width 0
             barGroupsEnter.append("text")
                 .attr("opacity", 0);
             barGroupsEnter.append("rect")
                 .attr("width", 0);

                 barGroups.exit().remove();

            barGroups = barGroups.merge(barGroupsEnter);

///////text
barGroups.select("text")
          .text(function(d,i){
            for(let j=0;j<d.values.length;j++){
              if(d.values[j].key==that.activeYear){
                return d.key;
              }
          }} )
          .attr("x", that.textWidth - 10)
          // dy is a shift along the y axis;
          // bandwidth() accesses the automatically computed width of the bar
          .attr("dy", function(d,i){return i*2+3;  })
          // align it to the right
          .attr("text-anchor", "end")
          // center it
          .attr("alignment-baseline", "middle")
          .transition().duration(that.animationDuration)
          .attr("opacity", 1);




barGroups.select("rect")
          .attr("x", 50)
          // bandwidth() accesses the automatically computed width of the bar
          .attr("height", 30)          .style("fill", function(d){
                      for(let j=0;j<d.values.length;j++){
                        return   that.color(d.key);
          }

                    }
                  )
          .transition().duration(that.animationDuration)
          .attr("width", function (d,i) {
              // here we call the scale function.
              for(let i=0;i<d.values.length;i++){
                if(d.values[i].key==that.activeYear){
                    return  that.xScale(d.values[i].value);
                }
              }
              return;
          })
;

//          barGroups.exit().remove();
barGroups.exit().remove();

           d3.select(".axis")
           .attr("transform", `translate(${that.textWidth},${axis_for+60})`)
           .call(that.xAxis);

}


}
