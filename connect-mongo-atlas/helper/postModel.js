const mongoose = require("mongoose");

const schema = mongoose.Schema(
    {
        user_id: 'Object',
        title: 'String',
        content: 'String'
    },
    {
        timestamps: true
    }
);

const Post = mongoose.model('Post', schema);

module.exports = Post;