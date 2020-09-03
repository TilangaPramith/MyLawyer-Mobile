const bodyParser = require('body-parser');
const morgan = require('morgan');

export default app => {
    app.use(bodyParser.json());
    app.use(bodyParser({extended: false}));
    app.use(morgan('dev'));
}