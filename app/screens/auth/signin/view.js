import React from 'react';
import { View } from 'react-native';
import { BaseBackground, Loader } from '../../../components/common';
import { AppButton, AppField, AppText } from '../../../components/form';
import { styles } from './styles'

const SignInView = ({ navigation, logInUser, userData, changeData, isLoading }) => (
    <BaseBackground>
        <View>
            { isLoading && <Loader />}
            <View style={styles.whiteCard}>
            <AppText size='bold' style={styles.title}>Sign in with your credentials</AppText>
            <AppField label='Email:' value={userData.email} onChangeText={ text => changeData({...userData, email: text })} icon='mail-open-outline' />
            <AppField label='Password:' value={userData.password} onChangeText={ text => changeData({...userData, password: text })}  inputProps={{secureTextEntry:true}} icon='lock-closed' />
            <View style={{paddingTop: 20}}>
                <AppButton onPress={logInUser} label='Enter' style={styles.loginButton} />
                <AppButton onPress={ () => navigation.navigate( 'Register' ) } label='Register' style={styles.registerButton} />
                <AppText onPress={ () => navigation.navigate( 'Forgot' ) } style={[styles.label, { textAlign: "right" }]}>Forgot Password?</AppText>
                <AppText size='bold' style={[styles.label, { textAlign: "center" }]}>V1.0</AppText>
            </View>
            </View>
        </View>
    </BaseBackground>
)

export default SignInView;