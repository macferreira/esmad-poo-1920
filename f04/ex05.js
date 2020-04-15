const salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

let sum = 0
for (const key in salaries) {
    sum += salaries[key]
}

console.log(sum)
