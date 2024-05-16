let students = [
    {
        id: 1, firstName: 'John', lastName: 'Doe', age: 20, grade: 'A'
    },
    {
        id: 2, firstName: 'Jane', lastName: 'Smith', age: 22, grade: 'B'
    },
    {
        id: 3, firstName: 'Bob', lastName: 'Johnson', age: 19, grade: 'A'
    },
];

// Sol - A 
const jack = {
    id: 4, firstName: 'Jack', lastName: 'Will', age: 20, grade: 'A'
};
const addStudent = (studentData) => {
    students.push(studentData);
};
addStudent(jack);
console.log('Jack added', students);

// Sol - B
const johnUpdate = {
    id: 1,
    age: 21
}
const updateStudent = (studentDataUpdated) => {
    const id = studentDataUpdated.id;
    let updatedStudents = students.map(student => {
        if (student.id == id) {
            student = {...student, ...studentDataUpdated}
        }
        return student;
    });
    students = updatedStudents;
}
updateStudent(johnUpdate);
console.log('John updated', students);

// Sol - C
const toDeleteId = 3;
const deleteStudent = (studentId) => {
    students = students.filter(student => student.id !== studentId);
}
deleteStudent(toDeleteId);
console.log('Bob deleted', students)

// Sol - D
const listStudents = () => {
    console.log('List of students -');
    students.map(student => {
        console.log(
            `ID: ${student.id}, First Name: ${student.firstName}, Last Name: ${student.lastName}, Age: ${student.age}, Grade: ${student.grade}`
        );
    })
}
listStudents();

// Sol - E
const gradeToFind = 'A';
const findByGrade = (studentGrade) => {
    let foundStudents = students.filter(student => student.grade == studentGrade);
    return foundStudents;
}
const foundStudents = findByGrade(gradeToFind);
console.log('Students with A grade', students)

// Sol - F
const averageAgeCalculator = () => {
    let averageAge = 0;
    students.map(student => {
        averageAge += student.age;
    })
    return averageAge / students.length;
}
const averageAge = averageAgeCalculator();
console.log('Average age of students is', averageAge);