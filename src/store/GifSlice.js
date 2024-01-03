import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  gifList: [],
};

const GifSlice = createSlice({
  name: "gif",
  initialState: initialState,
  reducers: {
    setGifList(state, action) {
      state.gifList = action.payload;
    },
  },
});

export const gifAction = GifSlice.actions;

export default GifSlice.reducer;
