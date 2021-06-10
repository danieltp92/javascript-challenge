// from data.js
var newData = data;
var tbody = d3.select("tbody");
// YOUR CODE HERE!
function createTable(data){

    console.log(data);

    tbody.html("");

    data.forEach(function(elements) {
        console.log(elements);  
        var line = tbody.append("tr");
        
        Object.entries(elements).forEach(function([key, value]) {
            console.log(key, value);
            var field = line.append("td");
            field.text(value);
        });
    });
}

function filterButton(){

    d3.event.preventDefault();

    var cleanData = newData;
    var fecha = d3.select("#datetime").property("value");
    if(fecha){
        cleanData = cleanData.filter(x => x.datetime === fecha);
    }

    createTable(cleanData);
}

d3.selectAll("#filter-btn").on("click",filterButton);

createTable(newData);
