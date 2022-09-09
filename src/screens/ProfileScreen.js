import {
  Text,
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  Button,
} from 'react-native';
import React from 'react';
import {AsyncStorage} from '@react-native-async-storage/async-storage';

const ProfileScreen = ({navigation}) => {
  const logout = async () => {
    console.log('logout');
    global.userData = null;
    await AsyncStorage.removeItem('user');

    navigation.navigate('WelcomeScreen');
  };
  return (
    <SafeAreaView style={styles.conainer}>
      <View style={styles.imageContainer}>
        <Image style={{height: 190, width: 190}} source={null} />

        <Text style={styles.nameText}>Telegram</Text>
        <Text>Phone number</Text>
      </View>
      <View>
        <Button onPress={() => navigation.navigate('ThemeScreen')} />
        <Button onPress={() => navigation.navigate('EditScreen')} />
      </View>
      <View>
        <Button text="log out" onPress={logout} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  conainer: {
    flex: 1,
    justifyContent: 'space-around',
  },
  nameText: {
    textAlign: 'center',
    fontSize: 40,
    margin: 10,
  },
});

export default ProfileScreen;
