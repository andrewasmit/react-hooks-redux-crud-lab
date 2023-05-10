import React from "react";
import ReviewInput from "./ReviewInput";
import Reviews from "./Reviews";
import { useSelector } from "react-redux";

function ReviewsContainer({ resId }) {
  const reviews = useSelector(state=>state.reviews.entities)

  return (
    <div>
      <ReviewInput resId={resId} />
      <Reviews resId={resId} reviews={reviews} />
    </div>
  );
}

export default ReviewsContainer;
