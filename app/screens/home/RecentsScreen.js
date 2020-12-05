import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, Dimensions, ScrollView } from 'react-native';
import { Card, Title, Paragraph } from "react-native-paper";
import { AppText } from '../../components/form';

const MyComponent = ({ title }) => (
    
    <Card style={{ elevation: 8 }}>
      <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
      <Card.Content>
        <Title>{title}</Title>
        <Paragraph>Card content</Paragraph>
      </Card.Content>
    </Card>
    
  );

const Recents = () => {
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
        let w = Dimensions.get('window').width;
        if( width !== w ){
            updateWidth(w)
        }
    }
    const [ active, changeActive ] = useState(0)
    return (
        <ScrollView>
            <AppText size='bold' style={styles.title}>Book of the Day</AppText>
            <ScrollView contentOffset={{x: active * width } } horizontal showsHorizontalScrollIndicator={false} >
                <View style={{padding: 30, width: isPortrait() ? width : width/2 }}><MyComponent title='Imma One' /></View>
                <View style={{padding: 30, width: isPortrait() ? width : width/2 }}><MyComponent title='Imma Two' /></View>
                <View style={{padding: 30, width: isPortrait() ? width : width/2 }}><MyComponent title='Imma Three' /></View>
                <View style={{padding: 30, width: isPortrait() ? width : width/2 }}><MyComponent title='Imma Four' /></View>
                <View style={{padding: 30, width: isPortrait() ? width : width/2 }}><MyComponent title='Imma Five' /></View>
                <View style={{padding: 30, width: isPortrait() ? width : width/2 }}><MyComponent title='Imma Six' /></View>
            </ScrollView>
            <AppText onPress={ () => changeActive( active+1 ) } size='bold' style={styles.title}>Last Added</AppText>
            <AppText onPress={ () => changeActive( active-1 ) } size='bold' style={styles.title}>Best Reviewed</AppText>
            <AppText size='bold' style={styles.title}>Last Reviewed</AppText>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    title: {
        textAlign: "center",
        fontSize: 16
    }
})

export default Recents;