const mongoose = require("mongoose");

const schema = mongoose.Schema(
    {
        title: 'String',
        content: 'String'
    },
    {
        timeStamps: true
    }
);

const Post = mongoose.model('Post', schema);

module.exports = Post;