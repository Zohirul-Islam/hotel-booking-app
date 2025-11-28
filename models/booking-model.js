
import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
    hotelId: {
        type: ObjectId,
        require: true,
    },
    userId: {
        type: ObjectId,
        require: true,  
    },
    checkin: {
        type: String,
        require:true
    },
    checkout: {
        type: String,
        require:true
    }
});
export const bookingModel = mongoose.models.bookings || mongoose.model('bookings', bookingSchema);