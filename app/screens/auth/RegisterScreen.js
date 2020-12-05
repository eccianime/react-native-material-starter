import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';

import { BaseBackground } from '../../components/common';
import { AppText, AppButton, AppField } from '../../components/form';

const Register = ({ navigation }) => {
  const [ userData, changeData ] = useState({
    fullName: '',
    nickName: '',
    email: '',
    password: '',
    rpassword: ''
  })
  const registerUser = () => {
    console.log( 'userDocument2' )
  }
  return (
      <BaseBackground>
        <View style={ styles.whiteCard }>
          <AppText size='bold' style={styles.title}>Fill in the fields to register in the app</AppText>
          <AppField label='Full Name:' value={userData.fullName} onChangeText={ text => changeData({...userData, fullName: text })} icon='person-circle-outline' />
          <AppField label='User Name:' value={userData.nickName} onChangeText={ text => changeData({...userData, nickName: text })} icon='person-circle-outline' />
          <AppField label='E-mail:' value={userData.email} onChangeText={ text => changeData({...userData, email: text })} icon='mail-open-outline' />
          <AppField label='Password:' value={userData.password} onChangeText={ text => changeData({...userData, password: text })}  inputProps={{secureTextEntry:true}} icon='lock-closed' />
          <AppField label='Repeat Password:' value={userData.rpassword} onChangeText={ text => changeData({...userData, rpassword: text })}  inputProps={{secureTextEntry:true}} icon='lock-closed' />
          <View style={{paddingTop: 20}}>
            <AppButton onPress={() => registerUser() } label='Register' style={styles.registerButton} />
            <AppText onPress={ () => navigation.navigate( 'Sign In' ) } style={styles.goBack}>Go Back</AppText>
          </View>
        </View>
      </BaseBackground>
  );
};

const styles = StyleSheet.create({
  goBack: {
    paddingVertical: 10,
    textAlign: "right",
    color: '#666',
  },
  registerButton: {
    backgroundColor: '#7F0000'
  },
  title: {
    paddingVertical: 10,
    color: '#000',
    textAlign: "center",
    fontSize: 15, 
    textTransform: 'uppercase'
  },
  whiteCard: {
    backgroundColor: '#FFF',
    width: '100%',
    maxWidth: 400,
    padding: 20,
    borderRadius: 10,
  },
});

export default Register;
