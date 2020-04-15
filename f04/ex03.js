const grades = [
    {
        name: 'Rui',
        grade: 8
    },
    {
        name: 'Ana',
        grade: 12
    },
    {
        name: 'Carla',
        grade: 14
    }
]

// b)
function addNewObject() {
    const name = prompt('Nome:');
    const grade = +prompt('Nota:');

    const newObj = {
        name: name,
        grade: grade
    }
    // alternativa: const newObj = {name, grade}

    grades[grades.length] = newObj
    //alternativa: grades.push(newObj)


    console.table(grades)

}

addNewObject();

// c)
function calcGradesAverage() {
    let sum = 0
    for (const obj of grades) {
        sum += obj.grade
    }

    console.log(sum / grades.length)
}

calcGradesAverage();

// d)
function showNamesPositiveGrades() {
    let names = ''
    for (const obj of grades) {
        if (obj.grade >= 10) {
            names += obj.name + '\n'
        }
    }
    console.log(names)
}

showNamesPositiveGrades();
