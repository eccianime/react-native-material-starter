import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { Surface } from "react-native-paper";
import BaseBackground from '../../components/common/BaseBackground';
import { AppText } from '../../components/form';

const BookCard = ({ image, title, gender, year, id, navigation }) => {
    const [ width, updateWidth ] = useState(0);
    
    const isPortrait = () => {
        const dim = Dimensions.get("screen")
        return dim.height >= dim.width
    }

    useEffect( ()=>{
        checkWidth()
        return Dimensions.addEventListener("change", () => {
            checkWidth()
        })
    }, [] )
    const checkWidth = () =>{
        let { width:newWidth } = Dimensions.get('window');
        if( width !== newWidth ){
            updateWidth( newWidth )
        }
    }
    const onPress = () =>{
        navigation.navigate('Book Detail', { id })
    }
    return(
        <View style={[ styles.container, { width: isPortrait() ? width/2-10 : width/3-10 }]}>
            <TouchableOpacity onPress={onPress}>
                <Surface style={{ elevation: 10 }}>
                    <BaseBackground source={ image } style={styles.image} />
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