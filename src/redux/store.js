import { configureStore } from "@reduxjs/toolkit";

import surveyReducer from "./slices/survey.slice";

const store = configureStore({
  reducer: {
    surveyResult: surveyReducer,
  },
});

export default store;
