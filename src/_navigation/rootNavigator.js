import * as React from 'react';
import { View, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '../screens/Home/Home'


const RouteIdentifiers = {
    home: { name: 'home', key: 'home' }
}

const HomeStack = createNativeStackNavigator();
const RootStackNavigator = () => {
    return (
    <HomeStack.Navigator
        initialRouteName={RouteIdentifiers.home.name}
        headerMode={"none"}    
    >
        <HomeStack.Screen name={RouteIdentifiers.home.name} component={Home}/>
    </HomeStack.Navigator>
    )
}

export { RootStackNavigator }
