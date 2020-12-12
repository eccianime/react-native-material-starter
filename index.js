import 'react-native-gesture-handler';
import * as React from 'react';
import { AppRegistry, StatusBar } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { name as appName } from './app.json';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './app/navigators/AuthNavigator';
import { Provider } from 'react-redux';
import store from './app/stores';

export default function Main() {
    return (
      <Provider store={store}>
        <NavigationContainer>
          <StatusBar hidden={true} />
          <PaperProvider>
            <AuthNavigator />
          </PaperProvider>
        </NavigationContainer>
      </Provider>
    );
}

AppRegistry.registerComponent(appName, () => Main);
