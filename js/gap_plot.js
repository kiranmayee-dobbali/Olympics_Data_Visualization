class PlotData {


    constructor(country, xVal, yVal, num) {
        this.country = country;
        this.xVal = xVal;
        this.yVal = yVal;
        //this.id = id;
        //this.region = region;
        this.circleSize = num;
    }
}

class GapPlot {

    constructor(medals_data, gdp_data, participants_data, updateYear, Table) {

        this.margin = { top: 20, right: 20, bottom: 60, left: 80 };
        this.width = 810 - this.margin.left - this.margin.right;
        this.height = 500 - this.margin.top - this.margin.bottom;

        this.medals_data = medals_data;
        this.gdp_data = gdp_data;
        this.participants_data= participants_data;
        this.activeYear = 2000;
        this.updateYear = updateYear;
        this.Table = Table;

        this.play_stop = 0;

    }

    sleep(milliseconds) {
      const date = Date.now();
      let currentDate = null;

      do {
           currentDate = Date.now();
         } while (currentDate - date < milliseconds);
    }

    get_region(countryId)
    {

    let dict =  {

           "AUS": "australia",
           "BAN": "asia",
           "CAN": "northamerica",
           "CHN": "asia",
           "FRA": "europe",
           "GBR": "europe",
           "GER": "europe",
           "HUN": "europe",
           "IND": "aisa",
           "ITA": "europe",
           "JAM": "none",
           "JPN": "asia",
           "PAK": "asia",
           "POR": "europe",
           "PRK":  "aisa",
           "QAT":  "asia",
           "RUS":  "asia",
           "USA": "northamerica"
    }



    return dict[countryId]

    }

    drawPlot() {

        d3.select('#scatter-plot')
            .append('div').attr('id', 'chart-view');

        d3.select('#scatter-plot')
            .append('div').attr('id', 'activeYear-bar');

        d3.select('#chart-view')
            .append('div')
            .attr("class", "tooltip")
            .style("opacity", 0);

        d3.select('#chart-view')
            .append('svg').classed('plot-svg', true)
            .attr("width", this.width + this.margin.left + this.margin.right)
            .attr("height", this.height + this.margin.top + this.margin.bottom);

        let svgGroup = d3.select('#chart-view').select('.plot-svg').append('g').classed('wrapper-group', true);

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
                             .domain([0, 9])
                             .range([0, 700]);

        let y_axis_scale = d3.scaleLinear()
                             .domain([0, 180000])
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

        let dropdownWrap = d3.select('#chart-view').append('div').classed('dropdown-wrapper', true);

        let cWrap = dropdownWrap.append('div').classed('dropdown-panel', true);

        cWrap.append('div').classed('c-label', true)
            .append('text')
            .text('Circle Size');

        cWrap.append('div').attr('id', 'dropdown_c').classed('dropdown', true).append('div').classed('dropdown-content', true)
            .append('select');

        let xWrap = dropdownWrap.append('div').classed('dropdown-panel', true);

        xWrap.append('div').classed('x-label', true)
            .append('text')
            .text('X Axis Data');

        xWrap.append('div').attr('id', 'dropdown_x').classed('dropdown', true).append('div').classed('dropdown-content', true)
            .append('select');

        let yWrap = dropdownWrap.append('div').classed('dropdown-panel', true);

        yWrap.append('div').classed('y-label', true)
            .append('text')
            .text('Y Axis Data');

        yWrap.append('div').attr('id', 'dropdown_y').classed('dropdown', true).append('div').classed('dropdown-content', true)
            .append('select');

        d3.select('#chart-view')
            .append('div')
            .classed('circle-legend', true)
            .append('svg')
            .append('g')
            .attr('transform', 'translate(10, 0)');

        let icon = d3.select('#activeYear-bar')
                     .append('button')
                     .attr('type', "button")
                     .attr('class', 'button');

        let that = this;
        let dummy = []

        icon.on('click', function(d) {
          for (let i = 0; i<dummy.length ;i++) {
               window.clearTimeout(dummy[i])
          }

          if (dummy.length) {
                d3.select(this).classed('pause', 'false');
                d3.select(this).classed('button', 'true');

                this.play_stop = 0;
                dummy = []
                return;
          }

          /*
           d3.select(".slider")
             .transition()
             .duration(7000)
             .tween("value", function() {
             let i = d3.interpolate(this.min, this.max);
             return function(t) { this.value = i(t);
                                  that.drawYearBar(); };
           });*/

            let yearSlider = d3.select('.slider');
            let year_list = [1984, 1988, 1992, 1996, 2000, 2004, 2008, 2012, 2016]


            let event = new Event('input', {
                bubbles: true,
                cancelable: true,
            });


           d3.select(this).classed('pause', 'true');
           d3.select(this).classed('button', 'false');

            yearSlider.node().value = 1980;
            yearSlider.node().dispatchEvent(event)

         let i = 1000;
         for (let elem in year_list) {

          dummy.push(window.setTimeout(()=> { yearSlider.node().value = year_list[elem];
                                     yearSlider.node().dispatchEvent(event);}, i ));
            i = i+2000;
          }



        });

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
        this.updatePlot(2000, "gdp", "medals", "participants");

    }

