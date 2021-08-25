import React, { Component } from 'react';
import { Text, View, SafeAreaView, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { WebView } from 'react-native-webview';

const widthScreen = Dimensions.get('window').width
const heightScreen = Dimensions.get('window').height

class Web extends Component {

    state = {
        width: widthScreen,
        height: heightScreen
    }

    componentDidMount() {
        console.log("Url on webview:", this.props.route.params.uri)
    }

    render() {

        return (
            this.props.route.params.uri ? 
            <WebView
                source= {{
                    uri: this.props.route.params.uri 
                }}
                style={{ marginTop: 20 }}
            >
            </WebView>
            : 
            <View style={styles.container}>
                <Text>Url is not provided</Text>
            </View>
        )
    }
}

export { Web }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    header: {
        backgroundColor: 'red',
        width: widthScreen,
        flex: 0.1,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    body: {
        flex: 0.9,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 32,
        color: 'black',
    }
})