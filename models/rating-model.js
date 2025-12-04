
import mongoose from "mongoose";
import { ObjectId } from "mongodb";
const ratingSchema = new mongoose.Schema({
    hotelId: {
        type: ObjectId,
        require: true,
    },
    userId: {
        type: ObjectId,
        require: true,  
    },
    rating: {
        require: true,
        type:Number
    }

});
export const ratingModel = mongoose.models.ratings || mongoose.model('ratings', ratingSchema);