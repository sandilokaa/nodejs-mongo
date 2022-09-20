const postModel = require("../helper/postModel");

class PostsRepository{

    /* ------------------ Create Post ------------------ */

    static async handleCreatePost({ user_id, title, content }){

        const handleCreatePost = await postModel.create({
            user_id,
            title,
            content
        });

        return handleCreatePost;
    };

    /* ------------------ End Create Post ------------------ */


    /* ------------------ Get Post ------------------ */

    static async handleGetPosts(){

        const getAllPosts = await postModel.find();

        return getAllPosts;

    };

    /* ------------------ End Get Post ------------------ */


    /* ------------------ Get Post By Id ------------------ */

    static async handleGetPostsById({ id }){

        const getPostById = await postModel.findById(id);

        return getPostById;

    };

    /* ------------------ End Get Post By Id ------------------ */

};

module.exports = PostsRepository;