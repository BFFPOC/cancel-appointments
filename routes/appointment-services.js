
const { cancelAppt, getServ } = require('../services/cancel-appt'),
    axions = require('axios');

exports.deleteAppt = function (req, res) {
    let path = 'cancel';
    axions.put(
        "https://appointmentserviceapp-1591774967422.azurewebsites.net/cancel", {
            "id": 333301,
            "memberId": 222203,
            "token": "D6-0416658628C8"
        }
    ).then(
        function (response) {
            console.log(response);
        }
    )
    //console.log(cancelAppt(path)+"asdsa");
    //apptServices.cancelAppt(path);
    //res.send(JSON.stringify(cancelAppt(path)));
    //res.send('test');
}

exports.callServ = function (req, res) {
    let path = 'api/users/2';
    console.log(getServ(path) + "asdsa");
    //apptServices.cancelAppt(path);
    res.send(JSON.stringify(getServ(path)));
    //res.send('test');
}
