import GradeModel from './gradeModel.js'

export default class GradeController {

    constructor() {
        this.gradeModel = new GradeModel()
    }

    addGrade(year, course, score) {
        if (!this.gradeModel.getAll().some(grade => grade.course === course)) {
            this.gradeModel.create(year, course, score)
        } else {
            throw Error('Disciplina já tem uma nota associada!')
        }
    }

    getGrades() {
        return this.gradeModel.getAll()
    }

    removeGrade(course) {
        this.gradeModel.remove(course)
    }

    getAverageGrades() {
        let sum = 0
        const grades = this.gradeModel.getAll()
        for (const grade of grades) {
            sum += +grade.score
        }
        return sum / grades.length
    }

    getAverageGradeYear(year) {
        let sum = 0, countGradesYear = 0
        const grades = this.gradeModel.getAll()
        for (const grade of grades) {
            if (grade.year == year) {
                sum += +grade.score
                countGradesYear++
            }
        }
        return sum / countGradesYear
    }
}
