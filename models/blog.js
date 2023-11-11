//include mongoose
const mongoose=require('mongoose');

const Schema=mongoose.Schema;

// defines the structure of the document

const blogSchema= new Schema({
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
},{timestamps:true});

// create models
const Blog=mongoose.model('blogs',blogSchema);
module.exports=Blog;
