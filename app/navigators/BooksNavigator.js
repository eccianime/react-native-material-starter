import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import screenOptions from '../config/screenOptions';
import { AppText } from '../components/form';
import { View } from 'react-native';

const Title = () => <View><AppText>Title</AppText></View>
const Author = () => <View><AppText>Author</AppText></View>
const Gender = () => <View><AppText>Gender</AppText></View>

const Books = createMaterialTopTabNavigator();
const BooksNavigator = () => (
  <Books.Navigator 
        screenOptions={({ route }) => ({
            tabBarLabel: ({ focused }) => {
                return (
                    <AppText>{route.name}</AppText>
                )
            },
        })}
    >
    <Books.Screen name="Title" component={Title} />
    <Books.Screen name="Author" component={Author} />
    <Books.Screen name="Gender" component={Gender} />
  </Books.Navigator>
);

export default BooksNavigator;