    FindMax(indicator)
    {
        if (indicator === "gdp") {
            return 120000;
        }
        else if (indicator === "medals") {
            return 400;
        }
        else {
            return 2000;
        }

    }
    updatePlot(activeYear, xIndicator, yIndicator, circleSizeIndicator) {

        console.log("updatyeeee");
        let year_list = [1980, 1984, 1988, 1992, 1996, 2000, 2004, 2008, 2012, 2016]

        if (!year_list.includes(parseInt(activeYear)))
               return

        this.updateYear(activeYear);
        let X_max = this.FindMax(xIndicator);
        let Y_max = this.FindMax(yIndicator);
        let Circle_max = this.FindMax(circleSizeIndicator);
        // let Circle_min = 3;

        let x_axis_scale = d3.scaleLinear()
                             .domain([0, X_max])
                             .range([0, 750]);

        let y_axis_scale = d3.scaleLinear()
                             .domain([0, Y_max])
                             .range([470,0]);

        let x_axis = d3.axisBottom(x_axis_scale);
        let y_axis = d3.axisLeft(y_axis_scale);
        let svgGroup = d3.select('#chart-view').select('.plot-svg').selectAll('.wrapper-group');



        let X_axis = svgGroup.select("#xaxis")
                             .join('g')
                             .attr("transform", "translate(50, 480)")
                             .call(x_axis);

        let Y_axis = svgGroup.select("#yaxis")
                             .join('g')
                             .attr("transform", "translate(50, 10)")
                             .call(y_axis);

        let list_of_plot_data = [];

        let Data = {}
        Data["medals"] = {}
        Data["gdp"] = {}
        Data["participants"] = {}

        for (let i = 0; i < this.medals_data.length ; i++)
        {
             for (let j = 0; j < this.medals_data[i].values.length; j++)
             {
                if (parseInt(this.medals_data[i].values[j].key) === parseInt(activeYear))
                {
                    Data["medals"][this.medals_data[i].key] = this.medals_data[i].values[j].values.length;
                }
             }

        }

        for (let i = 1; i < this.gdp_data.length; i++)
        {

               let field_num = activeYear -1975;
               let field_string = "field_"+field_num;
               Data["gdp"][this.gdp_data[i]["field_3"].toUpperCase()] = this.gdp_data[i][field_string]

        }



        for (let i = 0; i < this.participants_data.length; i++)
        {

             for (let j = 0; j < this.participants_data[i].values.length; j++)
             {
                             //console.log(this.medals_data[i].values.length);

                if (parseInt(this.participants_data[i].values[j].key) === parseInt(activeYear))
                {
                    Data["participants"][this.participants_data[i].key] = this.participants_data[i].values[j].values.length;
                }
             }
        }


       for (let country in Data["medals"])   {
            list_of_plot_data.push(new PlotData(country,Data[xIndicator][country] , Data[yIndicator][country], Data[circleSizeIndicator][country]))
        }


        let  maxSize = this.FindMax(circleSizeIndicator);
        let  minSize = 0;


        let circleSizer = function(d) {
            let cScale = d3.scaleSqrt()
                           .range([3, 25])
                           .domain([minSize, maxSize]);
            return cScale(d.circleSize);
        };


        let circle_x_scale = d3.scaleLinear()
                             .domain([0, X_max])
                             .range([0, 750]);

        let circle_y_scale = d3.scaleLinear()
                             .domain([0, Y_max])
                             .range([470,0]);




        let colorScale = d3.scaleOrdinal(d3.schemePaired);

        console.log(colorScale("USA"))
        svgGroup = d3.select('#chart-view').select('.plot-svg').selectAll('.wrapper-group');

        const circles = svgGroup.selectAll('circle').data(list_of_plot_data).join('circle');

        let that = this;
        circles.attr('cx', function(d) {
                                   console.log(d);
                                   return circle_x_scale(d.xVal);
                                   })
               .attr('cy', d => circle_y_scale(d.yVal))
               .attr('r', d=> circleSizer(d))
               .attr("transform", "translate(50, 0 )")
               .style("fill", d => colorScale(d.country))

               .on('mouseover', function(d){
                    console.log(xIndicator);

                    circles.html("<title>" + "Country: " +d.country + "\n" + xIndicator+ ": " + d.xVal + "\n" + yIndicator + ": " + d.yVal +"\n" +circleSizeIndicator +": "+ d.circleSize+"</title>")
                    circles.style('opacity', '0.5')
                    d3.select(this).style('opacity', '1' ).attr('stroke-width', "4")

                    that.Table.selectedCountryTable(d.country, that.activeYear);
               })
               .on('mouseout', function(d) {
                    circles.style('opacity', '1').attr('stroke-width', "1");

                    that.Table.selectedCountryTable(null, that.activeYear);

               })


          //YOUR CODE HERE
          this.drawDropDown(xIndicator, yIndicator, circleSizeIndicator);
          this.drawYearBar();
}

