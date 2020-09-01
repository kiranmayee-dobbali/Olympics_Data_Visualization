var gap = null;

function selectedCountry() {
  console.log("sdajdjaldjsdadjl", gap)
  gap.selectedCountry();
}



d3.json('data/gdp.json').then( gdp_data=> {
 this.active_year = "2000";

// Add active class to the current button (highlight it)
var header = document.getElementById("topnavbar");
var btns = header.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
   btns[i].addEventListener("click", function() {
   var current = document.getElementsByClassName("active");
   current[0].className = current[0].className.replace(" active", "");
   this.className += " active";
  });
}



 d3.csv('data/truncated_latest.csv').then(matchesCSV=>{
  let MedalsData = d3.nest()
                  .key(d=> d.NOC)
                  .key(d=>d.Year)
                  .rollup()
                  .entries(matchesCSV)



  let genderData = d3.nest()
                  .key(d=>d.Year)
                  .rollup(leaves => {

                  let gender = {};
                  gender["M"] = [];
                  gender["F"] = [];

                      let len= leaves.length;
                      for(var i=0;i<len;i++){
                        g(i);
                      }

                      function g(i) {
                        if (gender[leaves[i]['Sex']].indexOf(leaves[i]['Name']) == -1)
                            gender[leaves[i]['Sex']].push(leaves[i]['Name']);
                      }


                 gender["M"] = gender["M"].length;
                 gender["F"] = gender["F"].length;

                 let obj = {
                    "values": gender
                  }

                      return obj;
                  })
                  .entries(matchesCSV);

console.log(genderData)

let genderData_complete = null
function  prep_data_for_line() {
 genderData_complete = d3.nest()
                  .key(d=>d.Year)
                  .key(d=>d.NOC)
                  .rollup(leaves => {

                  let gender = {};
                  gender["M"] = [];
                  gender["F"] = [];

                      let len= leaves.length;
                      for(var i=0;i<len;i++){
                        g(i);
                      }

                      function g(i) {
                        if (gender[leaves[i]['Sex']].indexOf(leaves[i]['Name']) == -1)
                            gender[leaves[i]['Sex']].push(leaves[i]['Name']);
                      }


                 gender["M"] = gender["M"].length;
                 gender["F"] = gender["F"].length;

                 let obj = {
                    "values": gender
                  }

                      return obj;
                  })
                  .entries(matchesCSV);
return genderData_complete

}

genderData_complete = prep_data_for_line()
gap = new Gender(genderData, genderData_complete, prep_data_for_line);
gap.createAreaChart(null);
console.log(genderData_complete)
//gender["M"] = gender["M"].length;
//gender["F"] = gender["F"].length;





// ###################################################################################
// table
      let teamData = d3.nest()
                       .key(d=> d.NOC)
                       .key(d=>d.Year)
                       .rollup(leaves => {

      let country_name = leaves[0]['Team'];

      len= leaves.length;
               var total_gold=0;
               var total_bronze=0;
               var total_silver=0;
               var t_gold=0;
               var t_bronze=0;
               var t_silver=0;
               let games2 = [];
               var sports = {}

               for(var i=0;i<len;i++){
                     h(i);
               }
               let total_medals = total_gold+total_bronze+total_silver;



               function h(i){

                       if(leaves[i]['Medal']=="Gold" ){
                         total_gold+=1;
                       }
                       if(leaves[i]['Medal']=="Bronze"){
                         total_bronze+=1;
                       }
                       if(leaves[i]['Medal']=="Silver"){
                          total_silver+=1;
                       }
               let game = {};

               if(!(leaves[i]['Sport'] in sports))
               {
                 if(leaves[i]['Medal']!="NA"){
                   sports[leaves[i]['Sport']]=1;
                 }
               }
               else{
                 if(leaves[i]['Medal']!="NA"){
                   sports[leaves[i]['Sport']]+=1;
                 }
               }
               }

              // games2.push(sports);


        let obj = {
               "Country Name":country_name,
               "Total Medals":total_medals,
               "Total Gold": total_gold,
               "Total Silver":total_silver,
               "Total Bronze":total_bronze,
               "Sports":sports,
               "type":"aggregate"
             }


             return obj;
           }).entries(matchesCSV);



      // ###################################################################################

      var treeData = [];
      let that = this;

      function prepare_tree_data() {
                      treeData = [];
                      treeData.push({'name': 'root', 'medals': 0, 'parent': ""});

                      for(let i = 0; i < teamData.length; i++) {
                         for (let j =0; j<teamData[i]['values'].length; j++) {
                          if (teamData[i]['values'][j].key == that.active_year) {
                               // teamData[i]['values'][j]['value']['Total Medals']
                               treeData.push({'medals': "undefined" ,
                                              'name': teamData[i]['key'],
                                              'parent': 'root'});

                              for (let elem in  teamData[i]['values'][j]['value']['Sports']) {

                                    treeData.push( {'name': elem,
                                                    'medals':teamData[i]['values'][j]['value']['Sports'][elem],
                                                    'parent': teamData[i].key })

                              }

                              }
                        }
      }

        let sum = 0;
        for(let i=0; i< treeData.length; i++) {
          sum += parseInt(treeData[i]['medals']);
        }

        treeData[0]['medals'] = "undefined";
      }

      prepare_tree_data()
      const tree_map = new TreeMap(treeData, updateyear);
      tree_map.createTreeMap();

  function updateyear(active_year) {
       that.active_year = active_year;

       prepare_tree_data();
       tree_map.updateTreeMap(treeData);

  }

});

});
