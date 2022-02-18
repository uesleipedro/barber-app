import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000000AA'
    },
    modal: {
        backgroundColor: '#242A38',
        borderRadius: 10
    },
    option: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        borderWidth: 1,
        borderBottomColor: 'grey',
        paddingHorizontal: 5
    },
    text: {
        margin: 20,
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white'
    },
    avatar: {
        backgroundColor: '#2F414F',
        width: 50,
        height: 50,
        borderRadius: 25
    }
});