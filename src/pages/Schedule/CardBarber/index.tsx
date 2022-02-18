import React from 'react';
import { View, Text, Image } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

import styles from './styles';

const CardBarber = (props) => {
    const { title, dado } = props;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <View style={styles.card}>
                <View style={styles.bordaCard}></View>

                <View style={styles.firstDivision}>
                    <Image
                        style={styles.tinyLogo}
                        source={require('../../../assets/avatar.png')}
                    />
                </View>

                <View style={styles.secondDivisionContainer}>
                    <Text style={styles.secondDivisionText}>{dado[0].name}</Text>
                </View>

                <View style={styles.arrowDown}>
                    <Icon name='down' size={15} color='#FFF' />
                </View>
            </View>
        </View>
    );
}

export default CardBarber;