import { StyleSheet } from "react-native"


export const styles = StyleSheet.create({
    webContainer: {
        flex: 1,
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontSize: 16,
        color: 'black',
    },
    activityIndicator: { 
        position: "absolute", 
    }
})