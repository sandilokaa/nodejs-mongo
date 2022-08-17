const express = require("express");
const mongooseConnect = require("./connection");

const PORT = 2000;
const app = express();
app.use(express.json());


/* ------------------ Import Model ------------------ */

const postModel = require('./postModel');

/* ------------------ End Import Model ------------------ */


/* ------------------ Define API ------------------ */


/* --- Create Post --- */

app.post('/v1/create', async(req, res) => {

    const {title, content} = req.body;

    try{

        const newPost = await postModel.create({title, content});
        res.json(newPost);

    } catch (err){
        res.status(500).send(err);
    };
    
});

/* --- End Create Post --- */


/* --- Get Post --- */

app.get("/v1/posts", async(req, res) => {
    try{

        const getPosts = await postModel.find();
        res.json(getPosts);

    } catch (err) {
        res.status(500).send(err);
    }
});

/* --- End Get Post --- */

/* --- Get Post By Id --- */

app.get("/v1/posts/:id", async(req, res) => {
    
    const { id } = req.params;
    
    try{

        const getPostById = await postModel.findById(id);
        res.json(getPostById);

    } catch (err) {
        res.status(500).send(err);
    }
});

/* --- End Get Post By Id --- */


/* --- Update Post By Id --- */

app.put("/v1/posts/update/:id", async(req, res) =>{
    
    const { id } = req.params;
    const { title, content } = req.body;
    
    try{

        const updateById = await postModel.findByIdAndUpdate(id, { title, content });
        res.json(updateById);

    } catch (err) {
        res.status(500).send(err);
    }
});

/* --- End Update Post By Id --- */


/* --- Delete Post By Id --- */

app.delete("/v1/posts/delete/:id", async(req, res) =>{
    
    const { id } = req.params;
    
    try{

        const deleteById = await postModel.findByIdAndDelete(id);
        res.json('Delete success!');

    } catch (err) {
        res.status(500).send(err);
    }
});

/* --- End Delete Post By Id --- */

/* ------------------ End Define API ------------------ */

app.listen(PORT, () => {
    console.log(`Server berhasil berjalan di port http://localhost:${PORT}`);
});