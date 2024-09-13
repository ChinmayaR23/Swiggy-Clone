const mongoose = require("mongoose")
const { Schema } = mongoose;

const UserSchema = new Schema({
//   name: String
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true // If we are using username, put unique true as a function for the username
    },
    password: {
        type: String, 
        required: true
    },
    date: {
        type: Date,
        default: Date.now // This is a function, do not write the function call because it will be called when this model is called ig
    }, 
});

const User = mongoose.model('user', UserSchema); // create a model of this schema and name the model (here is user) and then requires the schema that we are exporting
// User.createIndexes();
module.exports = User; 


