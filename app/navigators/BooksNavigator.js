import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { AppText } from '../components/form';
import { StyleSheet, View } from 'react-native';

const Title = () => <View><AppText>Title</AppText></View>
const Author = () => <View><AppText>Author</AppText></View>
const Gender = () => <View><AppText>Gender</AppText></View>

const Books = createMaterialTopTabNavigator();
const BooksNavigator = () => (
  <Books.Navigator 
        backBehavior="initialRoute"
        tabBarOptions={{
            indicatorStyle: styles.indicator,
            style: styles.tab,
        }}
        screenOptions={({ route }) => ({
            tabBarLabel: ({ focused }) => {
                return (
                    <AppText size='bold' style={styles.tabText}>
                        {route.name}
                    </AppText>
                )
            },
        })}
    >
    <Books.Screen name="Title" component={Title} />
    <Books.Screen name="Author" component={Author} />
    <Books.Screen name="Gender" component={Gender} />
  </Books.Navigator>
);

const styles = StyleSheet.create({
    indicator: {
        backgroundColor: '#7F0000',
        height: 3,
    },
    tab: {
        backgroundColor: '#c62828',
    },
    tabText: {
        color: '#FFF',
        textTransform: 'uppercase'
    }
})

export default BooksNavigator;
