import React from "react";
import Review from "./Review";

function Reviews({ reviews }) {

  const reviewsToDisplay = reviews.map(r=>{
    return <Review key={r.id} id={r.id} comment={r.comment} restaurantId={r.restaurantId} />
  })

  return <ul>{reviewsToDisplay}</ul>;
}

export default Reviews;
