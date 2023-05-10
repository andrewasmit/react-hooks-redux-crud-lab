import { v4 as uuid } from "uuid";
import { createSlice } from "@reduxjs/toolkit";

const restaurantsSlice = createSlice({
  name: "restaurants",
  initialState: {},
  reducers: {
    restaurantAdded(state, action){
      state.entities.push({
        name: action.payload,
        id: uuid()
      }) 
    },
    restaurantRemoved(state, action){
      const idx = state.entities.findIndex(restaurant=>restaurant.id === action.payload);
      state.entities.splice(idx, 1);
    }
  },
});

export default restaurantsSlice.reducer;
export const { restaurantAdded, restaurantRemoved } = restaurantsSlice.actions;