const app = require('express')(),
    apptServices = require('./services/appointment-services'),
    bodyParser = require('body-parser'),
    port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.put('/cancel', apptServices.cancelAppt);

app.listen(port, function (req, res) {
    console.log(`Running on port ${port}`);
});
