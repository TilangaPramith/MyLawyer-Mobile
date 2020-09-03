const Router = require('express');
const route = new Router();
const appointmentController = require('./controller');

route.get('/', appointmentController.list_all_appointment);
route.post('/new', appointmentController.create_an_appointment);
route.get('/current',appointmentController.list_current_appointment);
route.get('/old',appointmentController.list_old_appointment);
route.post('/delete', appointmentController.delete_appointment);

module.exports = route;
