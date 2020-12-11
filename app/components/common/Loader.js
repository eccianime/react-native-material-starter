import React from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import colors from '../../config/colors';

const Loader = () => (
    <View style={styles.loader}>
        <View style={styles.overlay}></View>
        <ActivityIndicator animating={true} color={colors.primary} size={50} />
    </View>
)

const styles = StyleSheet.create({
    loader: {
        zIndex: 1, 
        flex: 1, 
        justifyContent: "center", 
        alignItems: "center", 
        position: "absolute", 
        width: '99%', 
        height: '100%', 
    },
    overlay: {
        backgroundColor: colors.white,
        opacity: .5,
        width: '100%',
        height: '100%',
        position: "absolute",
        borderRadius: 10,
    }
})

export default Loader;