import React from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';

const Loader = () => (
    <View style={styles.loader}>
        <ActivityIndicator animating={true} color='#7F0000' size={50} />
    </View>
)

const styles = StyleSheet.create({
    loader: {
        borderRadius: 10, 
        opacity: 0.5, 
        zIndex: 1, 
        flex: 1, 
        justifyContent: "center", 
        alignItems: "center", 
        position: "absolute", 
        width: '99%', 
        height: '100%', 
        backgroundColor: 'white'
    }
})

export default Loader;