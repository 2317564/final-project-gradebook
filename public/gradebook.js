async function fetchGradeData() {
    try {
        const response = await fetch('/api/grades');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        populateGradebook(data);
    } catch (error) {
        console.error("Error fetching grade data:", error);
    }
}

function populateGradebook(data) {
    const tableBody = document.getElementById("gradebook-body");
    tableBody.innerHTML = ''; // Очистка перед добавлением

    data.forEach(student => {
        const row = document.createElement("tr");

        const nameCell = document.createElement("td");
        nameCell.textContent = student.name;

        const gradeCell = document.createElement("td");
        gradeCell.textContent = student.grade;

        row.appendChild(nameCell);
        row.appendChild(gradeCell);
        tableBody.appendChild(row);
    });
}

window.onload = function() {
    fetchGradeData();
}




// TODO: Fetch data from the PostgreSQL database (to be implemented later)
function fetchGradeData() {
  // This function will query the PostgreSQL database and return grade data
  console.log("Fetching grade data...");
}

// TODO: Populate the table with grade data
function populateGradebook(data) {
  // This function will take the fetched grade data and populate the table
  console.log("Populating gradebook with data:", data);
}

// TODO: REMOVE THIS
// Call the stubs to demonstrate the workflow
const gradeData = fetchGradeData();
populateGradebook(gradeData);
// END REMOVE

