import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  comments: [],
};

const theorySlice = createSlice({
  name: "theory",
  initialState,
  reducers: {
    setComments(state, action) {
      state.comments = action.payload;
    },
  },
});
export const { setComments } = theorySlice.actions;
export default theorySlice.reducer;
