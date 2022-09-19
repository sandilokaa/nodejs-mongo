const usersRepository = require("../repositories/usersRepository");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { JWT } = require("../lib/conts");

const SALT_ROUND = 10;

class usersService {

    /* ------------------  Registration User ------------------ */ 

    static async handleRegisterUser({ name, email, password }){

        /* ------------------ Payload Validation ------------------ */

        if (!name){
            return{
                status: false,
                status_code: 400,
                message: "Name must be filled!",
                data: {
                    handleRegisterUser: null
                }
            }
        };

        if (!email){
            return{
                status: false,
                status_code: 400,
                message: "Email must be filled!",
                data: {
                    handleRegisterUser: null
                }
            }
        };

        if (!password){
            return{
                status: false,
                status_code: 400,
                message: "Password must be filled!",
                data: {
                    handleRegisterUser: null
                }
            }
        } else if (password.length < 8){
            return{
                status: false,
                status_code: 400,
                message: "Password minimum 8 characters!",
                data: {
                    handleRegisterUser: null
                }
            }
        };

        /* ------------------ End Payload Validation ------------------ */

        const getUserByEmail = await usersRepository.handleGetUserByEmail({ email });

        if (getUserByEmail){
            return{
                status: false,
                status_code: 400,
                message: "Email has been used ",
                data: {
                    handleRegisterUser: null
                }
            }
        } else {
            const hashedPassword = await bcrypt.hash(password, SALT_ROUND);

            const handleRegisterUser = await usersRepository.handleRegisterUser({
                name,
                email,
                password: hashedPassword
            });

            return{
                status: true,
                status_code: 201,
                message: "Successfully registered user",
                data: {
                    handleRegisterUser: handleRegisterUser
                }
            }
        }

    };

    /* ------------------  End Registration User ------------------ */ 


    /* ------------------  Login User ------------------ */ 

    static async handleLoginUser({ email, password }){
        
        /* ------------------ Payload Validation ------------------ */

        if (!email){
            return{
                status: false,
                status_code: 400,
                message: "Email must be filled!",
                data: {
                    handleRegisterUser: null
                }
            }
        };

        if (!password){
            return{
                status: false,
                status_code: 400,
                message: "Password must be filled!",
                data: {
                    handleRegisterUser: null
                }
            }
        } else if (password.length < 8){
            return{
                status: false,
                status_code: 400,
                message: "Password minimum 8 characters!",
                data: {
                    handleRegisterUser: null
                }
            }
        };

        /* ------------------ End Payload Validation ------------------ */

        const getUserByEmail = await usersRepository.handleGetUserByEmail({ email });

        if (!getUserByEmail){
            return{
                status: false,
                status_code: 400,
                message: "Email not registered!",
                data: {
                    handleLoginUser: null
                }
            }
        } else {

            const isPasswordMatch = await bcrypt.compare(password, getUserByEmail.password);

            if (isPasswordMatch){

                const token = jwt.sign({
                    id: getUserByEmail.id,
                    email: getUserByEmail.email
                },
                JWT.SECRET,{
                    expiresIn: JWT.EXPIRED,
                });

                return{
                    status: true,
                    status_code: 201,
                    message: "User successfully logged in!",
                    data: {
                        token
                    }
                };
            } else {
                return{
                    status: false,
                    status_code: 400,
                    message: "Username or Password is wrong!",
                    data: {
                        handleLoginUser: null
                    }
                };
            }
        }
    };

    /* ------------------  End Login User ------------------ */ 

};

module.exports = usersService;