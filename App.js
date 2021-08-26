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
