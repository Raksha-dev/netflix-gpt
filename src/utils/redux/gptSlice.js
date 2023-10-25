import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    gptSearchEnable: false,
    movieNames: null,
    movieResults: null,
  },
  reducers: {
    addGptSearch: (state) => {
      state.gptSearchEnable = !state.gptSearchEnable;
    },
    addGptMovieResult: (state, action) => {
      const { movieNames, movieResults } = action.payload;
      state.movieNames = movieNames;
      state.movieResults = movieResults;
    },
  },
});

export const { addGptSearch, addGptMovieResult } = gptSlice.actions;
export default gptSlice.reducer;
