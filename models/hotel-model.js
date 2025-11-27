import mongoose from "mongoose";

const hotelSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  address1: {
    type: String,
    require: true,
  },
  airportCode: {
    type: String,
    require: true,
  },
  city: {
    type: String,
    require: false,
  },
  countryCode: {
    type: String,
    require: false,
  },
  highRate: {
    type: Number,
    require: false,
  },
  location: {
    type: Object,
    require: true,
  },
  locationDescription: {
    type: String,
    require: true,
  },
  lowRate: {
    type: Number,
    require: false,
  },

  postalCode: {
    type: Number,
    require: true,
  },
  propertyCategory: {
    type: Number,
    require: false,
  },

  shortDescription: {
    type: String,
    require: true,
  },
  stateProvinceCode: {
    type: String,
    require: false,
  },
  thumbNailUrl: {
    type: String,
    require: false,
  },
  gallery: {
    type: Array,
    require: false,
  },

  overview: {
    type: String,
    require: false,
  },
  amenities: {
    type: Array,
    require: false,
  },
});
export const hotelModel = mongoose.models.hotels || mongoose.model('hotels', hotelSchema);
