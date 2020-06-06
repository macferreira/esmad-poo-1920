import GradeController from './gradeController.js'

export default class GradeView {
    constructor() {
        this.gradeController = new GradeController()

        this.frmAddGrade = document.querySelector('#frmAddGrade')
        this.txtGrade = document.querySelector('#txtGrade')
        this.pMessage = document.querySelector('#pMessage')
        this.pCatalog = document.querySelector('#pCatalog')
        this.pStatistics = document.querySelector('#pStatistics')
        this.btnStatistics = document.querySelector('#btnStatistics')
        this.dlgStatistics = document.querySelector('#dlgStatistics')

        this.renderCatalog(this.gradeController.getGrades())
        this.bindAddGradeForm()
        this.bindStatisticsEvent()
        this.bindRemoveEvent()
    }

    bindAddGradeForm() {
        this.frmAddGrade.addEventListener('submit', event => {
            event.preventDefault();
            try {
                const entities = this.txtGrade.value.split('#') //year#course#score
                if (entities.length !== 3) {
                    throw Error('Formato não suportado!')
                }
                this.gradeController.addGrade(entities[0], entities[1], entities[2])
                this.displayMessage('Nota registada com sucesso!')
                this.renderCatalog(this.gradeController.getGrades())

            } catch (error) {
                this.displayMessage(error)
            }
        })
    }

    bindRemoveEvent() {
        for (const btnRemove of document.getElementsByClassName('remove')) {
            btnRemove.addEventListener('click', event => {
                this.gradeController.removeGrade(event.target.id)
                this.renderCatalog(this.gradeController.getGrades())
            })
        }
    }

    bindStatisticsEvent() {
        this.btnStatistics.addEventListener('click', event => {
            // Atualizar as estatísticas por ano e global
            let resultStatistics = ''
            for (let i = 1; i <= 3; i++) {
                resultStatistics += `
                Média do ${i}ºano: ${this.gradeController.getAverageGradeYear(i).toFixed(2)}<br>
            `
            }
            resultStatistics += `Média global: ${this.gradeController.getAverageGrades().toFixed(2)}`
            this.pStatistics.innerHTML = resultStatistics
            this.dlgStatistics.showModal()
        })
    }


    renderCatalog(grades = []) {
        let result = ''
        if (grades.length != 0) {
            result = `
                <table><tr><th>ANO</th><th>DISCIPLINA</th><th>NOTA</th><th>AÇÕES</th></tr>
            `
        } else {
            result = `<p>sem notas registadas!</p>`
        }

        for (const grade of grades) {
            if (grade.score < 10) {
                result += `<tr style='background-color: red'>`
            } else {
                result += `<tr>`
            }
            result += `                
                    <td>${grade.year}</td>
                    <td>${grade.course}</td>
                    <td>${grade.score}</td>
                    <td><button id='${grade.course}' class='remove'>REMOVE</button></td>
                </tr>
            `
        }
        result += `</table>`
        this.pCatalog.innerHTML = result
        this.bindRemoveEvent()
    }

    displayMessage(message) {
        this.pMessage.innerHTML = `${message}`
    }
}

new GradeView()
