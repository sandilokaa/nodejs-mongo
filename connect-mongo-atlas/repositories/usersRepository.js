const authModel = require("../helper/authModel");

class usersRepository{


    /* ------------------  Get User By Email ------------------ */
    
    static async handleGetUserByEmail({ email }){

        const getUserByEmail = await authModel.findOne({
            where: {
                email: email
            }
        });

        return getUserByEmail;
    };
    
    /* ------------------  End Get User By Email ------------------ */ 


    /* ------------------  Registration User ------------------ */
    
    static async handleRegisterUser({ name, email, password }){
        
        const handleRegisterUser = await authModel.create({
            name,
            email,
            password
        });

        return handleRegisterUser;
    }
    
    /* ------------------  End Registration User ------------------ */ 

};

module.exports = usersRepository;

