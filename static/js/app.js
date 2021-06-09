// from data.js
var tableData = data;
var tableBody = d3.select("tbody");
// YOUR CODE HERE!
function createTable(data){
    console.log(data);
    tableBody.html("");
    data.forEach((element) => {
        var row = tableBody.append("tr");
        Object.values(element).forEach((values)=>{
            var tcell = row.append("td");
            tcell.text(values);
        });
    });
}
