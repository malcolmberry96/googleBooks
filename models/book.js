const mongoose = require("mongoose");

//Reference to the schema constructor 
const BookSchema = new Schema({
    //title 
    title : {
        type: String,
        required: true
    },
    //details
    authors : [
    {
    type: String,
    required:true
    }
    ],
    synopsis: {
    type: String,

    },
    thumbnail: {
    type: String,

    },
    link : {
        type:String,
        required: true
    },
});
//Creates model 
const Book = mongoose.model("Book", BookSchema);

//Export model 
module.exports = Book;