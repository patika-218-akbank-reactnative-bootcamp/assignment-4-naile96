import {combineReducers, configureStore, createSlice} from '@reduxjs/toolkit';

const movieSlice = createSlice({
  name: 'movies',
  initialState: {
    feedItems: [],
  },
  reducers: {
    setMovies: (state, action) => {
      const {movies} = action.payload;
      return {
        feedItems: movies,
      };
    },
  },
});

const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    activeTheme: 'light',
  },
  reducers: {
    toggleTheme: state => {
      return {
        activeTheme: state.activeTheme === 'light' ? 'dark' : 'light',
      };
    },
  },
});

export const {setMovies} = movieSlice.actions;
export const {toggleTheme} = themeSlice.actions;

export const store = configureStore({
  reducer: combineReducers({
    movies: movieSlice.reducer,
    theme: themeSlice.reducer,
  }),
});
