import React from 'react';
import { ImageBackground, StyleSheet } from 'react-native';

const BaseBackground = ({ children }) => (
    <ImageBackground source={ require('../../assets/images/background.jpg') } style={ styles.background }>
        {children}
    </ImageBackground>
)

const styles = StyleSheet.create({
    background: {
        padding: 30,
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        alignItems: "center",
    }
})

export default BaseBackground;