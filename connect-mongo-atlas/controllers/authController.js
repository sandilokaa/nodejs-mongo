const authService = require("../services/authService");

/* ------------------  Registration User ------------------ */ 

const handleRegisterUser = async (req, res) => {

    const { name, email, password } = req.body;

    const { status, status_code, message, data } = await authService.handleRegisterUser({ 
        name,
        email,
        password
    });

    res.status(status_code).send({
        status: status,
        message: message,
        data: data
    });

}

/* ------------------  End Registration User ------------------ */ 

module.exports = { handleRegisterUser };