const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogPostSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    body : {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('BlogPost', blogPostSchema);