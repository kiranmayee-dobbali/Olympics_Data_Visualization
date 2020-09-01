class Gender {
	constructor(genderData ,genderData_complete, func) {
		this.genderData = genderData;
		this.genderData_complete = genderData_complete;
		this.func = func;
	}

selectedCountry() {
	    let e = document.getElementById("dropdown");
        let country = e.options[e.selectedIndex].value;

        if (country == "WRD")
        {
        	this.createAreaChart(this.genderData);
        	return;
        }


        let dummy = this.genderData_complete;

        let dict = [{'key':1980, 'value': null},{'key':1984 ,'value': null}, {'key':1988,'value': null},
        {'key':1992,'value': null},{'key':1996,'value': null},{'key':2000,'value': null},{'key':2004,'value': null},
        {'key':2008,'value': null},{'key':2012,'value': null},{'key':2016,'value': null}]

        //console.log(this.func());

        for(let i =0; i< dict.length; i++) {

        	for (let j =0; j < this.genderData_complete[i]['values'].length; j++) {
        		if (this.genderData_complete[i]['values'][j].key == country) {
            					dict[i]['value'] = this.genderData_complete[i]['values'][j]['value']
            					break;	
            	}
            } 	
        }


        
        console.log(dict)


       // for (let i = 0; i< dict.length; i++) {
       // 	if (dict[i]['value'] == null)
       // 		delete dict[i];
       // }

        this.createAreaChart(dict);

        //let x =  


        //delete dummy[0]['values']

        //console.log(dummy[0])
}



createAreaChart(data) {

	if (data == null) 
		data = this.genderData;

   


/*
  let bScale = d3
    .scaleLinear()
    .domain([0, d3.max(data, d => d.b)])
    .range([0, 10]);


  let iScale = d3
    .scaleLinear()
    .domain([0, data.length])
    .range([0, 10]);


  let aAreaGenerator = d3
    .area()
    .x(function(d, i) {  console.log(parseInt(d.key))
    	                 return parseInt(d.key)-1900})
    .y0(0)
    .y1(function(d) { console.log(d.value.values["M"])
    	              return d.value.values["M"] });

   console.log("hello");

  let area_male = d3.select("#aAreaChart").data(this.genderData)
  area_male.attr("d", aAreaGenerator(this.genderData));

  area_male.style("opacity", 0)
        .transition()
        .duration(3000)
        .style("opacity", 1)  

  // TODO: Select and update the 'b' area chart path (create your own generator)
  let area_y = d3.select("#bAreaChart").data(data)
  area_y.attr("d", bAreaGenerator(data));

  area_y.style("opacity", 0)
        .transition()
        .duration(3000)
        .style("opacity", 1)

*/
/* Add line into SVG */




        let svgGroup = d3.select('.line-chart-x').append('g')
        let tag = svgGroup.append('text')
                          .attr("class", "label");

        tag.text(d=> this.activeYear)
           .attr("x", 300)
           .attr("y", 100);

        let svgXAxis = svgGroup.append('g')
                               .attr("id", "xaxis");
        let svgYAxis = svgGroup.append('g')
                               .attr("id", "yaxis");

        let x_axis_scale = d3.scaleLinear()
                             .domain([1980, 2016])
                             .range([0, 700]);

        let y_axis_scale = d3.scaleLinear()
                             .domain([0, 800])
                             .range([420,0]);

        let x_axis = d3.axisBottom(x_axis_scale);
                      // .scale(x_axis_scale);

        let y_axis = d3.axisLeft(y_axis_scale);
                      // .scale(y_axis_scale);

        svgYAxis.attr("transform", "translate(50, 10)")
                .call(y_axis)
                .append('text');

        svgXAxis.attr("transform", "translate(50, 430)")
                .call(x_axis)
                .append('text');


  let aLineGenerator = d3
    .line()
    .x((d, i) => 50+x_axis_scale(parseInt(d.key)))
    .y(d => y_axis_scale(d.value.values["M"]));

  
  let bLineGenerator = d3
    .line()
    .x((d, i) => 50+x_axis_scale(parseInt(d.key)))
    .y(d => y_axis_scale(d.value.values["F"]));


  let svg = d3.select(".line-chart");
  
  let circles = svg.selectAll('circle').remove();

  circles = svg.append('g').selectAll('circle').data(
                                data.filter(function(d) {
                                	if(d.value != null)
                                		return d;
                                }))
  	                           .join('circle');

  circles.attr('cx', function(d){ 
                                  return 50+x_axis_scale(parseInt(d.key))})
               .attr('cy', d => y_axis_scale(d.value.values["M"]))
               .attr('r', d=> 5)
               .on('mouseover', function(d){
                    circles.html("<title>" + d.value.values["M"] + "</title>")
                    circles.style('opacity', '0.5')
                    d3.select(this).style('opacity', '1' );
               })
               .on('mouseout', function(d) {
                    circles.style('opacity', '1');
               })

  let circles_f = svg.append('g').selectAll('circle').data(                               
                data.filter(function(d) {
                                	if(d.value != null)
                                		return d;
                                })).join('circle');


  circles_f.attr('cx', d => 50+x_axis_scale(parseInt(d.key)))
               .attr('cy', d => y_axis_scale(d.value.values["F"]))
               .attr('r', d=> 5)
               .on('mouseover', function(d){
                    circles_f.html("<title>" + d.value.values["F"] + "</title>")
                    circles_f.style('opacity', '0.5')
                    d3.select(this).style('opacity', '1' );
               })
               .on('mouseout', function(d) {
                    circles_f.style('opacity', '1');
               })



  let line_x = d3.select("#aLineChart").data(                                
  	                         data.filter(function(d) {
                                	if(d.value != null)
                                		return d;
                                }))

  line_x.attr("d", aLineGenerator(  	                         
  	                              data.filter(function(d) {
                                	if(d.value != null)
                                		return d;
                                })))

  line_x.style("opacity", 0)
        .transition()
        .duration(3000)
        .style("opacity", 1)

  let line_y = d3.select("#bLineChart").data(                               
                        data.filter(function(d) {
                                	if(d.value != null)
                                		return d;
                                }))

  line_y.attr("d", bLineGenerator(  	                        
  	                            data.filter(function(d) {
                                	if(d.value != null)
                                		return d;
                                })))

  line_y.style("opacity", 0)
        .transition()
        .duration(3000)
        .style("opacity", 1)

 this.genderData_complete = this.func();

}

}