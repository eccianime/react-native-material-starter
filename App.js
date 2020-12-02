import React from 'react';
import { View, Text, StatusBar, StyleSheet } from 'react-native';

const App = () => {
  return (
    <>
      <StatusBar hidden={true} />
      <View style={ styles.view }>
          <Text>React Native Base</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  view: {
    padding: 30,
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default App;
