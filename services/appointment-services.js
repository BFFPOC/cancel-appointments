
const axions = require('axios');

exports.cancelAppt = function (req, res) {
    let path = 'cancel';
    if((req.get('X-correlationid') || req.headers.authorization) == null) {
        res.status(400).send('invalid data input');
        return;
    }
    axions.put(
        "https://appointmentserviceapp-1591774967422.azurewebsites.net/cancel", {
            id: req.body.id, //"333303", //"333301",
            memberId: req.body.memberId, //"222205", //"222204", //
            token: req.body.authorization //"8B-C98B12602557" // "83-1CAEDAA9C34A"
        },
        {
            headers: {
                "Content-type": "application/json",
                "X-correlationid": req.get('X-correlationid')
            }
        }
    ).then(function(response) {
        //console.log(response.data);
        res.send(response.data);
    }).catch(err => {
        //console.log(err.response);
        if(!err.response) {
            res.send("Server is busy! Retry after Sometime.");
            return;
        }
        res.send(err.response && err.response.data);
    })
};
