import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./themeSlice";
import gunlistReducer from "./gunlistSlice";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    guns: gunlistReducer
  }
})