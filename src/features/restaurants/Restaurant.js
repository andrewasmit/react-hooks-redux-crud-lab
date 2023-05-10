import React from "react";
import ReviewsContainer from "../reviews/ReviewsContainer";
import { useDispatch } from "react-redux";
import { restaurantRemoved } from "./restaurantsSlice";

function Restaurant({ name, id }) {

  const dispatch = useDispatch();

  function handleDeleteClick(){
    dispatch(restaurantRemoved(id))
  }

  return (
    <div>
      <li>
        {name}
        <button onClick={handleDeleteClick}> Delete Restaurant </button>
        <ReviewsContainer resId={id} />
      </li>
    </div>
  );
}

export default Restaurant;
