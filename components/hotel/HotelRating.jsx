import React from "react";
import { getRatings } from "../../queries";

export const HotelRating = async ({ id }) => {
  const ratings = await getRatings(id);

  
  const getRatingDescription = (averageRating) => {
    if (averageRating === 0) return "No Rating Available";
    if (averageRating <= 2) return "Poor";
    if (averageRating <= 3) return "Average";
    if (averageRating <= 4) return "Good";
    return "Very Good";
  };

  
  const averageRating =
    ratings.length === 0
      ? 0
      : ratings.reduce((acc, item) => acc + item.rating, 0) / ratings.length;
  const roundedRating = averageRating.toFixed(1);

  return (
    <>
      <div className="bg-primary w-[35px] h-[35px] rounded-sm text-white grid place-items-center font-bold">
        {roundedRating}
      </div>
      <span className="font-medium">{getRatingDescription(averageRating)}</span>
    </>
  );
};

