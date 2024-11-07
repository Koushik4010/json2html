// json2html.js

// Export the json2html function as default
export default function json2html(data) {
  // Start building the HTML table as a string with the correct data-user attribute
  let html = `<table data-user="saimounikgupta346@gmail.com">`;

  // Define the header row
  html += `
    <thead>
      <tr><th>Name</th><th>Age</th><th>Gender</th></tr>
    </thead>
    <tbody>
  `;

  // Loop through each object in the data array and add a row for each
  data.forEach(item => {
    html += `<tr><td>${item.Name || ''}</td><td>${item.Age || ''}</td><td>${item.Gender || ''}</td></tr>`;
  });

  // Close the table
  html += `
    </tbody>
  </table>`;

  // Return the HTML string
  return html;
}
