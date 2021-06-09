// from data.js
var tableData = data;
var tbody = d3.select("tbody");
// YOUR CODE HERE!
function createTable(data){

    console.log(data);
    tableBody.html("");
    data.forEach((element) => {
        
        var row = tableBody.append("tr");

        Object.values(element).forEach((values)=>{

            var cell = row.append("td");
            cell.text(values);

        });

    });
}

function filterButton(){

    var filtered = tableData;
    var date = d3.select("#datetime").property("value");
    if(date){

        filtered = filtered.filter(x => x.datetime === date);

    }
    
    createTable(filtered)

}

d3.selectAll("#filter-btn").on("click", filterButton);

createTable(tableData);