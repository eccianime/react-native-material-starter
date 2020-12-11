import React from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import { TouchableRipple } from 'react-native-paper';
import BaseBackground from '../../components/common/BaseBackground';
import { AppText } from '../../components/form';
import { Gender } from "../../components/cards";

const GenderScreen = ({ navigation }) => { 
    return (
        <ScrollView style={styles.container}>
            <View style={{ padding: 20 }}>
                <AppText style={styles.title} size='bold'>FICTION</AppText>
                <View style={styles.line} />
            </View>
            <Gender name='Horror' image={ require('../../assets/images/genre-01.jpg') }  />
            <Gender name='Western' image={ require('../../assets/images/genre-02.jpg') }  />
            <View style={{ padding: 20 }}>
                <AppText style={styles.genre} style={styles.title} size='bold'>NON-FICTION</AppText>
                <View style={styles.line} />
            </View>
            <Gender name='Tech' image={ require('../../assets/images/genre-03.jpg') }  />
            <Gender name='Sci-Fi' image={ require('../../assets/images/genre-04.jpg') }  />
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

export default GenderScreen;