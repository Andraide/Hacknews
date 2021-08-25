import * as React from 'react';
import { View, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '../screens/Home/Home'
import { SwipeList } from '../screens/SwipeLiist/SwipeList'
import { Web } from '../screens/WebView/WebView'


const RouteIdentifiers = {
    home: { name: 'home', key: 'home' },
    web: { name: 'web', key: 'web' }
}

const HomeStack = createNativeStackNavigator();
const RootStackNavigator = () => {
    return (
    <HomeStack.Navigator
        initialRouteName={RouteIdentifiers.home.name}
        headerMode={"none"}    
    >
        <HomeStack.Group
            screenOptions={{ headerShown: false }}
        >
            <HomeStack.Screen name={RouteIdentifiers.home.name} component={SwipeList}/>
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
