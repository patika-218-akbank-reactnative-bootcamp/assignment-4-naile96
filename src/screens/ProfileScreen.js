import {Text, SafeAreaView, View, StyleSheet, Image} from 'react-native';
import React from 'react';
import {AsyncStorage} from '@react-native-async-storage/async-storage';
import NewButton from '../components/NewButton';

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

        <Text style={styles.nameText}>movie</Text>
        <Text>Phone number</Text>
      </View>
      <View>
        <NewButton
          text="Theme"
          title="Theme"
          onPress={() => navigation.navigate('Theme')}
        />
        <NewButton
          text="Edit Profile"
          title="Edit"
          onPress={() => navigation.navigate('Edit')}
        />
      </View>
      <View>
        <NewButton text="log out" onPress={logout} />
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
