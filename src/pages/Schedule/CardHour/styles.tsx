import { StyleSheet, Dimensions } from 'react-native';

const Width = Dimensions.get('window').width;

export default StyleSheet.create({
    container: {
        marginTop: 20,
    },
    title: {
        color: '#FFF',
        opacity: 0.5,
        fontWeight: 'bold',
        marginBottom: 5,
        fontSize: 14
    },
    card2: {
        display: 'flex',
        flexDirection: 'row',
        height: 50,
        width: Width,
        backgroundColor: '#242A38',
        elevation: 20,
    },
    hour: {
        backgroundColor: 'orange',
        width: 80,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        marginRight: 10
    },
    hourText: {
        color: '#FFF',
        fontWeight: 'bold'
    }
});