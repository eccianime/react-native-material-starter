import React from 'react';
import { ImageBackground, StyleSheet } from 'react-native';

const BaseBackground = ({ children, style, source }) => (
    <ImageBackground source={ source || require('../../assets/images/background.jpg') } style={ [styles.background, style] }>
        {children}
    </ImageBackground>
)

const styles = StyleSheet.create({
    background: {
        padding: 30,
        flex: 1,
        resizeMode: "contain",
        justifyContent: "center",
        alignItems: "center",
    }
})

export default BaseBackground;