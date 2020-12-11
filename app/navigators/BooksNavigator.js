import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { AppText } from '../components/form';
import { StyleSheet } from 'react-native';
import { Title, Author, Genre } from '../screens/books'
import colors from '../config/colors';
import { Header } from '../components/common';

const Books = createMaterialTopTabNavigator();
const BooksNavigator = ({ navigation }) => (
    <>
        <Header title='ALL BOOKS' showBack={false} showExit={true} navigation={navigation} />
        <Books.Navigator 
                backBehavior="initialRoute"
                tabBarOptions={{
                    indicatorStyle: styles.indicator,
                    style: styles.tab,
                }}
                initialRouteName='Title'
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
            <Books.Screen name="Genre" component={Genre} />
        </Books.Navigator>
    </>
);

const styles = StyleSheet.create({
    indicator: {
        backgroundColor: colors.primary,
        height: 3,
    },
    tab: {
        backgroundColor: colors.secondary,
    },
    tabText: {
        color: colors.white,
        textTransform: 'uppercase'
    }
})

export default BooksNavigator;
