const express = require("express");
const mongooseConnect = require("./helper/connection");

const PORT = 2000;
const app = express();
app.use(express.json());


/* ================================= Import Middlewares ================================= */

const middlewares = require("./middlewares/auth");

/* ================================= End Import Middlewares ================================= */


/* ================================= Import Controllers ================================= */

const postsController = require("./controllers/postsController");
const authController = require("./controllers/authController");

/* ================================= End Import Controllers ================================= */


/* ================================= Define API ================================= */


/* ------------------------- USER ------------------------- */

app.post('/v1/register', authController.handleRegisterUser);
app.post('/v1/login', authController.handleLoginUser);


/* ------------------------- END USER ------------------------- */


/* ------------------------- POST ------------------------- */

app.get('/v1/posts', postsController.handleGetPosts);
app.get('/v1/posts/:id', postsController.handleGetPostsById);
app.post('/v1/posts/create', middlewares.authenticate, postsController.handleCreatePost);
app.put('/v1/posts/update/:id', middlewares.authenticate ,postsController.handleUpdatePostById);


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