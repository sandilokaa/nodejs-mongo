const express = require("express");
const mongooseConnect = require("./helper/connection");

const PORT = 2000;
const app = express();
app.use(express.json());


/* ------------------ Import Model ------------------ */

const postModel = require('./helper/postModel');

/* ------------------ End Import Model ------------------ */


/* ------------------ Import Controllers ------------------ */

const postsController = require("./controllers/postsController");
const authController = require("./controllers/authController");

/* ------------------ End Import Controllers ------------------ */


/* ------------------ Define API ------------------ */

/* ------------------------------------ USER ------------------------------------ */

/* ------------------ Create User ------------------ */



/* ------------------ End Create User ------------------ */

/* ------------------------------------ END USER ------------------------------------ */


/* ------------------------------------ POST ------------------------------------ */

/* ------------------ Create Post ------------------ */

app.post('/v1/create', postsController.handleCreatePost);

/* ------------------ End Create Post ------------------ */


/* ------------------ Get Post ------------------ */

app.get('/v1/posts', postsController.handleGetPosts);

/* ------------------ End Get Post ------------------ */


/* ------------------ Get Post By Id ------------------ */

app.get('/v1/posts/:id', postsController.handleGetPostsById);

/* ------------------ End Get Post By Id ------------------ */

// /* ------------------ Get Post By Id ------------------ */

// app.get("/v1/posts/:id", async(req, res) => {
    
//     const { id } = req.params;
    
//     try{

//         const getPostById = await postModel.findById(id);
//         res.json(getPostById);

//     } catch (err) {
//         res.status(500).send(err);
//     }
// });

// /* ------------------ End Get Post By Id ------------------ */


// /* ------------------ Update Post By Id ------------------ */

// app.put("/v1/posts/update/:id", async(req, res) =>{
    
//     const { id } = req.params;
//     const { title, content } = req.body;
    
//     try{

//         const updateById = await postModel.findByIdAndUpdate(id, { title, content });
//         res.json(updateById);

//     } catch (err) {
//         res.status(500).send(err);
//     }
// });

// /* ------------------ End Update Post By Id ------------------ */


// /* ------------------ Delete Post By Id ------------------ */

// app.delete("/v1/posts/delete/:id", async(req, res) =>{
    
//     const { id } = req.params;
    
//     try{

//         const deleteById = await postModel.findByIdAndDelete(id);
//         res.json('Delete success!');

//     } catch (err) {
//         res.status(500).send(err);
//     }
// });

// /* ------------------ End Delete Post By Id ------------------ */

/* ------------------ End Define API ------------------ */

app.listen(PORT, () => {
    console.log(`Server berhasil berjalan di port http://localhost:${PORT}`);
});