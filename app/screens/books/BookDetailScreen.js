import React from 'react';
import { StyleSheet, ScrollView, View, Image, Text } from 'react-native';
import LinearGradient from "react-native-linear-gradient";
import { AppButton, AppField, AppText } from '../../components/form';
import { Book } from '../../components/cards'
import Icon from 'react-native-vector-icons/Ionicons';
import { BaseBackground } from '../../components/common';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Header } from '../../components/common';
const Reviews = createMaterialTopTabNavigator();

const FiveStar = () => (
    <View style={{ padding: 10, backgroundColor: 'white' }}>
        <Text>Five Star</Text>
    </View>
)

const FourStar = () => (
    <View style={{ padding: 10, backgroundColor: 'white' }}>
        <Text>Four Star</Text>
    </View>
)

const ThreeStar = () => (
    <View style={{ padding: 10, backgroundColor: 'white' }}>
        <Text>Three Star</Text>
    </View>
)

const TwoStar = () => (
    <View style={{ padding: 10, backgroundColor: 'white' }}>
        <Text>Two Star</Text>
    </View>
)

const OneStar = () => (
    <View style={{ padding: 10, backgroundColor: 'white' }}>
        <Text>One Star</Text>
    </View>
)

const BookDetail = ({ navigation }) => { 
    return (
        <>
        <Header title='TITLE' showBack={true} showExit={false} navigation={navigation} />       
        <ScrollView style={styles.container}>
            <BaseBackground source={ require('../../assets/images/cover01.jpg') } style={{ padding: 0 }} >
                <LinearGradient colors={['transparent', 'transparent', 'transparent', 'white']} style={{ width: '100%', height: '100%', position: "absolute", bottom: 0 }} />
                <View style={{ elevation: 10, borderRadius: 10, backgroundColor: 'white', width: '90%', top: 20, alignSelf: "center", marginBottom: 50 }}>
                    <View style={{padding: 20}} >
                        <View style={{ flexDirection: "row" }}>
                            <View style={{ padding: 5, width: '50%' }}>
                                <Image source={ require('../../assets/images/cover01.jpg') } style={{ width: '100%', height: 200 }} />
                            </View>
                            <View style={{ padding: 10 }}>
                                <View style={{ marginBottom: 5 }}>
                                    <AppText size='bold'>Author(s): </AppText><AppText>Author(s):</AppText>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <AppText size='bold'>Year: </AppText><AppText>Year:</AppText>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <AppText size='bold'>Gender(s): </AppText><AppText>Gender(s):</AppText>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <AppText size='bold'>Rating: </AppText><AppText>Rating:</AppText>
                                </View>
                            </View>
                        </View>
                        
                        <View style={{ marginBottom: 5, padding: 5 }}>
                            <AppText size='bold'>Plot: </AppText>
                            <AppText style={{ textAlign: 'justify' }}>
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                            </AppText>
                        </View>

                        <View style={{ marginBottom: 5 }}>
                            <AppText size='bold'>Reviews: </AppText>
                            <Reviews.Navigator 
                                backBehavior="initialRoute"
                                tabBarOptions={{
                                    indicatorStyle: {
                                        backgroundColor: '#c62828'
                                    },
                                    //style: styles.tab,
                                }}
                                initialRouteName='Five Star'
                                screenOptions={({ route }) => ({
                                    tabBarLabel: ({ focused }) => {
                                        let name;
                                        switch (route.name) {
                                            case 'Five Star':   name = '5 ';   break;
                                            case 'Four Star':   name = '4 ';   break;
                                            case 'Three Star':  name = '3 '; break;
                                            case 'Two Star':    name = '2 ';  break;
                                            case 'One Star':    name = '1 '; break;
                                        }
                                        return <AppText style={{ color: '#c62828', width: 30 }} size={ focused && 'bold'}>{name} <Icon name='star' color='#c62828' size={14} /></AppText>
                                    },
                                })}
                            >
                                <Reviews.Screen name="Five Star" component={FiveStar} />
                                <Reviews.Screen name="Four Star" component={FourStar} />
                                <Reviews.Screen name="Three Star" component={ThreeStar} />
                                <Reviews.Screen name="Two Star" component={TwoStar} />
                                <Reviews.Screen name="One Star" component={OneStar} />
                            </Reviews.Navigator>
                        </View>
                        <View style={{marginVertical: 5}}>
                            <AppText size='bold'>Write your Opinion:</AppText>
                            <AppField
                                inputProps={{
                                    multiline: true,
                                    numberOfLines: 3,
                                }}
                                fieldStyle={{
                                    borderRadius: 10,
                                    padding: 10,
                                    marginVertical: 10
                                }} 
                            />
                            <View style={{ flexDirection: "row", justifyContent: "space-around",  }}>
                                <AppButton style={{ marginTop: -5, width: 50, height: 55 }} onPress={ ()=>console.log('Hola') } label={<Icon name='star' color='#c62828' size={35} />} />
                                <AppButton style={{ marginTop: -5, width: 50, height: 55 }} onPress={ ()=>console.log('Hola') } label={<Icon name='star' color='#c62828' size={35} />} />
                                <AppButton style={{ marginTop: -5, width: 50, height: 55 }} onPress={ ()=>console.log('Hola') } label={<Icon name='star-outline' color='#c62828' size={35} />} />
                                <AppButton style={{ marginTop: -5, width: 50, height: 55 }} onPress={ ()=>console.log('Hola') } label={<Icon name='star-outline' color='#c62828' size={35} />} />
                                <AppButton style={{ marginTop: -5, width: 50, height: 55 }} onPress={ ()=>console.log('Hola') } label={<Icon name='star-outline' color='#c62828' size={35} />} />
                            </View>
                            <AppButton 
                                onPress={()=>console.log('Hola')} 
                                style={{backgroundColor: '#c62828'}} 
                                label='Send'
                            />
                        </View>
                    </View>
                    <View style={{paddingBottom: 20}}>
                        <AppText style={{ paddingHorizontal: 20 }} size='bold'>Related Books: </AppText>
                        <View style={{ flexDirection: "row", flexWrap: "wrap", paddingHorizontal: 10 }}>
                            <Book style={{ width: '50%' }} navigation={navigation} image={ require('../../assets/images/cover01.jpg') }  />
                            <Book style={{ width: '50%' }} navigation={navigation} image={ require('../../assets/images/cover01.jpg') }  />
                            <Book style={{ width: '50%' }} navigation={navigation} image={ require('../../assets/images/cover01.jpg') }  />
                            <Book style={{ width: '50%' }} navigation={navigation} image={ require('../../assets/images/cover01.jpg') }  />
                        </View>
                    </View>
                </View>
            </BaseBackground>
        </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        //backgroundColor: 'white',
    }
})

export default BookDetail;