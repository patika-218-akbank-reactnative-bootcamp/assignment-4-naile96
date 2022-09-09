import {View, Text} from 'react-native';
import React from 'react';

import {useNavigation, useRoute} from '@react-navigation/native';

const MovieDetailsScreen = () => {

    const {setOptions} = useNavigation();
  const {
    params: {id, text, owner},
  } = useRoute();
  setOptions({
    title: `${owner}'s Tweet`,
  });

  return (
    <View>
      <Text>{text}</Text>
    </View>
  );
};

export default MovieDetailsScreen;


 