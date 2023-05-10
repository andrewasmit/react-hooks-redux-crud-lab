import React from "react";
import Restaurant from "./Restaurant";

function Restaurants({ restaurants }) {
  const resToDisplay = restaurants.map(r=>{
    return <Restaurant name={r.name} key={r.id} id={r.id} />
  })


  return <ul>{resToDisplay}</ul>;
}

export default Restaurants;
