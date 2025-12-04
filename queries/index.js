import { hotelModel } from "../models/hotel-model";
import { replaceMongoId } from "../utils/data-util";
import { ratingModel } from "../models/rating-model";
import { reviewModel } from "../models/review-model";
export async function getAllHotels() {
    const hotels = await hotelModel
        .find()
        .select(["thumbNailUrl","name","highRate","lowRate","city","propertyCategory"])
        .lean();
  return replaceMongoId(hotels);
}
export async function getRatings(hotelId) {
  const ratings = await ratingModel.find({ hotelId: hotelId }).lean();
  return replaceMongoId(ratings);
}
export async function getReviews(hotelId) {
  const reviews = await reviewModelModel.find({ hotelId: hotelId }).lean();
  return replaceMongoId(reviews);
}