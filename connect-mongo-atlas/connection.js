const mongoose = require("mongoose");
require('dotenv').config();

const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};

const uri = `mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@ac-lpthsvt-shard-00-00.8dl27mt.mongodb.net:27017,ac-lpthsvt-shard-00-01.8dl27mt.mongodb.net:27017,ac-lpthsvt-shard-00-02.8dl27mt.mongodb.net:27017/mongoPractice?ssl=true&replicaSet=atlas-e8i0st-shard-0&authSource=admin&retryWrites=true&w=majority`;

const mongooseConnect = mongoose.connect(
    uri, 
    connectionParams
    ).then(() => {
        console.log("Connected to cloud!");
    }).catch((err) => {
        console.log(err);
});

module.exports = mongooseConnect;
