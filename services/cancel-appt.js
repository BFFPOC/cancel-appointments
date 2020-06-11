const { azureAPi, clientApi } = require('./service');

exports.cancelAppt = function (path) {
    azureAPi.put(path)
        .then(response => {
            console.log(response);
            return response;
        }).catch(err => {
            console.log(err);
        }).finally(function () {
            return 5;
        });
}

exports.getServ = function (path) {
    clientApi.get(path)
        .then(response => {
            console.log(response.data.data.id);
            return response;
        }).catch(err => {
            console.log(err);
        }).finally(function () {
            return 5;
        });
}