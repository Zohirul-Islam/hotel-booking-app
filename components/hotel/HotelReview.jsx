import React from "react";
import { getReviews } from "../../queries";
import Link from "next/link";
const HotelReview = async ({ id }) => {
  const reviews = await getReviews(id);
  return (
    <>
      {reviews?.length === 0 ? (
        <Link href={"#"} className="underline">
          Be the first on to review
        </Link>
      ) : (
        <Link href={`/hotel/${id}/reviews`} className="underline">
                      { reviews.length} Reviews
        </Link>
      )}
    </>
  );
};

export default HotelReview;
