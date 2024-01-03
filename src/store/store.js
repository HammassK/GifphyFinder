import { configureStore } from "@reduxjs/toolkit";

import gifListReducer from "./GifSlice";

const store = configureStore({
  reducer: {
    gif: gifListReducer,
  },
});
export default store;
