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
    ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import CalendarStrip from 'react-native-calendar-strip';
import 'moment';
import 'moment/locale/pt-br';

import Card, { CardHour } from './Card';
import CardBarber from './Card/CardBarber';
import ModalPicker from './ModalPicker';

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

const corte = [
    {
        id: 1,
        describe: 'Corte na máquina',
        time: '30 minutos',
        price: '25.90'
    },
    {
        id: 2,
        describe: 'Corte na tesoura',
        time: '45 minutos',
        price: '35.90'
    }
];

const Schedule = ({ navigation }) => {
    const [selectedDate, setSelectedDate] = useState<Date>(new Date());
    const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
    const [chooseData, setChooseData] = useState(Number(corte[0].id));

    const setData = (option) => {
        setChooseData(option);
    }

    let customDatesStyles = [];
    customDatesStyles.push({
        dateNameStyle: { color: 'white' },
        dateNumberStyle: { color: 'white' },
        highlightDateNameStyle: { color: 'pink' },
        highlightDateNumberStyle: { color: 'white' },
        dateContainerStyle: { backgroundColor: `#294045` },
    });



    return (
        <SafeAreaView style={styles.constainer}>
            <ScrollView>
                <StatusBar backgroundColor='#242A38' barStyle="light-content" />
                <Header
                    navigationTarget='Home'
                    title=""
                />

                <Text style={styles.title}>Agendamento</Text>

                <View style={styles.body}>

                    <TouchableOpacity
                        onPress={() => setIsModalVisible(true)}
                    >
                        <Card
                            title="Selecione o serviço"
                            dado={corte.filter(a => a.id === Number(chooseData))}
                        />
                    </TouchableOpacity>
                    <CardBarber title="Selecione o barbeiro" />

                    <View>
                        <CalendarStrip
                            scrollable
                            calendarAnimation={{ type: 'sequence', duration: 30 }}
                            daySelectionAnimation={{ type: 'background', duration: 300, highlightColor: '#9265DC' }}
                            style={{ height: 100, width: windowWidth - 10, paddingTop: 20, paddingBottom: 10, marginTop: 20, elevation: 20 }}
                            calendarHeaderStyle={{ color: 'white' }}
                            calendarColor={'#242A38'}
                            dateNumberStyle={{ color: 'white' }}
                            dateNameStyle={{ color: 'white' }}
                            iconContainer={{ flex: 0.1 }}
                            customDatesStyles={customDatesStyles}
                            highlightDateNameStyle={{ color: 'white' }}
                            highlightDateNumberStyle={{ color: 'white' }}
                            highlightDateContainerStyle={{ backgroundColor: '#F9A54E' }}
                            useIsoWeekday={false}
                        />
                    </View>
                    <CardHour title='Horário' />

                </View>

                <ModalPicker
                    isModalVisible={isModalVisible}
                    setIsModalVisible={setIsModalVisible}
                    setData={setData}
                    data={corte}
                />

            </ScrollView>
            <View style={styles.finishPayment}>
                <Text style={styles.priceText}>R$ 25,90</Text>
                <TouchableOpacity style={styles.scheduleButtom}>
                    <Text style={styles.buttonText}>Agendar</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView >
    );
}

export default Schedule;

const styles = StyleSheet.create({
    constainer: {
        flex: 1,
        width: windowWidth,
        backgroundColor: '#242A38',
        paddingHorizontal: 10
    },
    body: {
        flex: 1,
        width: windowWidth,
        alignItems: 'center',
        marginTop: 10,
        justifyContent: 'flex-start'
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
    calendarContainer: {
        marginTop: 20
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
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    },

    priceText: {
        color: 'white',
        fontSize: 26,
        fontWeight: 'bold'
    },
    finishPayment: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10
    },
    scheduleButtom: {
        height: 50,
        width: 100,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F9A54E',
        borderRadius: 30,
        elevation: 10
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    }
});