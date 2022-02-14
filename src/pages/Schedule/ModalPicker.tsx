import {
    View,
    Text,
    Modal,
    StyleSheet,
    TouchableOpacity,
    Dimensions,
    ScrollView,
} from 'react-native';
import React, { useState } from 'react';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const ModalPicker = (props) => {
    const { setIsModalVisible, setValue, isModalVisible, data, entryParameters } = props;

    const onPressItem = (option) => {
        setIsModalVisible(false);
        setValue(option)
    }

    const options = data.map((item, index) => {
        return (
            <TouchableOpacity
                style={styles.option}
                key={index}
                onPress={() => onPressItem(item[entryParameters.id])}
            >
                <View style={styles.avatar}></View>
                <Text style={styles.text}>

                    {item[`${entryParameters.value}`]}
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
                <View style={[styles.modal, { width: width - 20, height: height * 0.9 }]}>
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
        justifyContent: 'center',
        backgroundColor: '#000000AA'
    },
    modal: {
        backgroundColor: '#242A38',
        borderRadius: 10
    },
    option: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        borderWidth: 1,
        borderBottomColor: 'grey',
        paddingHorizontal: 5
    },
    text: {
        margin: 20,
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white'
    },
    avatar: {
        backgroundColor: '#2F414F',
        width: 50,
        height: 50,
        borderRadius: 25
    }
});

export default ModalPicker;