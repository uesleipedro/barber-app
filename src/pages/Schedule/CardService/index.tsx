import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import styles from './styles';

const CardService = (props) => {
    const { title, dado } = props;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <View style={styles.card}>
                <View style={styles.bordaCard}></View>

                <View style={styles.firstDivision}>
                    <Text style={styles.firstDivisionText}>{dado[0].describe}</Text>
                    <Text style={styles.firstDivisionTextMinutes}>{dado[0].time}</Text>
                </View>

                <View style={styles.secondDivisionContainer}>
                    <View style={styles.secondDivision}>
                        <Text style={styles.secondDivisionText}>R$ {dado[0].price.replace('.', ',')}</Text>
                    </View>
                </View>

                <View style={styles.arrowDown}>
                    <Icon name='down' size={15} color='#FFF' />
                </View>
            </View>
        </View>
    );
}

export default CardService;