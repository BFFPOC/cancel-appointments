const axios = require('axios');

exports.clientApi = axios.create({
    baseURL: "https://reqres.in/",
    method: 'get'
});

exports.azureAPi = axios.create({
    baseURL: "https://appointmentserviceapp-1591774967422.azurewebsites.net",
    method: 'put',
    data: {
        id: 333301,
        memberId: 222203,
        token: "D6-0416658628C8"
    }
})