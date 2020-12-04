import React from 'react';
import { View, TextInput, ImageBackground, StyleSheet } from 'react-native';
import { TouchableRipple } from 'react-native-paper';
import { AppText } from '../../components/form'

const SignIn = ({ navigation }) => {
  return (
    <>
      <ImageBackground source={ require('../../assets/images/background.jpg') } style={ styles.background }>
        <View style={styles.login}>
          <View>
            <AppText style={styles.label}>User:</AppText>
            <TextInput returnKeyType='next' enablesReturnKeyAutomatically={true} style={styles.field} />
          </View>
          <View>
            <AppText style={styles.label}>Password:</AppText>
            <TextInput secureTextEntry={true} style={styles.field} />
          </View>
          <View style={{marginTop: 30}}>
            <TouchableRipple
                onPress={ () => navigation.navigate( 'Main' ) }
                rippleColor="rgba(0, 0, 0, .32)"
                style={ styles.loginButton }
                >
                <AppText size='bold' style={[styles.label, styles.loginText]}>Enter</AppText>
            </TouchableRipple>
            <TouchableRipple
                onPress={ () => navigation.navigate( 'User Register' ) }
                rippleColor="rgba(0, 0, 0, .32)"
                style={[ styles.loginButton, { backgroundColor: '#7F0000' } ]}
                >
                <AppText size='bold' style={[styles.label, styles.loginText]}>Register</AppText>
            </TouchableRipple>
            <AppText onPress={ () => navigation.navigate( 'Forgot Password' ) } style={[styles.label, { textAlign: "right" }]}>Forgot Password?</AppText>
            <AppText size='bold' style={[styles.label, { textAlign: "center" }]}>V1.0</AppText>
          </View>
        </View>
      </ImageBackground>
    </>
  );
};

const styles = StyleSheet.create({
  field: {
    backgroundColor: '#DDD',
    borderRadius: 30,
    paddingHorizontal: 20,
    fontFamily: 'NewJuneBook',
    color: '#000'
  },
  label: {
    paddingVertical: 10,
    color: '#666'
  },
  login: {
    backgroundColor: '#FFF',
    width: '100%',
    maxWidth: 400,
    padding: 20,
    borderRadius: 10
  },
  loginButton: {
    backgroundColor: "#b71c1c",
    borderRadius: 30,
    marginBottom: 10,
  },
  loginText: {
    color: '#FFF',
    fontSize: 18,
    textAlign: "center",
  },
  background: {
    padding: 30,
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
  }
});

export default SignIn;
