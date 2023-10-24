import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    gptSearchEnable: false,
  },
  reducers: {
    addGptSearch: (state) => {
      state.gptSearchEnable = !state.gptSearchEnable;
    },
  },
});

export const { addGptSearch } = gptSlice.actions;
export default gptSlice.reducer;
