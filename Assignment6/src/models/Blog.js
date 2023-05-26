const mongooose = require('mongoose');

const blogSchema = new mongooose.Schema({
   id:{type: Number, required: true},
   topic:{type: String, required: true},
   description:{type: String, required: true},
   posted_at:{type: String, required: true},
   posted_by:{type: String, required: true},
})

const Blog = mongooose.model('Blogs', blogSchema);

module.exports = Blog;