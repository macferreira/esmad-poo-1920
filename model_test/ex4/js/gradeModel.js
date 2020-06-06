export default class GradeModel {

    constructor() {
        this.grades = localStorage.grades ? JSON.parse(localStorage.grades) : []
    }

    getAll() {
        return this.grades
    }

    create(year, course, score) {
        this.grades.push({ year, course, score })
        this._persist()
    }

    remove(course) {
        this.grades = this.grades.filter(grade => grade.course != course)
        this._persist()
    }

    _persist() {
        localStorage.grades = JSON.stringify(this.grades)
    }
}
