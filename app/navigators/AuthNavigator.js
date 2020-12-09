import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { SignIn, Register, Forgot } from '../screens/auth';
import Main from './MainNavigator';
import screenOptions from '../config/screenOptions';
import { BookDetail } from '../screens/books';


const Auth = createStackNavigator();
const AuthNavigator = () => (
  <Auth.Navigator screenOptions={screenOptions} >
    <Auth.Screen name="Sign In" component={SignIn} />
    <Auth.Screen name="Register" component={Register} />
    <Auth.Screen name="Forgot" component={Forgot} />
    <Auth.Screen name="Main" component={Main} />

    <Auth.Screen name="Book Detail" component={BookDetail} />
  </Auth.Navigator>
);

export default AuthNavigator;
