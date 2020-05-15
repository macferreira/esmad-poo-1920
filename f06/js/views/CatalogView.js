import CatalogController from '../controllers/CatalogController.js'

export default class CatalogView {
    constructor() {
        this.catalogController = new CatalogController();

        // catalog DOM
        this.catalog = document.getElementById('myCatalog');
        this.filterButton = document.getElementById('btnFilter');
        this.filterNameInput = document.getElementById('txtBand');
        this.filterGenreInput = document.getElementById('sltGenre');
        this.sortButton = document.getElementById('btnSort');

        this.bindAddFilterEvent();
        this.bindAddSortEvent();

        // Filters
        this.filterName = '';
        this.filterGenre = '';

        // Render the catalog
        this.renderCatalog(this.catalogController.getBands(this.filterName, this.filterGenre));

        // 'See more' buttons in the catalog
        this.buttonsSeeMore = document.getElementsByClassName('view');
        this.bindAddSeeMoreEvents();
    }

    bindAddFilterEvent() {
        this.filterButton.addEventListener('click', event => {
            this.filterName = this.filterNameInput.value;
            this.filterGenre = this.filterGenreInput.value;
            this.renderCatalog(this.catalogController.getBands(this.filterName, this.filterGenre));
        });
    }

    bindAddSortEvent() {
        this.sortButton.addEventListener('click', event => {
            this.renderCatalog(this.catalogController.getBands(this.filterName, this.filterGenre, true));
        });
    }

    bindAddSeeMoreEvents() {
        const catalogController = this.catalogController;
        for (const elem of this.buttonsSeeMore) {
            elem.addEventListener('click', function () {
                catalogController.setCurrentBand(this.id);
            })    
        }  
    }

    renderCatalog(bands = []) {

        console.log(bands);
        let userIsLogged = false;
        let result = '';
        let i = 0;        
        for (const band of bands) {
            // Start catalog line
            if (i % 3 === 0) result += '<div class="row">';
            
            // Band Card
            result += this._genCatalogBandCard(band.id, band.name, band.genre, band.photo, userIsLogged);
            i++

            // End catalog line
            if (i % 3 === 0) result += '</div>';
        }
        
        this.catalog.innerHTML = result;
    }

    _genCatalogBandCard(id, name, genre, photo, userIsLogged) {
        let html = `
            <div class="col-sm-4">
                <div class="card">
                    <img src="${photo}" class="card-img-top">
                    <div class="card-body">
                    <h5 class="card-title">${name}</h5>
                    <p class="card-text">${genre}</p>
                    <button id="${id}" class="btn btn-primary view">See more</button>     
        `;

        if (userIsLogged) {
            html += `<button id="${name}" class="btn btn-danger remove">Remove</button>`;
        }

        html += `</div></div></div>`;

        return html;
    }
}
