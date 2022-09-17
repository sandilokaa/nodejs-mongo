const mongoose = require("mongoose");

const schema = mongoose.Schema(
    {
        name: 'String',
        email: 'String',
        password: 'String'
    },
    {
        timestamps: true
    }
);

const Auth = mongoose.model('Auth', schema);

module.exports = Auth;