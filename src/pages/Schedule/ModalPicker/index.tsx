import {
    View,
    Text,
    Modal,
    TouchableOpacity,
    Dimensions,
    ScrollView,
} from 'react-native';
import React from 'react';
import styles from './styles';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const ModalPicker = (props) => {
    const { setIsModalVisible, setValue, isModalVisible, data, entryParameters } = props;

    const onPressItem = (option) => {
        setIsModalVisible(false);
        setValue(option)
    };

    const options = data.map((item, index) => {
        if (item[entryParameters.id] === 0) return;

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

export default ModalPicker;