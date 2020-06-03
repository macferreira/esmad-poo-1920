class Company {

    constructor() {
        this._employees = []
        this._departments = ['Informatics', 'Financial', 'Marketing']
    }

    hireEmployee(name, department, salary) {
        if (this._employees.some(employee => employee.name === name)) {
            throw Error('Name already exist!')
        } else if (!this._departments.includes(department)) {
            throw Error('Department do not exist!')
        } else {
            this._employees.push({ name, department, salary })
        }
    }

    getEmployeees() {
        return this._employees
    }
    
    increaseSalary(department, value) {
        if (this._departments.includes(department)) {
            this._employees = this._employees.map(employee =>
                employee.department === department ?
                    ({ name: employee.name, department: employee.department, salary: employee.salary + value }) : employee
            )
        } else {
            throw Error('Department do not exist!')
        }

    }

    getWeeklyExpenseEmployees() {
        return this._employees.reduce(
            (accumulator, employee) => accumulator + employee.salary * 40, 0
        );
    }
}


const myCompany = new Company()
try {
    myCompany.hireEmployee('Manuel Rocha', 'Informatics', 12)
    myCompany.hireEmployee('Maria Bastos', 'Financial', 20)
    myCompany.hireEmployee('Pedro Silva', 'Marketing', 10)
    myCompany.hireEmployee('Silvia Rocha', 'Informatics', 12)

    myCompany.increaseSalary('Informatics', 5)

    console.log(myCompany.getWeeklyExpenseEmployees());

} catch (error) {
    console.log(error);
}
