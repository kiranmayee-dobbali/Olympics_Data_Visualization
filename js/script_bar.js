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

var bar = new BarGraph();
bar.beforeBar();
bar.createBar();


var data=[{"key":"GBR","values":[{"key":"1980","value":"47"},{"key":"1984","value":"118"},{"key":"1988","value":"172"},{"key":"1992","value":"222"},{"key":"1996","value":"248"},{"key":"2000","value":"302"},{"key":"2004","value":"359"},{"key":"2008","value":"440"},{"key":"2012","value":"566"},{"key":"2016","value":"711"}]},

          {"key":"RUS","values":[{"key":"1980","value":"1153"},{"key":"1988","value":"1453"},{"key":"1996","value":"1568"},{"key":"2000","value":"1755"},{"key":"2004","value":"1944"},{"key":"2008","value":"2086"},{"key":"2012","value":"2226"},{"key":"2016","value":"2341"}]},

          {"key":"GER","values":[{"key":"1980","value":"2605"},{"key":"1984","value":"2763"},{"key":"1988","value":"3059"},{"key":"1992","value":"3257"},{"key":"1996","value":"3381"},{"key":"2000","value":"3499"},{"key":"2004","value":"3648"},{"key":"2008","value":"3744"},{"key":"2012","value":"3838"},{"key":"2016","value":"3997"}]},

          {"key":"HUN","values":[{"key":"1980","value":"4058"},{"key":"1988","value":"4102"},{"key":"1992","value":"4147"},{"key":"1996","value":"4190"},{"key":"2000","value":"4243"},{"key":"2004","value":"4283"},{"key":"2008","value":"4310"},{"key":"2012","value":"4336"},{"key":"2016","value":"4358"}]},{"key":"FRA","values":[{"key":"1980","value":"4387"},{"key":"1984","value":"4454"},{"key":"1988","value":"4483"},{"key":"1992","value":"4540"},{"key":"1996","value":"4591"},{"key":"2000","value":"4657"},{"key":"2004","value":"4710"},{"key":"2008","value":"4787"},{"key":"2012","value":"4869"},{"key":"2016","value":"4965"}]},{"key":"IND","values":[{"key":"1980","value":"4981"},{"key":"1996","value":"4982"},{"key":"2000","value":"4983"},{"key":"2004","value":"4984"},{"key":"2008","value":"4987"},{"key":"2012","value":"4993"},{"key":"2016","value":"4995"}]},{"key":"ITA","values":[{"key":"1980","value":"5032"},{"key":"1984","value":"5095"},{"key":"1988","value":"5124"},{"key":"1992","value":"5169"},{"key":"1996","value":"5240"},{"key":"2000","value":"5305"},{"key":"2004","value":"5409"},{"key":"2008","value":"5451"},{"key":"2012","value":"5519"},{"key":"2016","value":"5591"}]},{"key":"AUS","values":[{"key":"1980","value":"5604"},{"key":"1984","value":"5656"},{"key":"1988","value":"5691"},{"key":"1992","value":"5748"},{"key":"1996","value":"5880"},{"key":"2000","value":"6063"},{"key":"2004","value":"6220"},{"key":"2008","value":"6369"},{"key":"2012","value":"6483"},{"key":"2016","value":"6565"}]},{"key":"PRK","values":[{"key":"1980","value":"6570"},{"key":"1992","value":"6580"},{"key":"1996","value":"6585"},{"key":"2000","value":"6589"},{"key":"2004","value":"6594"},{"key":"2008","value":"6600"},{"key":"2012","value":"6606"},{"key":"2016","value":"6613"}]},{"key":"JAM","values":[{"key":"1980","value":"6616"},{"key":"1984","value":"6623"},{"key":"1988","value":"6630"},{"key":"1992","value":"6634"},{"key":"1996","value":"6650"},{"key":"2000","value":"6673"},{"key":"2004","value":"6686"},{"key":"2008","value":"6700"},{"key":"2012","value":"6725"},{"key":"2016","value":"6755"}]},{"key":"CAN","values":[{"key":"1984","value":"6842"},{"key":"1988","value":"6865"},{"key":"1992","value":"6909"},{"key":"1996","value":"6959"},{"key":"2000","value":"6990"},{"key":"2004","value":"7007"},{"key":"2008","value":"7042"},{"key":"2012","value":"7097"},{"key":"2016","value":"7166"}]},{"key":"PAK","values":[{"key":"1984","value":"7182"},{"key":"1988","value":"7183"},{"key":"1992","value":"7199"}]},{"key":"JPN","values":[{"key":"1984","value":"7248"},{"key":"1988","value":"7268"},{"key":"1992","value":"7315"},{"key":"1996","value":"7357"},{"key":"2000","value":"7401"},{"key":"2004","value":"7494"},{"key":"2008","value":"7545"},{"key":"2012","value":"7629"},{"key":"2016","value":"7693"}]},{"key":"USA","values":[{"key":"1984","value":"8045"},{"key":"1988","value":"8253"},{"key":"1992","value":"8477"},{"key":"1996","value":"8736"},{"key":"2000","value":"8978"},{"key":"2004","value":"9241"},{"key":"2008","value":"9558"},{"key":"2012","value":"9806"},{"key":"2016","value":"10070"}]},{"key":"CHN","values":[{"key":"1984","value":"10144"},{"key":"1988","value":"10196"},{"key":"1992","value":"10278"},{"key":"1996","value":"10384"},{"key":"2000","value":"10463"},{"key":"2004","value":"10557"},{"key":"2008","value":"10741"},{"key":"2012","value":"10866"},{"key":"2016","value":"10979"}]},{"key":"POR","values":[{"key":"1984","value":"10982"},{"key":"1988","value":"10983"},{"key":"1996","value":"10986"},{"key":"2000","value":"10988"},{"key":"2004","value":"10991"},{"key":"2008","value":"10993"},{"key":"2012","value":"10995"},{"key":"2016","value":"10996"}]},{"key":"QAT","values":[{"key":"1992","value":"10997"},{"key":"2000","value":"10998"},{"key":"2012","value":"11000"},{"key":"2016","value":"11001"}]}];
