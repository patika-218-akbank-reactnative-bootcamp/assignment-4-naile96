import {View, Text, Pressable} from 'react-native';
import React from 'react';
import axios from 'axios';
import {useDispatch, useSelector} from 'react-redux';

import Ionicons from 'react-native-vector-icons/Ionicons';

import {useNavigation} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import ProfileScreen from '../screens/ProfileScreen';
import MovieDetailsScreen from '../screens/MovieDetailsScreen';
import Theme from '../screens/Theme';
import Edit from '../screens/Edit';

import {setMovies, toggleTheme} from '../store';

const BottomNav = createBottomTabNavigator();
const Stack = createStackNavigator();

const ProfilesStackNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="SettingsScreen">
      <Stack.Screen name="ThemeScreen" component={Theme} />
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
      <Stack.Screen name="EditScreen" component={Edit} />
    </Stack.Navigator>
  );
};

const MovieStackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="MovieList" component={HomeScreen} />
      <Stack.Screen name="MessageDetails" component={MovieDetailsScreen} />
    </Stack.Navigator>
  );
};

const BottomNavigation = () => {
  const {navigate} = useNavigation();
  const {activeTheme} = useSelector(state => state.theme);
  const dispatch = useDispatch();

  // const [newTweetText, setNewTweetText] = useState('');

  return (
    <BottomNav.Navigator initialRouteName="Home">
      <BottomNav.Screen
        options={{
          tabBarIcon: ({color}) => (
            <Ionicons name="mail" size={24} color={color} />
          ),
        }}
        name="Home"
        component={MovieStackNavigation}
      />
      <BottomNav.Screen
        name="Search"
        options={{
          headerShown: true,
          tabBarActiveTintColor: activeTheme.accentColor,
          tabBarIcon: ({color}) => (
            <Ionicons name="search" size={24} color={color} />
          ),
        }}
        component={SearchScreen}
      />
      <BottomNav.Screen
        options={{
          headerShown: true,
          tabBarIcon: ({color}) => (
            <Ionicons name="search" size={24} color={color} />
          ),
        }}
        name="Notifications"
        component={ProfilesStackNavigation}
      />
    </BottomNav.Navigator>
  );
};

export default BottomNavigation;
