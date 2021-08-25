import * as React from 'react';
import { View, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


function HomeScreen() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
      </View>
    );
}

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
        <HomeStack.Screen name={RouteIdentifiers.home.name} component={HomeScreen}/>
    </HomeStack.Navigator>
    )
}

export { RootStackNavigator }
