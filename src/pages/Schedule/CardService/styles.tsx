import { StyleSheet } from "react-native";

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
        width: '60%',
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
        width: '20%',
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
});