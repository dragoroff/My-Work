const handleCatRequest = require('../controllers/category');
const handleAppsRequest = require('../controllers/favApps');

const routes = app => {
    app.get('/get-categories', handleCatRequest.getCategories);
    app.post('/apps', handleAppsRequest.getFavApps);
};

module.exports = {
    routes,
}

