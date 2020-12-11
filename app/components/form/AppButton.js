import React from 'react';
import { StyleSheet, View } from 'react-native';
import { TouchableRipple } from 'react-native-paper';
import colors from '../../config/colors';
import AppText from './AppText';

const AppButton = ({ style, onPress, label, containerStyle, labelStyle, disabled }) =>(
    <TouchableRipple
        disabled={disabled}
        onPress={onPress}
        rippleColor="rgba(0, 0, 0, .32)"
        style={[styles.button, containerStyle, { opacity: disabled ? 0.7 : 1 }]}
        borderless
        >
            <View style={style}>
                <AppText size='bold' style={[styles.label, labelStyle]}>{label}</AppText>
            </View>
    </TouchableRipple>    
)

const styles = StyleSheet.create({
    button: {
        borderRadius: 30,
        marginVertical: 5,
    },
    label: {
        paddingVertical: 10,
        color: colors.white,
        fontSize: 16,
        textAlign: "center",
    }
})

export default AppButton;
