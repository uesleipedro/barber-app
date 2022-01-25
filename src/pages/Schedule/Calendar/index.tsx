import React from 'react';
import {
    View,
    StyleSheet,
    Text,
    Dimensions
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

import { Calculations } from './Calculations';

const windowWidth = Dimensions.get('window').width;


const Calendar = ({title}) => {
    const calc = new Calculations();
    const daysInMonth = calc.days(10,2021);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <View style={styles.card}>
                <Text onPress={() =>{console.log(daysInMonth)}} style={styles.teste}>TESTE</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    teste:{width: '100%'},
    container:{
    },
    title: {
        color: '#FFF',
        fontWeight: 'bold',
        marginBottom: 5,
        fontSize: 14
    },
    card: {
        display: 'flex',
        flexDirection: 'row',
        height: 80,
        width: '100%',
        backgroundColor: '#242A38',
        elevation: 20
    },
    bordaCard: {
        backgroundColor: '#F9A54E',
        width: '5%',
        height: '100%'
    },
    firstDivision: {
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    firstDivisionText: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 14
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
        backgroundColor: '#A5744B'
    },
    secondDivisionText: {
        color: '#FFF',
        fontWeight: 'bold'
    },
    arrowDown: {
        width: '15%',
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default Calendar;