const student = {
    name: 'David Silva',
    course: 'POO',
    grade: 12
}


// b)
function listObjectNames() {
    for (const key in student) {
        console.log(key);
    }
}

listObjectNames();


// c)
function removePropGrade() {
    delete student.grade
}

console.table(student);
removePropGrade();
console.table(student);


// d) 
function calcObjectSize() {
    let count = 0;
    for (const key in student) {
        count++
    }
    console.log(count)
}

calcObjectSize()
