const postsService = require("../services/postsService");


/* ------------------  Create Post ------------------ */

const handleCreatePost = async(req, res) => {

    const { title, content }= req.body;

    const user_id = req.user.id;

    const { status, status_code, message, data } = await postsService.handleCreatePost({
        user_id,
        title,
        content
    });

    res.status(status_code).send({
        status: status,
        message: message,
        data: data
    });

}

/* ------------------ End Create Post ------------------ */


/* ------------------ Get Post ------------------ */

const handleGetPosts = async(req, res) => {

    const { status, status_code, message, data } = await postsService.handleGetPosts();

    res.status(status_code).send({
        status: status,
        message: message,
        data: data
    });
}

/* ------------------ End Get Post ------------------ */


/* ------------------ Get Post By Id ------------------ */

const handleGetPostsById = async(req, res) => {

    const { id } = req.params;

    const { status, status_code, message, data } = await postsService.handleGetPostsById({ id });

    res.status(status_code).send({
        status: status,
        message: message,
        data: data
    });
}

/* ------------------ End Get Post By Id ------------------ */


/* ------------------ Update Post By Id ------------------ */

const handleUpdatePostById = async(req, res) => {

    const { id } = req.params;

    const { title, content } = req.body;

    const { status, status_code, message, data } = await postsService.handleUpdatePostById({ 
        id,
        title,
        content
    });

    res.status(status_code).send({
        status: status,
        message: message,
        data: data
    });
}

/* ------------------ End Update Post By Id ------------------ */

module.exports = { 
    handleCreatePost, 
    handleGetPosts, 
    handleGetPostsById, 
    handleUpdatePostById 
};