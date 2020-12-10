import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { BaseBackground, Loader } from '../../components/common';
import { AppButton, AppField, AppText } from '../../components/form'

const SignIn = ({ navigation }) => {
  const [ userData, changeData ] = useState({
    nickname: '',
    password: ''
  })
  return (
      <BaseBackground>
        <View>
          { true && <Loader />}
          <View style={styles.whiteCard}>
            <AppText size='bold' style={styles.title}>Sign in with your credentials</AppText>
            <AppField label='User:' value={userData.nickname} onChangeText={ text => changeData({...userData, nickname: text })} icon='person-circle-outline' />
            <AppField label='Password:' value={userData.password} onChangeText={ text => changeData({...userData, password: text })}  inputProps={{secureTextEntry:true}} icon='lock-closed' />
            <View style={{paddingTop: 20}}>
              <AppButton onPress={ () => navigation.navigate( 'Main' ) } label='Enter' style={styles.loginButton} />
              <AppButton onPress={ () => navigation.navigate( 'Register' ) } label='Register' style={styles.registerButton} />
              <AppText onPress={ () => navigation.navigate( 'Forgot' ) } style={[styles.label, { textAlign: "right" }]}>Forgot Password?</AppText>
              <AppText size='bold' style={[styles.label, { textAlign: "center" }]}>V1.0</AppText>
            </View>
          </View>
        </View>
      </BaseBackground>
  );
};

const styles = StyleSheet.create({
  label: {
    paddingVertical: 10,
    color: '#666'
  },
  loginButton: {
    backgroundColor: "#b71c1c",
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
    padding: 20,
    borderRadius: 10
  },
});

export default SignIn;
