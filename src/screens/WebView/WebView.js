import React, { Component } from 'react';
import { Text, View, SafeAreaView, TouchableOpacity, StyleSheet, Dimensions, ActivityIndicator } from 'react-native';
import { WebView } from 'react-native-webview';
import { styles } from './WebViewStyles';

const widthScreen = Dimensions.get('window').width
const heightScreen = Dimensions.get('window').height

class Web extends Component {

    state = {
        width: widthScreen,
        height: heightScreen,
        loading: true,
    }

    
    render() {

        return (
            this.props.route.params.uri ? 
            <View style={styles.webContainer}>
                <WebView
                    onLoad={() => this.setState({ loading: false })}
                    source= {{
                        uri: this.props.route.params.uri 
                    }}
                    style={{ marginTop: 20 }}
                >
                </WebView>
                {this.state.loading && (
                    <ActivityIndicator
                        style={[styles.activityIndicator, {top: this.state.height / 2, left: this.state.width / 2 }]}
                        size="large"
                    />
                )}
            </View>
            
            : 
            <View style={styles.container}>
                <Text style={styles.text}>Url is not provided</Text>
            </View>
        )
    }
}

export { Web }
