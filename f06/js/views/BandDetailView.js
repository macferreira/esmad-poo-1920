import BandController from '../controllers/BandController.js'

export default class BandDetailView {

    constructor() {
        this.bandController = new BandController()
        this.bindBackButton()
    }

    bindBackButton() {
        document.querySelector("#btnBack").addEventListener('click', () => {
            location.href="../index.html"
        })
    }

    fillBandData() {
        const currentBand = this.bandController.getCurrentBand()
        document.querySelector('#bandName').innerHTML = currentBand.name
        document.querySelector('#bandGenre').innerHTML = currentBand.genre
        document.querySelector('#bandDescription').innerHTML = currentBand.description
        document.querySelector('#bandPhoto').src = currentBand.photo
    } 

}

const b = new BandDetailView()
b.fillBandData()