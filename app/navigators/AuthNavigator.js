import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { SignIn } from '../screens/auth';
import Main from './MainNavigator';
import screenOptions from '../config/screenOptions';
//import colors from '../config/colors';

const Auth = createStackNavigator();
const AuthNavigator = () => (
  <Auth.Navigator screenOptions={screenOptions} >
    <Auth.Screen name="Sign In" component={SignIn} />
    <Auth.Screen name="Main" component={Main} />
  </Auth.Navigator>
);

export default AuthNavigator;
