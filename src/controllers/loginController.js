const axios = require("axios");

module.exports = {

    login(req, res) {
        
        const { loginId, password } = req.body;
        const url = "https://auth.leadszapp.com/api/login";
        const Authorization = "S_B0arEKEd0mK3ymyeYc2w3U73z1VxmmALH_CNeWAKU";

        axios.post(url, {
            loginId,
            password
        }, {
            headers: {
                "Content-Type": "application/json",
                Authorization
            }
        })
        .then(response => {
            res.status(200).json(response.data.token).end();
        })
        .catch(err => {
            console.log(err);
        });

    }
}