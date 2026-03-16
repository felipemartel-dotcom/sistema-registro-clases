// app.js

// Course management
const courses = JSON.parse(localStorage.getItem('courses')) || [];

function addCourse(course) {
    courses.push(course);
    localStorage.setItem('courses', JSON.stringify(courses));
}

function getCourses() {
    return courses;
}

// Student management
const students = JSON.parse(localStorage.getItem('students')) || [];

function addStudent(student) {
    students.push(student);
    localStorage.setItem('students', JSON.stringify(students));
}

function getStudents() {
    return students;
}

// Class record management
const classRecords = JSON.parse(localStorage.getItem('classRecords')) || [];

function addClassRecord(record) {
    classRecords.push(record);
    localStorage.setItem('classRecords', JSON.stringify(classRecords));
}

function getClassRecords() {
    return classRecords;
}

// Example usage
addCourse({ id: 1, name: 'Mathematics' });
addStudent({ id: 1, name: 'John Doe' });
addClassRecord({ courseId: 1, studentId: 1, date: '2026-03-16' });
console.log(getCourses(), getStudents(), getClassRecords());
