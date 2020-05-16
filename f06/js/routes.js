import UserView from './views/UserView.js';
import CatalogView from './views/CatalogView.js';
import BandDetailView from './views/BandDetailView.js'

export default class Routes {
    constructor() {
        this.routes = {
            'index': [
                UserView,
                CatalogView
            ],
            'band': [
                BandDetailView
            ]
        }
    }

    getAll() {
        return this.routes;
    }

    getViews(route) {
        return typeof this.routes[route] === 'undefined' ? [] : this.routes[route];
    }
}
