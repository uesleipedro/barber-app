import { useNavigation } from '@react-navigation/core';
import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    StatusBar,
    TouchableOpacity,
    SafeAreaView,
    Dimensions,
    Modal,
    Alert,
    Pressable
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

import Card from './Card';
import Calendar from './Calendar';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Header = ({ navigationTarget, title }) => {
    const navigation = useNavigation<any>();

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

const Schedule = ({ navigation }) => {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <SafeAreaView style={styles.constainer}>
            <StatusBar backgroundColor='#242A38' barStyle="light-content" />
            <Header
                navigationTarget='Home'
                title=""
            />

            <Text style={styles.title}>Agendamento</Text>

            <View style={styles.body}>
                <Card title="Selecione o serviço" />
                <Card title="Selecione o barbeiro" />

                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        Alert.alert("Modal has been closed.");
                        setModalVisible(!modalVisible);
                    }}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <TouchableOpacity
                                style={[styles.button]}
                                onPress={() => setModalVisible(!modalVisible)}
                            >
                                <Text style={styles.textStyle}>Hide Modal</Text>
                                <Text style={styles.textStyle}>Hide Modal</Text>
                                <Text style={styles.textStyle}>Hide Modal</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
                <Pressable
                    onPress={() => setModalVisible(true)}
                >
                    <Calendar title="Selecione a data e hora" />
                </Pressable>
            </View>
        </SafeAreaView>
    );
}

export default Schedule;

const styles = StyleSheet.create({
    constainer: {
        flex: 1,
        height: windowHeight,
        width: windowWidth,
        backgroundColor: '#242A38',
        paddingHorizontal: 10
    },
    body: {
        flex: 1,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        marginTop: 10,
        justifyContent: 'flex-start',
        gap: 10
    },
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
    title: {
        color: '#FFF',
        fontSize: 28,
        fontWeight: 'bold',
        marginTop: 10
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
    modalText: {
        marginBottom: 15,
        textAlign: "center"
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
});