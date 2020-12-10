import React from 'react';
import { View } from 'react-native';
import { BaseBackground, Loader } from '../../../components/common';
import { AppButton, AppField, AppText } from '../../../components/form';
import { styles } from './styles';

const RegisterView = ({ navigation, userData, changeData, registerUser, isLoading }) => (
    <BaseBackground>
      <View>
        { isLoading && <Loader /> }
        <View style={ styles.whiteCard }>
          <AppText size='bold' style={styles.title}>Fill in the fields to register in the app</AppText>
          <AppField label='Full Name:' value={userData.fullName} onChangeText={ text => changeData({...userData, fullName: text })} icon='person-circle-outline' />
          <AppField label='E-mail:' value={userData.email} onChangeText={ text => changeData({...userData, email: text })} icon='mail-open-outline' />
          <AppField label='Password:' value={userData.password} onChangeText={ text => changeData({...userData, password: text })}  inputProps={{secureTextEntry:true}} icon='lock-closed' />
          <AppField label='Repeat Password:' value={userData.rpassword} onChangeText={ text => changeData({...userData, rpassword: text })}  inputProps={{secureTextEntry:true}} icon='lock-closed' />
          <View style={{paddingTop: 20}}>
            <AppButton onPress={registerUser} label='Register' style={styles.registerButton} />
            <AppText onPress={ () => navigation.navigate( 'Sign In' ) } style={styles.goBack}>Go Back</AppText>
          </View>
        </View>
      </View>
    </BaseBackground>
)

export default RegisterView;