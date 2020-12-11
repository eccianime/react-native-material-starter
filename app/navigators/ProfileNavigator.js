import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import screenOptions from '../config/screenOptions';
import { Profile, Admin } from '../screens/profile';

import { Authors, Books, Genres, Users } from "../screens/admin";

const Auth = createStackNavigator();
const AuthNavigator = () => (
  <Auth.Navigator screenOptions={screenOptions} >
    <Auth.Screen name="Profile" component={Profile} />
    <Auth.Screen name="Admin" component={Admin} />

    <Auth.Screen name="Admin Authors" component={Authors} />
    <Auth.Screen name="Admin Books" component={Books} />
    <Auth.Screen name="Admin Genres" component={Genres} />
    <Auth.Screen name="Admin Users" component={Users} />
  </Auth.Navigator>
);

export default AuthNavigator;
