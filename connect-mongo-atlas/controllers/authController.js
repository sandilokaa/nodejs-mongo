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


/* ------------------  Login User ------------------ */ 

const handleLoginUser = async (req, res) => {

    const { email, password } = req.body;

    const { status, status_code, message, data } = await authService.handleLoginUser({
        email,
        password
    });

    res.status(status_code).send({
        status: status,
        message: message,
        data: data
    });
}

/* ------------------  End Login User ------------------ */ 

module.exports = { handleRegisterUser, handleLoginUser };