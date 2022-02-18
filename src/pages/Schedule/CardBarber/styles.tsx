import { StyleSheet, Dimensions } from "react-native";

const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

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
    card: {
        display: 'flex',
        flexDirection: 'row',
        height: 70,
        width: '100%',
        backgroundColor: '#242A38',
        elevation: 10
    },
    bordaCard: {
        backgroundColor: '#F9A54E',
        width: '1%',
        height: '100%'
    },
    firstDivision: {
        width: '20%',
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingLeft: 10
    },
    firstDivisionText: {
        color: '#FFF',
        opacity: 0.9,
        fontWeight: 'bold',
        fontSize: 12
    },
    firstDivisionTextMinutes: {
        color: '#FFF',
        opacity: 0.4,
        fontWeight: 'bold',
        fontSize: 12
    },
    secondDivisionContainer: {
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    secondDivision: {
        width: '100%',
        height: '70%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#A5744B',
        borderRadius: 10
    },
    secondDivisionText: {
        color: '#FFF',
        fontWeight: 'bold'
    },
    arrowDown: {
        width: '15%',
        justifyContent: 'center',
        alignItems: 'center'
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
    },
    tinyLogo: {
        width: 50,
        height: 50,
    },
});