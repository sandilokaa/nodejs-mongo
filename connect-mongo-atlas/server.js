const express = require("express");
const mongoose = require("mongoose");

const PORT = 2000;
const app = express();
app.use(express.json());

mongoose.connect(
    "mongodb://sanlokngab:sanlokngab123@ac-lpthsvt-shard-00-00.8dl27mt.mongodb.net:27017,ac-lpthsvt-shard-00-01.8dl27mt.mongodb.net:27017,ac-lpthsvt-shard-00-02.8dl27mt.mongodb.net:27017/mongoPractice?ssl=true&replicaSet=atlas-e8i0st-shard-0&authSource=admin&retryWrites=true&w=majority",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
).then(() => {
    console.log("Connected");
}).catch((err) => {
    console.log(err);
});

app.listen(PORT, () => {
    console.log(`Server berhasil berjalan di port http://localhost:${PORT}`);
});