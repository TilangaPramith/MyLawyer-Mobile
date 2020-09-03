const Router = require('express');
const route = new Router();
const caseController = require('./controller');

route.get('/', caseController.list_all_case);
route.post('/new', caseController.create_a_case);
route.get('/current', caseController.list_current_case);
route.get('/old', caseController.list_old_case);
route.post('/delete', caseController.delete_case);

module.exports = route;
