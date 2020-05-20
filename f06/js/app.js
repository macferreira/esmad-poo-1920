import UserView from './views/UserView.js'
import CatalogView from './views/CatalogView.js'
import BandDetailView from './views/BandDetailView.js'
import BandAddView from './views/BandAddView.js'

class App {
    constructor() {
        this.routes = {
            '': [
                UserView,
                CatalogView
            ],
            'index': [
                UserView,
                CatalogView
            ],
            'band': [
                BandDetailView
            ],
            'addBand': [
                BandAddView
            ]
        };

        // import dummy data for testing purposes
        this._importDataFixtures();

        // instantiate the views mapped in the routes object
        this._instantiateViews();
    }

    _instantiateViews() {
        const path = window.location.pathname
        const file = path.substr(path.lastIndexOf('/') + 1);
        const route = file.split('.')[0];

        const views = this._getViews(route);

        for (const view of views) {
            new view();
        }
    }

    _getViews(route) {
        return typeof this.routes[route] === 'undefined' ? [] : this.routes[route];
    }

    _importDataFixtures() {
        const bands = [
            {
                id: 1,
                name: 'Muse',
                genre: 'Pop-Rock',
                photo: 'http://www.planckmachine.com/wp-content/uploads/2016/09/hysteria-muse-meaning-song.jpg',
                description: 'The best band ever',
                video: 'https://www.youtube.com/watch?v=AR6A3dap6MI'  
            },
            {
                id: 2,
                name: 'RadioHead',
                genre: 'Pop-Rock',
                photo: 'https://ep01.epimg.net/elpais/imagenes/2017/05/17/icon/1495017818_647155_1495125183_noticia_normal.jpg',
                description: 'The best band ever',
                video: 'https://www.youtube.com/watch?v=fHiGbolFFGw'
            },
            {
                id: 3,
                name: 'James',
                genre: 'Pop-Rock',
                photo: 'http://ksassets.timeincuk.net/wp/uploads/sites/55/2013/01/2012JamesBandPress181212-2.jpg',
                description: 'The best band ever',
                video: 'https://www.youtube.com/watch?v=BlucfrfxAUc'
            },
            {
                id: 4,
                name: 'Metallica',
                genre: 'Metal',
                photo: 'https://images.impresa.pt/blitz/2016-08-19-metallica.jpg/original/mw-860',
                description: 'The best band ever',
                video: 'https://www.youtube.com/watch?v=pZTJBViOoik' 
            }
        ];

        const users = [
            {
                id: 1,
                username: 'user',
                password: 'user'
            }
        ];

        // Load the fixtures in case there is no data in the local storage 
        if (!localStorage.bands) {
            localStorage.setItem('bands', JSON.stringify(bands));    
        }
        if (!localStorage.users) {
            localStorage.setItem('users', JSON.stringify(users));
        }
    }
}

new App();
