import React from 'react';
import { View, StyleSheet } from 'react-native';
import { BaseBackground } from '../../components/common';
import { AppButton, AppField, AppText } from '../../components/form'

const Forgot = ({ navigation }) => {
  return (
      <BaseBackground>
        <View style={styles.whiteCard}>
          <AppText size='bold' style={[styles.title, {fontSize: 15, textTransform: 'uppercase'}]}>Forgot your password?</AppText>
          <AppText style={styles.title}>Just input your mail and we'll sent you one of our own!</AppText>
          <AppField icon='mail-open-outline' />
          <AppButton label='Get New Password' onPress={ () => navigation.navigate( 'Password Sent' ) } style={styles.forgotButton}  />
          <AppText onPress={ () => navigation.navigate( 'Sign In' ) } style={styles.forgotLabel}>Go Back</AppText>
        </View>
      </BaseBackground>
  );
};

const styles = StyleSheet.create({
  forgotButton: {
    backgroundColor: '#7F0000'
  },
  forgotLabel: {
    textAlign: "right",
    color: '#666',
  },
  title: {
    paddingVertical: 10,
    color: '#000',
    textAlign: "center"
  },
  whiteCard: {
    backgroundColor: '#FFF',
    width: '100%',
    maxWidth: 400,
    padding: 20,
    borderRadius: 10
  },
});

export default Forgot;
