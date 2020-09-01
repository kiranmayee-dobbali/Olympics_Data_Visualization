this.active_year = "1980";

// Add active class to the current button (highlight it)
var header = document.getElementById("topnavbar");
//console.log(header);
var btns = header.getElementsByClassName("btn");
//console.log(btns);
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}

var line = new MultiLine();
line.line_graph();
d3.csv('data/truncated_latest.csv').then(matchesCSV=>{
let teamData = d3.nest()
                .key(d=>d.NOC)
                .key(d=>d.Year)
                .rollup(leaves => {
let total_medals=0;

let country_name = leaves[0]['Team'];
var total_gold=0;
var total_bronze=0;
var total_silver=0;
len= leaves.length;
         for(var i=0;i<len;i++){
         h(i);
         }
         //total_medals+= len;
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
         }
          total_medals += total_gold+total_bronze+total_silver;


      return total_medals;
    }).entries(matchesCSV);

console.log(teamData);


   // var line = new MultiLine();


});
