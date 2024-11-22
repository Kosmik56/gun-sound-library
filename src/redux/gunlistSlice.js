import { createSlice } from "@reduxjs/toolkit";

export const gunlistSlice = createSlice({
  name: "guns",
  initialState: {
    list: []
  },
  reducers: {
    pushGun: (state, action) => {
      state.list.push(action.payload);
    }
  }
})

export const { pushGun } = gunlistSlice.actions;
export default gunlistSlice.reducer;