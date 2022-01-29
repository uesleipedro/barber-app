import { View, Text, Modal, StyleSheet, Pressable, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import React from 'react';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const DATA = ['Primeiro', 'Segundo', 'Terceiro', 'Quarto', 'Quinto', 'Sexto', 'Setimo', 'Oitavo'];

const ModalPicker = (props) => {
    const { setIsModalVisible, setData, isModalVisible, data } = props;

    const onPressItem = (option) => {
        setIsModalVisible(false);
        setData(option)
    }

    const options = data.map((item, index) => {
        return (
            <TouchableOpacity
                style={styles.option}
                key={index}
                onPress={() => onPressItem(item.id)}
            >
                <Text style={styles.text}>
                    {item.describe}
                </Text>
            </TouchableOpacity>
        );
    });

    return (
        <Modal
            transparent={true}
            animationType="fade"
            visible={isModalVisible}
        >
            <TouchableOpacity
                onPress={() => setIsModalVisible(false)}
                style={styles.container}
            >
                <View style={[styles.modal, { width: width - 20, height: height / 2 }]}>
                    <ScrollView>
                        {options}
                    </ScrollView>
                </View>
            </TouchableOpacity>
        </Modal>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    modal: {
        backgroundColor: 'white',
        borderRadius: 10
    },
    option: {
        alignItems: 'flex-start'
    },
    text: {
        margin: 20,
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',
        opacity: 0.6
    }
});

export default ModalPicker;