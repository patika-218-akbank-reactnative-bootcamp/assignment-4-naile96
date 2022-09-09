import React, {useEffect} from 'react';
import {
  Alert,
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Movie from '../components/Movie';

import axios from 'axios';
import {setMovies, toggleTheme} from '../store';
import {useDispatch, useSelector} from 'react-redux';

const HomeScreen = () => {
  const movies = useSelector(state => state.movies.feedItems);
  const {activeTheme} = useSelector(state => state.theme);
  const dispatch = useDispatch();

  const handleGetMovies = onEnd => {
    console.log('HANDLE GET MOVIES');
    axios
      .get(
        'https://api.themoviedb.org/3/trending/movie/day?api_key=0c9b628b1b404006b834486dac4b7a27',
      )
      .then(response => {
        dispatch(setMovies({movies: response.data.results}));
      })
      .finally(() => {
        onEnd?.();
      });
  };

  useEffect(() => {
    handleGetMovies();
    dispatch(toggleTheme());
  }, []);

  const renderMovieItem = ({item}) => {
    console.log({item}.item);
    return <Movie movie={{item}.item} />;
  };

  const renderMovieSeparatorItem = ({item}) => {
    return (
      <View
        style={[
          styles.separator,
          {
            backgroundColor: activeTheme.grayText,
          },
        ]}
      />
    );
  };

  return (
    <FlatList
      data={movies}
      renderItem={renderMovieItem}
      ItemSeparatorComponent={renderMovieSeparatorItem}
      keyExtractor={(item, index) => `movie-${item.id}`}
    />
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  tweetContainer: {
    width: '100%',
    padding: 16,
  },
  tweetUserContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 32,
    height: 32,
    borderRadius: 16,
  },
  username: {
    marginLeft: 8,
    fontWeight: '600',
  },
  tweetTextContainer: {
    marginTop: 8,
  },
  separator: {
    width: '100%',
    height: 1,
  },
});
