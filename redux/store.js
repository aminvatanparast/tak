import { configureStore } from "@reduxjs/toolkit";
import libraryReducer from "redux/appSlices/librarySlice";
import blogReducer from "redux/appSlices/blogSlice";
import profileReducer from "redux/appSlices/profileSlice";
import competitionSlice from "redux/appSlices/competitionSlice";
import commonReducer from "redux/appSlices/commonSlice";
import theoryReducer from "redux/appSlices/theorySlice";

export const store = configureStore({
  reducer: {
    library: libraryReducer,
    blog: blogReducer,
    profile: profileReducer,
    competition: competitionSlice,
    common: commonReducer,
    theory: theoryReducer,
  },
  devTools: true,
});
