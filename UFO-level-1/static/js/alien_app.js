// from data.js
var tbody = d3.select("tbody");
// YOUR CODE HERE!

console.log(data);

data.forEach(function(elements) {
    console.log(elements);  
    var line = tbody.append("tr");
    
    Object.entries(elements).forEach(function([key, value]) {
        console.log(key, value);
        var field = line.append("td");
        field.text(value);
    });
});