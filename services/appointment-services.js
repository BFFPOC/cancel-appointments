
const axions = require('axios');

exports.cancelAppt = function (req, res) {
    let path = 'cancel';
    if((req.get('X-correlationid') || req.headers.authorization) == null) {
        res.status(400).send('invalid data input');
        return;
    }
    axions.put(
        "https://appointmentserviceapp-1591774967422.azurewebsites.net/cancel", {
            id: req.body.id,
            memberId: req.body.memberId,
            token: req.headers.authorization
        },
        {
            headers: {
                "Content-type": "application/json",
                "X-correlationid": req.get('X-correlationid')
            }
        }
    ).then(function(response) {
        res.send(response.data);
    }).catch(err => {
        if(!err.response) {
            res.send("Server is busy! Retry after Sometime.");
            return;
        }
        res.send(err.response && err.response.data);
    })
};
