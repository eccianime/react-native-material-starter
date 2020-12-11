import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { Home } from '../screens/home';
import Books from './BooksNavigator';
import { Search } from '../screens/search';
import { Favorites } from '../screens/favorites';
import { Profile } from '../screens/profile'
import colors from '../config/colors';

const Main = createBottomTabNavigator();

export default function MainNavigator() {
  return (
    <Main.Navigator
        backBehavior='none'
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused }) => {
            let name;
            switch (route.name) {
                case 'Home':        name = focused ? 'home-sharp' : 'home-outline' ;   break;
                case 'Books':       name = focused ? 'book'       : 'book-outline' ;   break;
                case 'Search':      name = focused ? 'search'     : 'search-outline' ; break;
                case 'Favorites':   name = focused ? 'heart'      : 'heart-outline' ;  break;
                case 'Profile':     name = focused ? 'person'     : 'person-outline' ; break;
            }
            return <Icon name={name} color={colors.white} size={25} />
            },
        })}
        tabBarOptions={{ 
          style: {backgroundColor: colors.primary},
          showLabel: false 
        }}
    >
        <Main.Screen name="Home" component={Home} />
        <Main.Screen name="Books" component={Books} />
        <Main.Screen name="Search" component={Search} />
        <Main.Screen name="Favorites" component={Favorites} />
        <Main.Screen name="Profile" component={Profile} />
    </Main.Navigator>
  );
}