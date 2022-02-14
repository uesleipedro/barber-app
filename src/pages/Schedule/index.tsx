import { useNavigation } from '@react-navigation/core';
import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    StatusBar,
    TouchableOpacity,
    SafeAreaView,
    Dimensions,
    ScrollView
} from 'react-native';
import CalendarStrip from 'react-native-calendar-strip';
import 'moment';
import 'moment/locale/pt-br';

import Card, { CardHour } from './CardService';
import CardBarber from './CardBarber';
import ModalPicker from './ModalPicker';
import { api } from '../../services/api';
import axios from 'axios';
import Header from '../../companents/Header';

const windowWidth = Dimensions.get('window').width;
const serviceVoid = { id: 0, describe: 'Clique para selecionar', time: '', price: '' };
const barberVoid = { id: 0, name: 'Clique para selecionar', };
const customDatesStyles = [];
customDatesStyles.push({
    dateNameStyle: { color: 'white' },
    dateNumberStyle: { color: 'white' },
    highlightDateNameStyle: { color: 'pink' },
    highlightDateNumberStyle: { color: 'white' },
    dateContainerStyle: { backgroundColor: `#294045` },
});

const Schedule = ({ navigation }) => {
    const [selectedDate, setSelectedDate] = useState<Date>(new Date());
    const [isModalServiceVisible, setIsModalServiceVisible] = useState<boolean>(false);
    const [isModalBarberVisible, setIsModalBarberVisible] = useState<boolean>(false);
    const [chooseData, setChooseData] = useState(0);
    const [chooseProfessional, setChooseProfessional] = useState(0);
    const [services, setServicesData] = useState<any[]>([serviceVoid]);
    const [professional, setProfessionalData] = useState<any[]>([barberVoid]);

    const setService = option => setChooseData(option);
    const setProfessional = option => setChooseProfessional(option);

    useEffect(() => {
        fetchServices();
    }, []);

    const getService = () => api.get('service');
    const getBarber = () => api.get('professional');

    const fetchServices = async () => {

        await axios.all([getService(), getBarber()])
            .then(axios.spread(function (resService, resBarber) {
                setServicesData([...services, ...resService.data]);
                setProfessionalData([...professional, ...resBarber.data]);
            }))
            .catch(function (error) {
                console.error(error.message);
            });
    }

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
                        onPress={() => setIsModalServiceVisible(true)}
                    >
                        <Card
                            title="Selecione o serviço"
                            dado={services.filter(service => service.id === Number(chooseData))}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => setIsModalBarberVisible(true)}
                    >
                        <CardBarber
                            title="Selecione o barbeiro"
                            dado={professional.filter(professional => professional.id === Number(chooseProfessional))}
                        />
                    </TouchableOpacity>

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
                            selectedDate={selectedDate}
                            onDateSelected={(date: any) =>
                                setSelectedDate(date)
                            }
                        />
                    </View>
                    <CardHour title='Horário' />

                </View>

                <ModalPicker
                    isModalVisible={isModalServiceVisible}
                    setIsModalVisible={setIsModalServiceVisible}
                    setValue={setService}
                    data={services}
                    entryParameters={{ id: 'id', value: 'describe' }}
                />

                <ModalPicker
                    isModalVisible={isModalBarberVisible}
                    setIsModalVisible={setIsModalBarberVisible}
                    setValue={setProfessional}
                    data={professional}
                    entryParameters={{ id: 'id', value: 'name' }}
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