    tooltipRender(data) {
        let text = "<h2>" + data['country'] + "</h2>";
        return text;
    }


    drawDropDown(xIndicator, yIndicator, circleSizeIndicator) {


        let that = this;
        let dropDownWrapper = d3.select('.dropdown-wrapper');
        let dropData = ["gdp", "medals", "participants"];



        /* CIRCLE DROPDOWN */
        let dropC = dropDownWrapper.select('#dropdown_c').select('.dropdown-content').attr("style", "width:200px").select('select');

        let optionsC = dropC.selectAll('option')
            .data(dropData);


        optionsC.exit().remove();

        let optionsCEnter = optionsC.enter()
            .append('option')
            .attr('value', d => d);

        optionsCEnter.append('text')
            .text(d => d);

        optionsC = optionsCEnter.merge(optionsC);

        let selectedC = optionsC.filter(d => d === circleSizeIndicator)
            .attr('selected', true);

        dropC.on('change', function(d, i) {
            let cValue = this.options[this.selectedIndex].value;
            let xValue = dropX.node().value;
            let yValue = dropY.node().value;
            that.updatePlot(that.activeYear, xValue, yValue, cValue);
        });

        /* X DROPDOWN */
        let dropX = dropDownWrapper.select('#dropdown_x').select('.dropdown-content').attr("style", "width:200px").select('select');

        let optionsX = dropX.selectAll('option')
            .data(dropData);

        optionsX.exit().remove();

        let optionsXEnter = optionsX.enter()
            .append('option')
            .attr('value', d => d);

        optionsXEnter.append('text')
            .text(d => d);

        optionsX = optionsXEnter.merge(optionsX);

        let selectedX = optionsX.filter(d => d === xIndicator)
            .attr('selected', true);

        dropX.on('change', function(d, i) {
            let xValue = this.options[this.selectedIndex].value;
            let yValue = dropY.node().value;
            let cValue = dropC.node().value;
            that.updatePlot(that.activeYear, xValue, yValue, cValue);
        });

        /* Y DROPDOWN */
        let dropY = dropDownWrapper.select('#dropdown_y').select('.dropdown-content').attr("style", "width:200px").select('select');

        let optionsY = dropY.selectAll('option')
            .data(dropData);

        optionsY.exit().remove();

        let optionsYEnter = optionsY.enter()
            .append('option')
            .attr('value', d => d);

        optionsY = optionsYEnter.merge(optionsY);

        optionsYEnter.append('text')
            .text(d => d);

        let selectedY = optionsY.filter(d => d === yIndicator)
            .attr('selected', true);

        dropY.on('change', function(d, i) {
            let yValue = this.options[this.selectedIndex].value;
            let xValue = dropX.node().value;
            let cValue = dropC.node().value;
            that.updatePlot(that.activeYear, xValue, yValue, cValue);
        });

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

        let dropDownWrapper = d3.select('.dropdown-wrapper');
        let dropX = dropDownWrapper.select('#dropdown_x').select('.dropdown-content').select('select');
        let dropC = dropDownWrapper.select('#dropdown_c').select('.dropdown-content').select('select');
        let dropY = dropDownWrapper.select('#dropdown_y').select('.dropdown-content').select('select');

        let tag = d3.select('.activeYear-background');
        tag.text(year);
        that.activeYear=year;
        //   .attr("class", "activeYear-background");

        let sliderLabel = d3.select('.slider-wrap');
        let sliderText = sliderLabel.select('text').text(year);
        sliderText.attr('x', yearScale(year));
        sliderText.attr('y', 25)
                  .attr('font-size', "large")
                  .attr('font-weight', 'bold');


        that.activeYear = year;
        //that.updateYear(year);
        that.updatePlot(year, dropX.node().value , dropY.node().value, dropC.node().value);

        });
    }

    updateHighlightClick(activeCountry) {

        let countryData = activeCountry;
        activeCountry = activeCountry.id;

        // selection
        let svgGroup = d3.select('#chart-view')
                         .select('.plot-svg')
                         .selectAll('.wrapper-group');

        // Graying out other stuff
        const circles = svgGroup.selectAll('circle');
        circles.classed('hidden', true);


        // highlight
        activeCountry = activeCountry.toLowerCase();
        activeCountry = "#"+activeCountry;

        svgGroup.select(activeCountry)
                .classed("hidden", false)
                .classed("selected-country",true);

        this.selectedCountry.push(activeCountry);

    }

}
