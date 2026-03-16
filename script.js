// script.js

// Course Management System

// Function to add a course
function addCourse(courseName) {
    let courses = JSON.parse(localStorage.getItem('courses')) || [];
    courses.push(courseName);
    localStorage.setItem('courses', JSON.stringify(courses));
}

// Function to get all courses
function getCourses() {
    return JSON.parse(localStorage.getItem('courses')) || [];
}

// Function to add a student
function addStudent(studentName) {
    let students = JSON.parse(localStorage.getItem('students')) || [];
    students.push(studentName);
    localStorage.setItem('students', JSON.stringify(students));
}

// Function to get all students
function getStudents() {
    return JSON.parse(localStorage.getItem('students')) || [];
}

// Function to record a class attendance
function recordClass(course, student, date) {
    let records = JSON.parse(localStorage.getItem('classRecords')) || [];
    records.push({ course, student, date });
    localStorage.setItem('classRecords', JSON.stringify(records));
}

// Function to get all class records
function getClassRecords() {
    return JSON.parse(localStorage.getItem('classRecords')) || [];
}

// Example usage:
addCourse('Mathematics');
addStudent('John Doe');
recordClass('Mathematics', 'John Doe', '2026-03-16');

console.log(getCourses());
console.log(getStudents());
console.log(getClassRecords());
