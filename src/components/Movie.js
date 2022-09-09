import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';

import {useDispatch, useSelector} from 'react-redux';

const Movie = ({movie}) => {
  // const dateFormatted = new Date(movieDate).toDateString();
  const {activeTheme} = useSelector(state => state.theme);

  const dispatch = useDispatch();
  return (
    <Pressable
      style={[
        styles.container,
        {
          backgroundColor: activeTheme.backgroundColor,
        },
      ]}>
      <Image
        style={styles.imageContainer}
        source={{
          uri:
            'https://image.tmdb.org/t/p/w440_and_h660_face/' +
            movie.poster_path,
        }}
      />
      <View style={styles.viewContainer}>
        <View style={styles.viewTextContainer}>
          <Text
            style={[
              styles.text,
              {color: activeTheme.color},
            ]}>{`${movie.title}`}</Text>
          <Text style={styles.textRating}>({`${movie.vote_average}`})</Text>
        </View>
        <View>
          <Text>{`${movie.overview}`}</Text>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    padding: 16,
    borderBottomWidth: 0,
    borderBottomColor: 'rgba(0,0,0,0.3)',
  },
  imageContainer: {
    width: 100,
    height: 100,
    borderRadius: 10,
    backgroundColor: 'rgba(0,0,0,0.3)',
    marginRight: 8,
  },
  viewContainer: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
  },
  viewTextContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 8,
  },
  text: {
    fontWeight: '600',
    fontSize: 16,
  },
  textRating: {
    marginLeft: 4,
  },
});

export default Movie;
