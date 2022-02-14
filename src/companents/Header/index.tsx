import { useNavigation } from "@react-navigation/core";
import React, { } from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import Icon from 'react-native-vector-icons/AntDesign';

const Header = ({ navigationTarget, title }) => {
    const navigation = useNavigation();

    return (
        <View style={styles.header}>
            <TouchableOpacity
                style={styles.containerIcon}
                onPress={() => {
                    navigation.navigate(navigationTarget)
                }} >
                <Icon name='arrowleft' size={30} color='#FFF' />
            </TouchableOpacity>

            <View style={styles.containerText}>
                <Text
                    style={styles.textHeader}>
                    {title}
                </Text>
            </View>
        </View>
    );
}

export default Header;

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        height: 40,
        width: '100%',
        alignItems: 'center',
    },
    textHeader: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 20
    },
    containerIcon: {
        justifyContent: 'center',
        height: '100%',
        width: '20%'
    },
    containerText: {
        justifyContent: 'center',
        height: '100%',
        width: '80%'
    },
});