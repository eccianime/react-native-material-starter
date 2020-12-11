import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { Surface, TouchableRipple } from "react-native-paper";
import BaseBackground from '../../components/common/BaseBackground';
import { AppText } from '../../components/form';
import Icon from 'react-native-vector-icons/Ionicons';
import colors from '../../config/colors';

const AuthorCard = ({ image, name, id, navigation, style }) => {
    const { width } = Dimensions.get('window');
    const newWidth = width/2-20;
    const onPress = () =>{
        console.log('Hola')
        //navigation.push('Author Detail', { id })
    }
    return(
        <View style={[ styles.container, { width: newWidth }, style]}>
            <TouchableRipple borderless onPress={onPress}>
                <BaseBackground style={ [styles.imageContainer, { height: newWidth-20 }] } source={ image } imageStyle={ styles.image } >
                    <View style={styles.titleContainer}>
                        <AppText size='bold' style={styles.title}>Homero</AppText>
                    </View>
                </BaseBackground>
            </TouchableRipple>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    imageContainer: {
        padding: 10,
        justifyContent: "flex-end",
    },
    image: {
        borderRadius: 10,
    },
    title: {
        elevation: 5,
        color: colors.white,
        textAlign: 'center',
    },
    titleContainer: {
        backgroundColor: 'rgba(0,0,0,.5)',
        borderRadius: 10,
        paddingHorizontal: 10,
        justifyContent: "center",
        height: 38
    }
})

export default AuthorCard;


/*{/*<View style={[ styles.container, { width: width/2-20 }, style]}>
            <TouchableOpacity onPress={onPress}>
                <Surface style={{ elevation: 10, borderRadius: 10, }}>
                    <BaseBackground source={ image } style={styles.imageContainer} imageStyle={styles.image}>
                        <View style={styles.titleContainer}>
                            <AppText size='bold' style={styles.title}>Homero</AppText>
                        </View>
                    </BaseBackground>
                </Surface>
            </TouchableOpacity>
    </View>*/