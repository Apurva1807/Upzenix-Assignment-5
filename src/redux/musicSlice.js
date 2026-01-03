import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  songs: [],
  loading: false,
  error: null,
  selectedGenre: "All",
};
const musicSlice = createSlice({
  name: "music",
  initialState,
  reducers: {
    fetchSongsStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchSongsSuccess: (state, action) => {
      state.loading = false;
      state.songs = action.payload;
    },
    fetchSongsFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    setGenre: (state, action) => {
      state.selectedGenre = action.payload;
    },
  },
});
export const {
  fetchSongsStart,
  fetchSongsSuccess,
  fetchSongsFailure,
  setGenre,
} = musicSlice.actions;
export default musicSlice.reducer;