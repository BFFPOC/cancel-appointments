const app = require('express')(),
    apptServices = require('./routes/appointment-services'),
    port = 3000;

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.put('/delete', apptServices.deleteAppt);
app.get('/getthis', apptServices.callServ);

app.listen(port, function (req, res) {
    console.log(`Hello I am on running on port ${port}`);
});