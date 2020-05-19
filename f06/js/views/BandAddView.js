import BandController from '../controllers/BandController.js'

export default class BandAddView {
    constructor(){
        this.bandController = new BandController();

        // add band DOM
        this.addBandForm = document.getElementById('frmAddBand');
        this.bandName = document.getElementById('txtName');
        this.bandGenre = document.getElementById('sltGenre');
        this.bandPhoto = document.getElementById('txtPhoto');
        this.bandDescription = document.getElementById('txtDescription');
        this.bandVideo = document.getElementById('txtVideo');
        this.addBandMessage = document.getElementById('addBandMessage');

        this.bindAddAddBandForm();
    }

    bindAddAddBandForm() {
        this.addBandForm.addEventListener('submit', event => {
            event.preventDefault();

            try {
                this.bandController.addBand(
                    this.bandName.value,
                    this.bandGenre.value,
                    this.bandPhoto.value,
                    this.bandDescription.value,
                    this.bandVideo.value
                );
                this.displayAddBandMessage('Band added with success!', 'success');

                // Wait 1 second before sending to catalog, so the user can see the login success message
                setTimeout(() => {
                    location.href="../index.html";
                },
                1000);
            } catch(e) {
                this.displayAddBandMessage(e, 'danger');
            }
        });
    }

    displayAddBandMessage(message, type) {
        this.addBandMessage.innerHTML =
            `<div class="alert alert-${type}" role="alert">${message}</div>`;
    }
}