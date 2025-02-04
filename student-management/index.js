//class to represent a student
class Student {
    constructor(id, name, age, grade) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.grade = grade;
    }
}

//class for managing the students
class StudentManager {
    constructor(){
        this.students = [];
        this.idCounter = 1;
    }


    //this method adds a new student
    addStudent(name, age, grade) {
        this.clearForm();
        //if statement checks if fields are empty
        if (name === "" || age === "" || grade === ""){
            alert("Please fill all fields.");
            return;
        }

        //create new student object with unique id
        let newStudent = new Student(this.idCounter++, name, age, grade);
        this.students.push(newStudent);

        //display the updated students
        this.displayStudents();
        
    }
    //this method will display all the students to the screen
    displayStudents(){
        let studentList = document.getElementById("studentList");
        studentList.innerHTML = "";
        this.students.forEach(student => {
            let row = `
                <tr>
                    <td>${student.id}</td>
                    <td>${student.name}</td>
                    <td>${student.age}</td>
                    <td>${student.grade}</td>
                    <td>
                        <button class="edit btn btn-warning" onclick="editStudent(${student.id})">Edit</button>
                        <button class="delete btn btn-danger" onclick="deleteStudent(${student.id})">Delete</button>
                    </td>
                </tr>
            `;
            studentList.innerHTML += row;
        });
    }

    //this method will update existing students
    updateStudent(id, name, age, grade){
        let student = this.students.find(s => s.id === id);
        if(student){
            student.name = name;
            student.age = age;
            student.grade = grade;
            this.displayStudents();
        }
    }

    //this method will delete the student of the given id
    deleteStudent(id){
        this.students = this.students.filter(students => students.id !== id);
        this.displayStudents();
    }

    //this clears the form
    clearForm(){
        document.getElementById("name").value = "";
        document.getElementById("age").value = "";
        document.getElementById("grade").value = "";
    }

    searchStudent(search){
        let studentList = document.getElementById("studentList");
        studentList.innerHTML = "";

        this.students.filter(student => student.name.toLowerCase().includes(search.toLowerCase())).forEach(student => {
            let row = `
                <tr>
                    <td>${student.id}</td>
                    <td>${student.name}</td>
                    <td>${student.age}</td>
                    <td>${student.grade}</td>
                    <td>
                        <button class="edit btn btn-warning" onclick="editStudent(${student.id})">Edit</button>
                        <button class="delete btn btn-danger" onclick="deleteStudent(${student.id})">Delete</button>
                    </td>
                </tr>
            `;
            studentList.innerHTML += row;
        });
    }
}

let manager = new StudentManager();

function addStudent(){
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let grade = document.getElementById("grade").value;
    manager.addStudent(name, age, grade);
}

function editStudent(id){
    let student = manager.students.find(s => s.id === id);
    if(student){
        let newName = prompt("Enter new name: ", student.name);
        let newAge = prompt("Enter new age: ", student.age);
        let newGrade = prompt("Enter new grade: ", student.grade);
        if(newName && newAge && newGrade){
            manager.updateStudent(id, newName, newAge, newGrade);
        }
    }
}

function deleteStudent(id){
    manager.deleteStudent(id);
}

function searchStudent(){
    let search = document.getElementById("search").value;
    manager.searchStudent(search);
}
