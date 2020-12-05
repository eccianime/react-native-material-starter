import React from 'react';
import { StyleSheet } from 'react-native';
import { TouchableRipple } from 'react-native-paper';
import AppText from './AppText';

const AppButton = ({ style, onPress, label }) =>(
    <TouchableRipple
        onPress={onPress}
        rippleColor="rgba(0, 0, 0, .32)"
        style={[styles.button, style]}
        >
        <AppText size='bold' style={styles.label}>{label}</AppText>
    </TouchableRipple>    
)

const styles = StyleSheet.create({
    button: {
        borderRadius: 30,
        marginVertical: 5,
    },
    label: {
        paddingVertical: 10,
        color: '#FFF',
        fontSize: 16,
        textAlign: "center",
    }
})

export default AppButton;
