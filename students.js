// Display student data from localStorage
function displayData() {
    const students = JSON.parse(localStorage.getItem("students")) || [];
    const studentData = document.getElementById("studentData");
    const studentCount = document.getElementById("studentCount");

    studentData.innerHTML = ""; // Clear existing data

    // Update the student count
    studentCount.textContent = `Total Students: ${students.length}`;

    // Populate student data in the table
    students.forEach((student, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${student.name}</td>
            <td>${student.age}</td>
            <td>${student.birth}</td>
            <td>${student.department}</td>
            <td>${student.email}</td>
            <td>${student.phonenumber}</td>

            <td class="action-buttons">
                <button onclick="editStudent(${index})">Edit</button>
                <button onclick="deleteStudent(${index})">Delete</button>
            </td>
        `;
        studentData.appendChild(row);
    });
}

// Delete a student record
function deleteStudent(index) {
    const students = JSON.parse(localStorage.getItem("students")) || [];
    students.splice(index, 1); // Remove the student
    localStorage.setItem("students", JSON.stringify(students));
    displayData(); // Refresh data and count
}

// Edit a student record (redirects to form with edit index in URL)
function editStudent(index) {
    window.location.href = `index.html?edit=${index}`;
}

// Load data when the page is ready
displayData();
