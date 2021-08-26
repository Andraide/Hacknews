import { StyleSheet } from "react-native"


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderTopWidth: 1,
        borderColor: 'black'
    },
    row: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent',
        height: 100,
    },
    rowChild: {
        height: 100
    },
    textTitle: {
        fontWeight: 'bold',
        color: 'black',
        fontSize: 24
    },
    textAuthor: {
        color: 'black',
        fontSize: 16
    },
    itemContainer: { 
        backgroundColor:'transparent', 
        flex: 1, flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'center', 
        borderBottomWidth: 1, 
        borderColor: 'black', 
    },
    authorNTitleContainer: { 
        backgroundColor: 'transparent', 
        alignItems: 'flex-start', 
        justifyContent: 'flex-end', 
        height: 100, 
        marginLeft: 20, 
        marginRight: 20 
    },
    titleContainer: { 
        height: 60, 
        justifyContent: 'flex-end', 
        alignItems: 'flex-start' 
    },
    authorContainer: { 
        height: 40, 
        alignItems: 'flex-start', 
        justifyContent: 'flex-start' 
    },
    swipeItemContainer: { 
        position: 'absolute' 
    },
    underlayLeft: 
    {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        flexDirection: 'row',
    },
    deleteParentContainer: { 
        flex: 1,
        backgroundColor: 'red', 
        height: 100, 
        alignItems: 'center', 
        justifyContent: 'center', 
        borderTopLeftRadius: 8, 
        borderBottomLeftRadius: 8 
    },
    deleteMarginTop: { 
        flex: 1/3 
    },
    deleteContainer: { 
        flex: 1/3, 
        alignItems: 'center', 
        justifyContent: 'center' 
    },
    deleteText: { 
        fontSize: 16, 
        color: 'white' 
    },
    deleteMarginBottom: { 
        flex: 1/3 
    }
})