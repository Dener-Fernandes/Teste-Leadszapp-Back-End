const axios = require("axios");

module.exports = {

    login(req, res) {
        
        const { loginId, password } = req.body;
        const url = "https://auth.leadszapp.com/api/login";
        const Authorization = "S_B0arEKEd0mK3ymyeYc2w3U73z1VxmmALH_CNeWAKU";

        req.assert("loginId", "0").notEmpty();
        req.assert("loginId", "1").isEmail();
        req.assert("password", "2").notEmpty();
        let errors = req.validationErrors();
        let validate = [];

        for (let i = 0; i < errors.length; i++) {
            validate[errors[i].msg] = errors[i].msg;
        }
        if (errors) {
            res.json(validate);
            return;
        }

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
            if (response.data.token) {
                res.status(200).json("Successful");
            }
        })
        .catch(err => {
            res.status(400).json("3");
        });

    }
}