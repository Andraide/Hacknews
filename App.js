import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { RootStackNavigator } from './src/_navigation/rootNavigator' 


function App() {
  return (
    <NavigationContainer>
      <RootStackNavigator/>
    </NavigationContainer>
  );
}

export default App;

/*
////TO AQDD////
marginTop: DeviceInfo.hasNotch() ? heightPercentage('3') : heightPercentage('0')
*/