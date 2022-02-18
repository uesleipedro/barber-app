import { StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get('window').width;

export default StyleSheet.create({
    constainer: {
        flex: 1,
        width: windowWidth,
        backgroundColor: '#242A38',
        paddingHorizontal: 10
    },
    body: {
        flex: 1,
        width: windowWidth,
        alignItems: 'center',
        marginTop: 10,
        justifyContent: 'flex-start'
    },

    title: {
        color: '#FFF',
        fontSize: 28,
        fontWeight: 'bold',
        marginTop: 10
    },
    calendarContainer: {
        marginTop: 20
    },


    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    priceText: {
        color: 'white',
        fontSize: 26,
        fontWeight: 'bold'
    },
    finishPayment: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10
    },
    scheduleButtom: {
        height: 50,
        width: 100,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F9A54E',
        borderRadius: 30,
        elevation: 10
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    }
});

export const customDatesStyles = [
    {
        dateNameStyle: { color: 'white' },
        dateNumberStyle: { color: 'white' },
        highlightDateNameStyle: { color: 'pink' },
        highlightDateNumberStyle: { color: 'white' },
        dateContainerStyle: { backgroundColor: `#294045` },
    }
];
