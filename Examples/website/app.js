let students = [];

function addStudent() {
    const nameInput = document.getElementById('name');
    const ageInput = document.getElementById('age');

    const name = nameInput.value;
    const age = parseInt(ageInput.value);

    if (name && !isNaN(age)) {
        const student = { name, age };
        students.push(student);
        displayStudents();
        clearForm();
    } else {
        alert('Bitte füllen Sie alle Felder korrekt aus.');
    }
}

function displayStudents() {
    const studentList = document.getElementById('studentList');
    studentList.innerHTML = '';

    students.forEach((student, index) => {
        const li = document.createElement('li');
        li.textContent = `${student.name} (${student.age} Jahre)`;
        studentList.appendChild(li);
    });
}

function clearForm() {
    document.getElementById('name').value = '';
    document.getElementById('age').value = '';
}

// Beispiel: Vordefinierte Schüler hinzufügen
students.push({ name: 'Max Mustermann', age: 18 });
students.push({ name: 'Erika Musterfrau', age: 17 });

// Initialanzeige der Schüler
displayStudents();
