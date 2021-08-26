import * as React from 'react';
import { View, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '../screens/Home'
import { Web } from '../screens/WebView'

const RouteIdentifiers = {
    home: { name: 'home', key: 0 },
    web: { name: 'web', key: 1 }
}

const HomeStack = createNativeStackNavigator();
const RootStackNavigator = () => {
    return (
        <HomeStack.Navigator
            initialRouteName={RouteIdentifiers.home.name}
        >
            <HomeStack.Group
                screenOptions={{ headerShown: false }}
            >
                <HomeStack.Screen name={RouteIdentifiers.home.name} component={Home}/>
            </HomeStack.Group>
            <HomeStack.Group
                screenOptions={{ headerShown: true }}
            >
                <HomeStack.Screen name={RouteIdentifiers.web.name} component={Web} options={{ title: '' }}/>
            </HomeStack.Group>
        </HomeStack.Navigator>
    )
}

export { RootStackNavigator }
