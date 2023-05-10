import React, { useState } from "react";
import Reviews from "./Reviews";
import { useDispatch } from "react-redux";
import { reviewAdded } from "./reviewsSlice";

function ReviewInput({ resId }) {

  const [comment, setComment] = useState("");
  const dispatch = useDispatch();

  function handleSubmit(e){
    e.preventDefault(e);
    dispatch(reviewAdded({
      comment: comment,
      restaurantId: resId
    }));
    setComment("");
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <p>
          <label>Comment</label>
          <input
            type="text"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
        </p>
        <input type="submit" value="Add Review" />
      </form>
    </div>
  );
}

export default ReviewInput;
