const Router = require('express');
const route = new Router();
const deedController = require('./controller');

route.get('/', deedController.list_all_deed);
route.post('/new', deedController.create_a_deed);
route.get('/current', deedController.list_current_deed);
route.get('/old', deedController.list_old_deed);
route.post('/delete', deedController.delete_deed);

module.exports = route;
