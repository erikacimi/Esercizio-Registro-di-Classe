document.addEventListener('DOMContentLoaded', function () {
    const students = JSON.parse(localStorage.getItem('students')) || [];
    populateStudentList(students);
});

function addStudent() {
    const name = document.getElementById('name').value;
    const surname = document.getElementById('surname').value;

    if (name && surname) {

        let students = JSON.parse(localStorage.getItem('students')) || [];
        students.push({ name, surname });
        localStorage.setItem('students', JSON.stringify(students));
        populateStudentList(students);
        document.getElementById('name').value = '';
        document.getElementById('surname').value = '';
    } else {
        alert('Inserisci nome e cognome dello studente.');
    }
}
function removeStudent(index) {
    let students = JSON.parse(localStorage.getItem('students')) || [];
    students.splice(index, 1);
    localStorage.setItem('students', JSON.stringify(students));
    populateStudentList(students);
}
function populateStudentList(students) {
    const studentList = document.getElementById('studentList');
    studentList.innerHTML = '';
    students.forEach((student, index) => {
        const li = document.createElement('li');
        li.innerHTML = `${student.name} ${student.surname} <button onclick="removeStudent(${index})">Rimuovi</button>`;
        studentList.appendChild(li);
    });
}
