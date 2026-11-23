import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const surveySlice = createSlice({
  name: "survey",
  initialState,
  reducers: {
    addData: (prevState, { payload }) => {
      return [
        ...prevState,
        {
          id: payload.id,
          nama: payload.nama,
          umur: payload.umur,
          gender: payload.gender,
          smoking: payload.smoking,
          cigarettes: payload.cigarettes,
        },
      ];
    },
    removeData: (prevState, { payload }) => {
      const filteredItem = prevState.filter((item) => item.id === payload.id);
      return [...filteredItem];
    },
  },
});

export const { addData, removeData } = surveySlice.actions;

export default surveySlice.reducer;
