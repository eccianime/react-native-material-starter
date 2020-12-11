import React from 'react';
import { TextInput, View, StyleSheet } from 'react-native';
import { AppText } from '.';
import Icon from 'react-native-vector-icons/Ionicons';
import colors from '../../config/colors';

const AppField = ({ 
    labelStyle, fieldStyle, containerStyle,
    label, value, onChangeText,
    inputProps, labelProps,
    icon, placeholder
  }) =>(
    <View style={containerStyle}>
        { label && <AppText style={[styles.label, labelStyle]} {...labelProps} >{label}</AppText> }
        <View>
          <TextInput style={[styles.field, icon && { paddingLeft: 45 } , fieldStyle]} {...inputProps} value={value} onChangeText={onChangeText} placeholder={placeholder} />
          {   icon && <Icon name={icon} style={styles.icon} />  }
        </View>
    </View>
)

const styles = StyleSheet.create({
    field: {
      backgroundColor: colors.opaquegray,
      borderRadius: 30,
      paddingHorizontal: 20,
      paddingVertical: 6,
      fontFamily: 'NewJuneBook',
      color: colors.lightgray
    },
    icon: {
      position: 'absolute',
      top: 7,
      left: 13,
      fontSize: 25,
      color: colors.darkGray 
    },
    label: {
      paddingVertical: 10,
      color: colors.lightGray
    },
})

export default AppField;