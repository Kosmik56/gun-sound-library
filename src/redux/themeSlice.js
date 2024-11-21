import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
  name: "theme",
  initialState: {
    isLight: true
  },
  reducers: {
    toggle: (state) => {
      state.isLight = !state.isLight;
    }
  }
})

export const { toggle } = themeSlice.actions;
export default themeSlice.reducer;