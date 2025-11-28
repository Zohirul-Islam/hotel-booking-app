import { hotelModel } from "../models/hotel-model";
import { replaceMongoId } from "../utils/data-util";

export async function getAllHotels() {
    const hotels = await hotelModel.find().lean();
    return replaceMongoId(hotels);
}