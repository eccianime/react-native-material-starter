import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import screenOptions from '../config/screenOptions';
import { Recents } from '../screens/home'

const Home = createStackNavigator();
const HomeNavigator = () => (
  <Home.Navigator 
    screenOptions={screenOptions}>
    <Home.Screen name="Recents" component={Recents} />
  </Home.Navigator>
);

export default HomeNavigator;
