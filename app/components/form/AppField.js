import React from 'react';
import { TextInput, View, StyleSheet } from 'react-native';
import { AppText } from '.';
import Icon from 'react-native-vector-icons/Ionicons';

const AppField = ({ 
    labelStyle, fieldStyle, 
    label, value, onChangeText,
    inputProps, labelProps,
    icon,    
  }) =>(
    <View>
        { label && <AppText style={[styles.label, labelStyle]} {...labelProps} >{label}</AppText> }
        <View>
          <TextInput style={[styles.field, icon && { paddingLeft: 45 } , fieldStyle]} {...inputProps} value={value} onChangeText={onChangeText} />
          {   icon && <Icon name={icon} style={styles.icon} />  }
        </View>
    </View>
)

const styles = StyleSheet.create({
    field: {
      backgroundColor: '#DDD',
      borderRadius: 30,
      paddingHorizontal: 20,
      paddingVertical: 6,
      fontFamily: 'NewJuneBook',
      color: '#000'
    },
    icon: {
      position: 'absolute',
      top: 7,
      left: 13,
      fontSize: 25,
      color: '#333'
    },
    label: {
        paddingVertical: 10,
        color: '#666'
    },
})

export default AppField;