import React from "react";
import { useDispatch } from "react-redux";
import { reviewRemoved } from "./reviewsSlice";

function Review({ id, comment, restaurantId }) {
  const dispatch = useDispatch();

  function handleDeleteClick(){
    dispatch(reviewRemoved(id));
  }

  return (
    <div>
      <li>{comment}</li>
      <button onClick={handleDeleteClick}> Delete Review </button>
    </div>
  );
}

export default Review;
