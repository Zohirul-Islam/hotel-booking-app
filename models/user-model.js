
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,  
    },
    password: {
        type: String,
        require: true,  
    },
    image: {
    type: String,
    require: false,  
    }

});
export const userModel = mongoose.models.users || mongoose.model('users', userSchema);