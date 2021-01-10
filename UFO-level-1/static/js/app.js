// from data.js
var tableData = data;

// YOUR CODE HERE!
// Select the table body and create function to filter and instert results
let tableBody = d3.select("tbody")
function filterTable(data){
    tableBody.html("")
    data.forEach(rowData =>{
        let row = tableBody.append("tr")
        Object.values(rowData).forEach(value => {
            let lineData = row.append("td")
            lineData.text(value)
        });
    });
}filterTable(tableData)

// assign fitler function to button and create on clik response
let filterButton = d3.select('#filter-btn')
filterButton.on("click",function(){
    let date2filter = d3.select('#datetime').property("value")
    let filterData= tableData.filter(d=>d.datetime===date2filter)
filterTable(filterData)

})