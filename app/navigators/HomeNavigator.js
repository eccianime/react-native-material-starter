import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

//import { Recents } from '../screens/auth';
import { View } from 'react-native';
import { AppText } from '../components/form';
import screenOptions from '../config/screenOptions';
//import colors from '../config/colors';

const Recents = () => <View><AppText>Recents</AppText></View>

const Home = createStackNavigator();
const HomeNavigator = () => (
  <Home.Navigator screenOptions={screenOptions}>
    <Home.Screen name="Recents" component={Recents} />
  </Home.Navigator>
);

export default HomeNavigator;
