import React, { useState } from 'react';
import { View, ScrollView, Text, TouchableOpacity } from 'react-native';

import styles from './styles';

const CardHour = (props) => {
    const { hourList, setSelectedHour } = props;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Horário</Text>
            <ScrollView style={styles.card2} horizontal>

                {hourList.map(hour => (
                    <TouchableOpacity onPress={() => setSelectedHour(hour)} style={styles.hour}>
                        <Text style={styles.hourText}>{hour}</Text>
                    </TouchableOpacity>
                ))}

            </ScrollView>
        </View>
    );
}

export default CardHour;