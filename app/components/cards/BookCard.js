import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { Surface } from "react-native-paper";
import BaseBackground from '../common/BaseBackground';
import { AppText } from '../form';
import Icon from 'react-native-vector-icons/Ionicons';
import colors from '../../config/colors';

const BookCard = ({ image, title, gender, year, author, id, navigation, style }) => {
    const { width } = Dimensions.get('window');
    const onPress = () =>{
        navigation.push('Book Detail', { id })
    }
    return(
        <View style={[ styles.container, { width: width/2-10 }, style]}>
            <TouchableOpacity onPress={onPress}>
                <Surface style={{ elevation: 10 }}>
                    <BaseBackground source={ image } style={styles.image}>
                    <TouchableOpacity style={styles.iconButton} onPress={()=>console.log('Add to Favorite')}>
                        <Icon name='heart-outline' style={styles.icon} />
                    </TouchableOpacity>
                    </BaseBackground>
                    <View style={styles.containerDescriptor}>
                        <AppText size='bold' style={styles.title}>Author</AppText>
                        <AppText style={styles.subTitle}>Gender (Year)</AppText>
                    </View>
                </Surface>
            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    containerDescriptor: {
        padding: 7,
    },
    iconButton: {
        position: "absolute",
        top: 5,
        right: 5,
    },
    icon: {
        color: colors.secondary,
        fontSize: 25,
    },
    image: { 
        height: 200 
    },
    subTitle: {
        textAlign: 'center',
        fontStyle: "italic"
    },
    title: {
        paddingBottom: 5, 
        textAlign: 'center',
    },
})

export default BookCard;