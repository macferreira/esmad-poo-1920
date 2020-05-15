import BandModel from '../models/BandModel.js'

export default class CatalogController {
    constructor() {
        this.bandModel = new BandModel();
    }

    getBands(filterName = '', filterGenre = '', sort = false) {
        if (sort) this.bandModel.sort();

        let bands = this.bandModel.getAll();
        
        if (filterName === '' && filterGenre === '') return bands;

        let filteredBands = [];

        for (const band of bands) {
            if (band.name.startsWith(filterName) || band.genre === filterGenre) {
                filteredBands.push(band);
            }    
        }

        return filteredBands;
    }

    setCurrentBand(id) {
        this.bandModel.setCurrentBand(id);
        location.href = 'html/band.html';
    }
}
