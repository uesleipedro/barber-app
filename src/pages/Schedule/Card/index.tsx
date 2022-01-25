import React from 'react';
import {
    View,
    StyleSheet,
    Text
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const Card = ({title}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <View style={styles.card}>
                <View style={styles.bordaCard}></View>

                <View style={styles.firstDivision}>
                    <Text style={styles.firstDivisionText}>Corte na máquina</Text>
                    <Text style={styles.firstDivisionText}>45 minutos</Text>
                </View>

                <View style={styles.secondDivisionContainer}>
                    <View style={styles.secondDivision}>
                        <Text style={styles.secondDivisionText}>R$ 25,90</Text>
                    </View>
                </View>

                <View style={styles.arrowDown}>
                    <Icon name='down' size={30} color='#FFF' />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        marginBottom: 20
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

export default Card