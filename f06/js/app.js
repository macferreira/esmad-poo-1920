import UserView from './views/UserView.js'
import CatalogView from './views/CatalogView.js'
import BandDetailView from './views/BandDetailView.js'

class App {
    constructor() {
        this._instantiateViews()

        // To Be Removed: Temporarly adding dummy data
        if (!localStorage.bands) {
            let bands = [];
            const band1 = { id: 1, name: 'Muse', genre: 'Pop-Rock', photo: 'http://www.planckmachine.com/wp-content/uploads/2016/09/hysteria-muse-meaning-song.jpg', description: 'The best band ever', video: 'xxx' }
            const band2 = { id: 2, name: 'RadioHead', genre: 'Pop-Rock', photo: 'https://ep01.epimg.net/elpais/imagenes/2017/05/17/icon/1495017818_647155_1495125183_noticia_normal.jpg', description: 'The best band ever', video: 'xxx' }
            const band3 = { id: 3, name: 'James', genre: 'Pop-Rock', photo: 'http://ksassets.timeincuk.net/wp/uploads/sites/55/2013/01/2012JamesBandPress181212-2.jpg', decription: 'The best band ever', video: 'xxx' }
            const band4 = { id: 4, name: 'Metallica', genre: 'Metal', photo: 'https://images.impresa.pt/blitz/2016-08-19-metallica.jpg/original/mw-860', description: 'The best band ever', video: 'xxx' }
            bands.push(band1, band2, band3, band4);
            localStorage.setItem("bands", JSON.stringify(bands));
        }
    }

    _instantiateViews() {
        const path = window.location.pathname
        const file = path.substr(path.lastIndexOf('/') + 1);
        
        switch (file) {
            case 'index.html':
                new UserView();
                new CatalogView();
                break;
            case 'band.html':
                new BandDetailView();
                break;

            default:
                break;
        }
    }


}

new App(); 