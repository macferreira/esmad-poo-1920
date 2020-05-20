import BandController from '../controllers/BandController.js'
import UserController from '../controllers/UserController.js'

export default class BandView {

    constructor() {
        this.bandController = new BandController()
        this.userController = new UserController()
        
        // Catalog
        this.catalog = document.querySelector("#myCatalog")
        this.btnFilter = document.querySelector("#btnFilter")
        this.btnSort = document.querySelector("#btnSort")
        this.btnAdd = document.querySelector("#btnAdd")
        this.txtBand = document.querySelector("#txtBand")
        this.sltGenre = document.querySelector("#sltGenre")

        this.renderCatalog(this.bandController.getBands())
        this.bindAddFilterEvent()
        this.bindAddSortEvent()
        this.bindAddAddEvent()
    }

    bindAddFilterEvent() {
        this.btnFilter.addEventListener('click', () => {            
            this.renderCatalog(this.bandController.getBands(this.txtBand.value, this.sltGenre.value))
        })
    }

    bindAddSortEvent() {
        this.btnSort.addEventListener('click', () => {
            this.renderCatalog(this.bandController.getBands(this.txtBand.value, this.sltGenre.value, true))
        })
    }

    bindAddAddEvent() {
        this.btnAdd.addEventListener('click', () => {
            location.href='html/addBand.html';
        })
    }

    bindAddRemoveEvent() {
        for (const btnRemove of document.getElementsByClassName("remove")) {
            btnRemove.addEventListener('click', event => {
                this.bandController.removeBand(event.target.id)
                this.renderCatalog(this.bandController.getBands(this.txtBand.value, this.sltGenre.value))
            })
        }
    }

    bindAddSeeMoreEvent() {
        for (const btnSee of document.getElementsByClassName("see")) {
            btnSee.addEventListener('click', event => {
                this.bandController.setCurrentBand(event.target.id)  
                location.href='html/band.html';
            })
        }
    }

    renderCatalog(bands = []) {
        let result = ''
        let i=0
        for (const band of bands) {
            if(i % 3 === 0) { result+=`<div class="row">` }
            result += this._generateBandCard(band)
            i++
            if(i % 3 ===0) {result+=`</div>`}            
        }

        this.catalog.innerHTML = result
        this._renderAddBandButton(this.userController.checkLoginStatus());

        this.bindAddRemoveEvent()
        this.bindAddSeeMoreEvent()
    }

    _generateBandCard(band) {
        let html = `
        <div class="col-sm-4">
            <div class="card">
                <img class="card-img-top" src="${band.photo}" alt="">
                <div class="card-body">
                    <h4 class="card-title">${band.name}</h4>
                    <p class="card-text">${band.genre}</p>
                    <button id="${band.id}" class="btn btn-primary see">See more</button>
            `
            if(this.userController.checkLoginStatus()) {
                html+= `<button id="${band.name}" class="btn btn-danger remove">Remove</button>`
            }
                
            html+= `
                </div>
            </div>
        </div>        
        `
        return html
    }

    _renderAddBandButton(userIsLogged) {
        if(userIsLogged) {
            this.btnAdd.style.visibility = 'visible';
        } else {
            this.btnAdd.style.visibility = 'hidden';
        }
    }
}
