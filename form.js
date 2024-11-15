// Load form data if in edit mode
document.addEventListener("DOMContentLoaded", function() {
    const urlParams = new URLSearchParams(window.location.search);
    const editIndex = urlParams.get("edit");

    if (editIndex !== null) {
        // Edit mode: load data from localStorage
        const students = JSON.parse(localStorage.getItem("students")) || [];
        const student = students[editIndex];

        if (student) {
            // Pre-fill form fields with data to edit
            document.getElementById("name").value = student.name;
            document.getElementById("age").value = student.age;
            document.getElementById("birth").value = student.birth;
            document.getElementById("department").value = student.department;
            document.getElementById("email").value = student.email;
            document.getElementById("phonenumber").value = student.phonenumber;
            document.getElementById("editIndex").value = editIndex;
        }
    }
});

// Handle form submission for adding or editing
document.getElementById("studentForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Get form values
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const birth= document.getElementById("birth").value;
    const department = document.getElementById("department").value;
    const email = document.getElementById("email").value;
    const phonenumber = document.getElementById("phonenumber").value;

    const editIndex = document.getElementById("editIndex").value;

    // Retrieve current data from localStorage
    let students = JSON.parse(localStorage.getItem("students")) || [];

    if (editIndex === "-1") {
        // Add new student
        students.push({ name, age,birth,department, email,phonenumber });
    } else {
        // Update existing student
        students[editIndex] = {  name, age,birth,department, email,phonenumber };
    }

    // Save updated data to localStorage
    localStorage.setItem("students", JSON.stringify(students));

    // Clear the form and redirect to the data page
    document.getElementById("studentForm").reset();
    window.location.href = "students.html";
});
