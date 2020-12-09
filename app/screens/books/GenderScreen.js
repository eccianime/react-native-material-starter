import React from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import { TouchableRipple } from 'react-native-paper';
import BaseBackground from '../../components/common/BaseBackground';
import { AppText } from '../../components/form';

const Gender = ({ navigation }) => { 
    return (
        <ScrollView style={styles.container}>
            <View style={{ padding: 20 }}>
                <AppText style={styles.title} size='bold'>FICTION</AppText>
                <View style={styles.line} />
            </View>
            <TouchableRipple borderless onPress={ ()=>console.log('Hola') } style={{marginBottom: 20}}>
                <BaseBackground style={{ height: 100 }} source={ require('../../assets/images/genre-01.jpg') } >
                    <AppText size='bold' style={styles.genre}>Horror</AppText>
                </BaseBackground>
            </TouchableRipple>
            <TouchableRipple borderless onPress={ ()=>console.log('Hola') } style={{marginBottom: 20}}>
                <BaseBackground style={{ height: 100 }} source={ require('../../assets/images/genre-02.jpg') } >
                    <AppText size='bold' style={styles.genre}>Western</AppText>
                </BaseBackground>
            </TouchableRipple>
            <View style={{ padding: 20 }}>
                <AppText style={styles.genre} style={styles.title} size='bold'>NON-FICTION</AppText>
                <View style={styles.line} />
            </View>
            <TouchableRipple borderless onPress={ ()=>console.log('Hola') } style={{marginBottom: 20}}>
                <BaseBackground style={{ height: 100 }} source={ require('../../assets/images/genre-03.jpg') } >
                    <AppText size='bold' style={styles.genre}>Tech</AppText>
                </BaseBackground>
            </TouchableRipple>
            <TouchableRipple borderless onPress={ ()=>console.log('Hola') } style={{marginBottom: 20}}>
                <BaseBackground style={{ height: 100 }} source={ require('../../assets/images/genre-04.jpg') } >
                    <AppText size='bold' style={styles.genre}>Sci-Fi</AppText>
                </BaseBackground>
            </TouchableRipple>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
    },
    genre: {
        color: 'white',
        fontSize: 30,
    },
    line: {
        backgroundColor: '#c62828', 
        height: 2,
        marginTop: 5,
        width: 50,
    },
    title: {
        fontSize: 20
    }
})

export default Gender;