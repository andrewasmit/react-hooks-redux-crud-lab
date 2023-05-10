import React, { useState } from "react";
import { restaurantAdded } from "./restaurantsSlice";
import { useDispatch } from "react-redux";

function RestaurantInput() {
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  function handleSubmit(e){
    e.preventDefault();
    dispatch(restaurantAdded(name));
    setName("");
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <p>
          <label>Name</label>
          <input type="text" value={name} onChange={e=>setName(e.target.value)}/>
        </p>
        <input type="submit" value="Add Restaurant" />
      </form>
    </div>
  );
}

export default RestaurantInput;
