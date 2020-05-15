import BandModel from '../models/BandModel.js'

export default class BandController {
    constructor() {
        this.bandModel = new BandModel()
    }

    removeBand(name) {
        this.bandModel.remove(name)
    }

    setCurrentBand(id) {
        this.bandModel.setCurrentBand(id)
    }

    getCurrentBand() {
        return this.bandModel.getCurrentBand()
    }


    getBands(filterName='', filterGenre='', isSorted=false) {

        if (isSorted) {
            this.bandModel.sort()
        }

        const bands = this.bandModel.getAll()
        
        if (filterName==='' && filterGenre==='') {
            return bands
        }

        let filteredBands = []

        for (const band of bands) {
            let filterBandName = false, filterBandGenre = false

            if((band.name.includes(filterName) && filterName!='') || filterName==='') {
                filterBandName = true
            }

            if((band.genre===filterGenre && filterGenre!='') || filterGenre==='') {
                filterBandGenre = true
            }

            // Alimentar filteredBands
            if(filterBandName && filterBandGenre) {
                filteredBands.push(band)
            }
        }

        return filteredBands
    }
}