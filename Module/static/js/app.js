// import the data from data.js
// import as a constant variable b/c don't want it to chanege
const tableData = data;

// reference the HTML table using d3
var tbody = d3.select('tbody');

 // clear the existing data (11.5.1)
 function buildTable(data) {
    // First, clear out any existing data
    tbody.html("");
  
    // Next, loop through each object in the data
    // and append a row and cells for each value in the row
    data.forEach((dataRow) => {
      // Append a row to the table body
      let row = tbody.append("tr");
  
      // Loop through each field in the dataRow and add
      // each value as a table cell (td)
      Object.values(dataRow).forEach((val) => {
        let cell = row.append("td");
        cell.text(val);
        }
      );
    });
  }

  function handleClick() {
    // Grab the datetime value from the filter
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;
  
     // Check to see if a date was entered and filter the
    // data using that date.
    if (date) {
      // Apply `filter` to the table data to only keep the
      // rows where the `datetime` value matches the filter value
      filteredData = filteredData.filter(row => row.datetime === date);
    };
  
     // Rebuild the table using the filtered data
    // @NOTE: If no date was entered, then filteredData will
    // just be the original tableData.
    buildTable(filteredData);
  };

// create a code for d3 to 'listen' for a button click
// when detected, execute the handlClick function
  d3.selectAll("#filter-btn").on("click", handleClick);

//   build the table to start so it loads when page starts
// uses a function we created above
buildTable(tableData);
