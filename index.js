let students = [
    { name: "Rajesh", roll: 1, marks: 85 },
    { name: "Kishore", roll: 2, marks: 78 },
];

console.log("Total students:", students.length); 

students.push({ name: "Kiran", roll: 3, marks: 75});

console.log("Student Names:");
students.forEach(student => {
    console.log(student.name);
});

let removedStudent = students.pop();
console.log("Removed student:", removedStudent.name);


