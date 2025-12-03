import { hotelModel } from "../models/hotel-model";
import { replaceMongoId } from "../utils/data-util";

export async function getAllHotels() {
    const hotels = await hotelModel
        .find()
        .select(["thumbNailUrl","name","highRate","lowRate","city","propertyCategory"])
        .lean();
  return replaceMongoId(hotels);
}
