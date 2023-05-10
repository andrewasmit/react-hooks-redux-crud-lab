import { v4 as uuid } from "uuid";
import { createSlice } from "@reduxjs/toolkit";

const reviewsSlice = createSlice({
  name: "reviews",
  initialState: {
    entities: []
  },
  reducers: {
    reviewAdded(state, action){
        state.entities.push({
            comment: action.payload.comment,
            restaurantId: action.payload.restaurantId,
            id: uuid()
        })
    },
    reviewRemoved(state, action){
        const idx = state.entities.findIndex(r=>r.id === action.payload.id);
        state.entities.splice(idx, 1);
    }
  },
});

export default reviewsSlice.reducer;
export const { reviewAdded, reviewRemoved } = reviewsSlice.actions;