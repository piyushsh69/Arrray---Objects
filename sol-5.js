const student = {
    name: 'Alice',
    age: 22,
    major: 'Computer Science',
    GPA: 3.8,
    isEnrolled: true,
};

const displayStudentInfo = (student) => {
    for (x in student) {
        console.log(`Property: ${x}, Value: ${student[x]}`)
    }
}

displayStudentInfo(student);