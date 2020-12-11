import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import screenOptions from '../config/screenOptions';
import { Profile } from '../screens/profile';

const Auth = createStackNavigator();
const AuthNavigator = () => (
  <Auth.Navigator screenOptions={screenOptions} >
    <Auth.Screen name="Profile" component={Profile} />
  </Auth.Navigator>
);

export default AuthNavigator;
