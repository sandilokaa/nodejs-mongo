const postsRepository = require("../repositories/postsRepository");

class postsService {

    /* ------------------ Create Post ------------------ */

    static async handleCreatePost({ title, content }){

        /* ------------------ Payload Validation ------------------ */

        if (!title){
            return{
                status: false,
                status_code: 400,
                message: "Title must be filled!",
                data: {
                    handleCreatePost: null
                }
            }
        }

        if (!content){
            return{
                status: false,
                status_code: 400,
                message: "Content must be filled!",
                data: {
                    handleCreatePost: null
                }
            }
        }

        /* ------------------ End Payload Validation ------------------ */

        const handleCreatePost = await postsRepository.handleCreatePost({
            title,
            content
        });

        return{
            status: true,
            status_code: 201,
            message: "User successfully added data!",
            data: {
                handleCreatePost: handleCreatePost
            }
        }

    };

    /* ------------------ End Create Post ------------------ */


    /* ------------------ Get Post ------------------ */

    static async handleGetPosts(){

        const getAllPosts = await postsRepository.handleGetPosts();

        return{
            status: true,
            status_code: 201,
            message: "User successfully get all posts!",
            data: {
                getAllPosts: getAllPosts
            }
        }

    };

    /* ------------------ End Get Post ------------------ */


    /* ------------------ Get Post By Id ------------------ */
    
    static async handleGetPostsById({ id }){
    
        const getPostById = await postsRepository.handleGetPostsById({ id });

        return{
            status: true,
            status_code: 201,
            message: "User successfully get all posts!",
            data: {
                getPostById: getPostById
            }
        }
    
    };
    
    /* ------------------ End Get Post By Id ------------------ */


    /* ------------------ Update Post By Id ------------------ */

    static async handleUpdatePostById({ 
        id,
        title,
        content 
    }){

        /* ------------------ Payload Validation ------------------ */

        if (!title){
            return{
                status: false,
                status_code: 400,
                message: "Title must be filled!",
                data: {
                    handleCreatePost: null
                }
            }
        }

        if (!content){
            return{
                status: false,
                status_code: 400,
                message: "Content must be filled!",
                data: {
                    handleCreatePost: null
                }
            }
        }

        /* ------------------ End Payload Validation ------------------ */

        const getPost = await postsRepository.getPostById({ id });

        console.log(getPost);
    
    }

    /* ------------------ End Update Post By Id ------------------ */

};

module.exports = postsService;