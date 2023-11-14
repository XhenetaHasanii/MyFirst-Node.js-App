//include mongoose
const mongoose=require('mongoose');


// Schema defines the structure of the document
// create blogSchema 
const blogSchema= new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    snippet:{
        type:String,
        required:true
    },
    body:{
        type:String,
        required:true
    }
});

const Blog=mongoose.model('blog',blogSchema);
module.exports=Blog;

