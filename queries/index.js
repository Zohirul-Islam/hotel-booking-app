import { hotelModel } from "../models/hotel-model";
import { replaceMongoId, replaceMongoIdInObject } from "../utils/data-util";
import { ratingModel } from "../models/rating-model";
import { reviewModel } from "../models/review-model";
import { bookingModel } from "../models/booking-model";
import { isDateInbetween } from "../utils/data-util";
export async function getAllHotels(destination, checkin, checkout) {
  const regex = new RegExp(destination, "i");
  const hotelsByDestination = await hotelModel
    .find({ city: { $regex: regex } })
    .select([
      "thumbNailUrl",
      "name",
      "highRate",
      "lowRate",
      "city",
      "propertyCategory",
    ])
    .lean();
  let allHotels = hotelsByDestination;
  if (checkin && checkout) {
    allHotels = await Promise.all(
      allHotels.map(async (hotel) => {
        const found = await findBooking(hotel._id, checkin, checkout);
        if (found) {
          hotel["isBooked"] = true;
        } else {
          hotel["isBooked"] = false;
        }
        return hotel;
      })
    );
  }
  return replaceMongoId(allHotels);
}
async function findBooking(hotelId, checkin, checkout) {
  const matches = await bookingModel
    .find({ hotelId: hotelId.toString() })
    .lean();
  const found = matches.find((match) => {
    return (
      isDateInbetween(checkin, match.checkin, match.checkout) ||
      isDateInbetween(checkout, match.checkin, match.checkout)
    );
  });
  return found;
}
export async function getRatings(hotelId) {
  const ratings = await ratingModel.find({ hotelId: hotelId }).lean();
  return replaceMongoId(ratings);
}
export async function getReviews(hotelId) {
  const reviews = await reviewModel.find({ hotelId: hotelId }).lean();
  return replaceMongoId(reviews);
}
export async function getHotelById(hotelId,checkin,checkout) {
  const singleHotel = await hotelModel.findById(hotelId).lean();
  if (checkin && checkout) {
    const found = await findBooking(singleHotel._id, checkin, checkout);
    if (found) {
      singleHotel["isBooked"] = true;
    } else {
      singleHotel["isBooked"] = false;
    }
  }
  return replaceMongoIdInObject(singleHotel);
}
