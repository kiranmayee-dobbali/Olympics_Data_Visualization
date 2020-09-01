class Table2{

constructor(teamData){
this.tableElements= teamData;
this.cell = {
    "width": 260,
    "height": 50,
    "buffer": 15
};

this.bar = {
    "height": 20
};
this.gameScale = d3.scaleLinear()
    .range([0,this.cell.width]);

this.aggregateColorScale = d3.scaleLinear()
        .range(["#d2edcd","#084081"]);

this.tableHeaders = ["Team", "Gold", "Silver", "Bronze", "Total"];
this.flag=0;
//this.data=this.tableElements;
}

beforeTable(activeYear){
  let that=this;
//  that.tableHeaders.splice(0, 0, "Team");
 let head = d3.select("thead").select("tr")
 let td = head.selectAll("th,td,td,td")
      .data(that.tableHeaders)
      .on("click",(d)=>{
        console.log(that.flag);
      if(that.flag==0)  {

         console.log("d",d);
        console.log("prssed");

        if (this.assending) {
        this.check(d,activeYear);
            this.assending = false;
        } else {
          this.check2(d,activeYear);

            this.assending = true;
        }
        this.createTable(activeYear);
}
      });

}

selectedCountryTable(country,activeYear) {
  console.log(country,activeYear);
  let that=this;
  if(country!=null){
    console.log("inside");
    for(let i=0;i<that.tableElements.length;i++)
    {
      console.log(that.tableElements[i],activeYear);
      if(that.tableElements[i].key==country){
        //console.log();
        console.log(that.tableElements[i],activeYear);
       this.updateList(that.tableElements[i],activeYear);
      }
    }
  }
  else{
    this.updateList(that.tableElements ,activeYear);
  }
}


check(d,activeYear){
            console.log("enter check");
            if (d == "Team") {
                this.tableElements.sort(function (a, b) {
                return a.values[0].value['Country Name'] < b.values[0].value['Country Name']  ? -1 : 1        })
            }
          else if (d=="Gold") {
            this.tableElements.sort(function (a, b) {
              let i=0;
                    for( i=0;i<a.values.length;i++){
                      if(a.values[i].key== activeYear){
                      //  let x = a.values[i].value['Total Gold'];
                        break;
                      }
                    }


              let j=0;
              for( j=0;j<b.values.length;j++){
                if(b.values[j].key== activeYear){
                //  let x = a.values[i].value['Total Gold'];
                  break;
                }
              }

              if(i==a.values.length){
                return -1;
              }
              if(j==b.values.length){
                return 1;
              }
              return  a.values[i].value['Total Gold']- b.values[j].value['Total Gold'];

              })
            } //elseif gold
/////////////////////////////////
          else if (d=="Silver") {
            this.tableElements.sort(function (a, b) {
              let i=0;
                    for( i=0;i<a.values.length;i++){
                      if(a.values[i].key== activeYear){
                      //  let x = a.values[i].value['Total Gold'];
                        break;
                      }
                    }


              let j=0;
              for( j=0;j<b.values.length;j++){
                if(b.values[j].key== activeYear){
                //  let x = a.values[i].value['Total Gold'];
                  break;
                }
              }

              if(i==a.values.length){
                return -1;
              }
              if(j==b.values.length){
                return 1;
              }
              return  a.values[i].value['Total Silver']- b.values[j].value['Total Silver'];

              })
            } //elseif silver


            /////////////////////////////////
                      else if (d=="Bronze") {
                        this.tableElements.sort(function (a, b) {
                          let i=0;
                                for( i=0;i<a.values.length;i++){
                                  if(a.values[i].key== activeYear){
                                  //  let x = a.values[i].value['Total Gold'];
                                    break;
                                  }
                                }


                          let j=0;
                          for( j=0;j<b.values.length;j++){
                            if(b.values[j].key== activeYear){
                            //  let x = a.values[i].value['Total Gold'];
                              break;
                            }
                          }

                          if(i==a.values.length){
                            return -1;
                          }
                          if(j==b.values.length){
                            return 1;
                          }
                          return  a.values[i].value['Total Bronze']- b.values[j].value['Total Bronze'];

                          })
                        } //elseif Brone
                        /////////////////////////////////
                          else if (d=="Total") {
                            this.tableElements.sort(function (a, b) {
                              let i=0;
                                    for( i=0;i<a.values.length;i++){
                                      if(a.values[i].key== activeYear){
                                      //  let x = a.values[i].value['Total Gold'];
                                        break;
                                      }
                                    }


                              let j=0;
                              for( j=0;j<b.values.length;j++){
                                if(b.values[j].key== activeYear){
                                //  let x = a.values[i].value['Total Gold'];
                                  break;
                                }
                              }

                              if(i==a.values.length){
                                return -1;
                              }
                              if(j==b.values.length){
                                return 1;
                              }
                              return  a.values[i].value['Total Medals']- b.values[j].value['Total Medals'];

                              })
                            } //elseif Total

}

check2(d,activeYear){
            console.log("enter check2");

            if (d == "Team") {
                this.tableElements.sort(function (a, b) {
                    return b.values[0].value['Country Name'] < a.values[0].value['Country Name']  ? -1 : 1
                })
            }
            else if (d=="Gold") {
              this.tableElements.sort(function (a, b) {
                let i=0;
                      for( i=0;i<a.values.length;i++){
                        if(a.values[i].key== activeYear){
                        //  let x = a.values[i].value['Total Gold'];
                          break;
                        }
                      }


                let j=0;
                for( j=0;j<b.values.length;j++){
                  if(b.values[j].key== activeYear){
                  //  let x = a.values[i].value['Total Gold'];
                    break;
                  }
                }

                if(i==a.values.length){
                  return -1;
                }
                if(j==b.values.length){
                  return 1;
                }
                return  b.values[j].value['Total Gold']- a.values[i].value['Total Gold'];
              })
              }
              else if (d=="Silver") {
                this.tableElements.sort(function (a, b) {
                  let i=0;
                        for( i=0;i<a.values.length;i++){
                          if(a.values[i].key== activeYear){
                          //  let x = a.values[i].value['Total Gold'];
                            break;
                          }
                        }


                  let j=0;
                  for( j=0;j<b.values.length;j++){
                    if(b.values[j].key== activeYear){
                    //  let x = a.values[i].value['Total Gold'];
                      break;
                    }
                  }

                  if(i==a.values.length){
                    return -1;
                  }
                  if(j==b.values.length){
                    return 1;
                  }
                  return  b.values[j].value['Total Silver']- a.values[i].value['Total Silver'];

                  })
                } //elseif silver
                else if (d=="Bronze") {
                  this.tableElements.sort(function (a, b) {
                    let i=0;
                          for( i=0;i<a.values.length;i++){
                            if(a.values[i].key== activeYear){
                            //  let x = a.values[i].value['Total Gold'];
                              break;
                            }
                          }


                    let j=0;
                    for( j=0;j<b.values.length;j++){
                      if(b.values[j].key== activeYear){
                      //  let x = a.values[i].value['Total Gold'];
                        break;
                      }
                    }

                    if(i==a.values.length){
                      return -1;
                    }
                    if(j==b.values.length){
                      return 1;
                    }
                    return  b.values[j].value['Total Bronze']- a.values[i].value['Total Bronze'];

                    })
                  } //elseif silver

                  else if (d=="Total") {
                    this.tableElements.sort(function (a, b) {
                      let i=0;
                            for( i=0;i<a.values.length;i++){
                              if(a.values[i].key== activeYear){
                              //  let x = a.values[i].value['Total Gold'];
                                break;
                              }
                            }


                      let j=0;
                      for( j=0;j<b.values.length;j++){
                        if(b.values[j].key== activeYear){
                        //  let x = a.values[i].value['Total Gold'];
                          break;
                        }
                      }

                      if(i==a.values.length){
                        return -1;
                      }
                      if(j==b.values.length){
                        return 1;
                      }
                      return  b.values[j].value['Total Medals']- a.values[i].value['Total Medals'];

                      })
                    } //elseif silver


              }
///////////////////////////////CREATE TABLE
createTable(activeYear,data){
let that = this;
console.log(that.flag);
if(that.flag==1){
  //that.tableElements=data;
  //that.data=that.tableElements;

}
else{
data=that.tableElements;
}
console.log("***",data);
//let maxTotalGames= d3.max(that.tableElements, function (d) {
  // return d.values;
//})
/*
let new_tableElements=[];
for(let ele in that.tableElements){
  for (let l in that.tableElements[ele].values){
    //console.log(that.tableElements[ele].values[l].key);
    if(that.tableElements[ele].values[l].key == activeYear){
      //new_tableElements.append();

    }
    else{
      //delete that.tableElements[ele].values[l].values
    }

  }
}

*/
that.gameScale.domain([0,500]);
that.aggregateColorScale.domain([0,500]);
let new_tableElements= data.filter(function(d){
        for(let ele in d.values){
           if(d.values[ele].key==activeYear){
             return 1;
           }
            }
            return 0;
    })
    console.log("new",new_tableElements);
let tablerow = d3.select("tbody").selectAll("tr")
     .data(new_tableElements)
     .join('tr')
     .attr("class",function(d,i){
       if(i!=0 && that.flag==1 ){
         //var header = d3.select(this);
         return "subcat";
       }
      return;
     });

//tablerow.text(function(d){
//return d.key;
let tablehead = tablerow.selectAll("th")
                        .data(function (d,i) {
                          console.log("^^^^^",d);
                          return [d];   })
                        .join("th")
                        .text(function(d,i){

                      return d.values[i].value["Country Name"];
                   })
                   .on("click", d => this.updateList(d,activeYear));


let td = tablerow.selectAll("td")
                .data(function (d, i) {
                  if(i==0 && that.flag==1){

                  }
                    let list = []
                  //  console.log(d.values);
                   let a = d.values;
                   for (let ele in a){
                    // if( d.values[ele].value.type=="aggregate"){
                       if(d.values[ele].key==activeYear){

                         list.push(d.values[ele].value['Total Gold']);
                         list.push(d.values[ele].value['Total Silver']);
                         list.push(d.values[ele].value['Total Bronze']);

                         list.push(d.values[ele].value['Total Medals']);
                       }
                    // }

                   }


                    return list
                });
                td = td.join('td');

                let bars = td.selectAll("svg")
                    .data(function (d) {
                        return [d];
                    }).join('svg')
                    .attr("width", this.cell.width)
                    .attr("height", this.cell.height-20);

              let rect = bars.selectAll("rect")
                  .data(function (d) {
                      return [d];
                  }).join('rect')
                  .attr("width", function (d) {
                      return that.gameScale(d);
                  })
                  .attr("height", 40)
                  .attr("fill", function (d) {
                      return that.aggregateColorScale(d)
                  })
        let barstext = bars.selectAll("text")
            .data(function (d) {
                return [d];
            }).join('text')
            .attr("x", function (d) {
                return that.gameScale(d)+5;
            })
            .attr("y", this.cell.height / 2 + 5)
            .text(function (d) {
                return d;
            })

}

updateList(i,activeYear) {
  console.log("IIIIIII",i);
  let that=this;
if(that.flag==0){
  console.log("pressded table ele",activeYear);
    // ******* TODO: PART IV *******
  let new_elements=[];
  let row={};

//  console.log("i.values",i.values);
  for(let k=0; k<i.values.length;k++){
    if(i.values[k].key==activeYear){
    //  console.log(i.values[k]);
        new_elements[0]=i;
        console.log(new_elements);
        for(let m=0; m< i.values.length;m++){
          if(i.values[m].key==activeYear){
            let len =Object.keys(i.values[m].value.Sports).length;
          //  console.log(i.values[m].value.Sports);
             const keys = Object.keys(i.values[m].value.Sports);
             const values = Object.values(i.values[m].value.Sports);
             console.log("values",values);
            for(let n=0;n<len;n++){
              let arr=[]
              arr[0]={'key':String(activeYear),'value':{'Country Name':keys[n],'Total Gold':values[n][0],'Total Silver':values[n][1],'Total Bronze':values[n][2],'Total Medals':values[n][3]}};
              console.log({'key':keys[n],'values':arr});
            //  console.log({'key':keys[n],'values':{'Total Gold':values[n][0]}});
              row[n+1]={'key':keys[n],'values':arr};

            }
            //row['key']= i.values[m].value.Sports;
            //console.log(row);
          }
        }
    }
  }
  console.log("ROW",row);
//join dicts
for(let p=0;p<Object.keys(row).length;p++){
  new_elements[p+1]=row[p+1];
}

console.log("new_ele",new_elements);


  //that.tableElements=new_elements;
that.flag=1;

this.createTable(activeYear,new_elements);
}
else{
  that.flag=0;

  this.createTable(activeYear,0);

}

}


}
