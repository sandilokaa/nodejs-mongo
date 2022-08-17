const express = require("express");
const mongooseConnect = require("./connection");

const PORT = 2000;
const app = express();
app.use(express.json());


/* --- Import Model --- */

const postModel = require('./postModel');

/* --- End Import Model --- */


/* --- Define API --- */

app.post('/v1/create', async(req, res) => {

    const {title, content} = req.body;

    try{
        const newPost = await postModel.create({title, content});
        res.json(newPost);
    } catch (err){
        res.status(500).send(err);
    };
    
});

/* --- End Define API --- */

app.listen(PORT, () => {
    console.log(`Server berhasil berjalan di port http://localhost:${PORT}`);
});