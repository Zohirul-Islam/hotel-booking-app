
import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
    hotelId: {
        type: ObjectId,
        require: true,
    },
    userId: {
        type: ObjectId,
        require: true,  
    },
    review: {
        require: true,
        type:Number
    }

});
export const reviewModel = mongoose.models.reviews || mongoose.model('reviews', reviewSchema);