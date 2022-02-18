import { useNavigation } from '@react-navigation/core';
import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    StatusBar,
    TouchableOpacity,
    SafeAreaView,
    Dimensions,
    ScrollView
} from 'react-native';
import CalendarStrip from 'react-native-calendar-strip';
import 'moment';
import 'moment/locale/pt-br';

import Card from './CardService';
import CardHour from './CardHour';
import CardBarber from './CardBarber';
import ModalPicker from './ModalPicker';
import { api } from '../../services/api';
import axios from 'axios';
import Header from '../../companents/Header';
import styles, { customDatesStyles } from './styles';

const Schedule = ({ navigation }) => {
    const [selectedDate, setSelectedDate] = useState<Date>(new Date());
    const [isModalServiceVisible, setIsModalServiceVisible] = useState<boolean>(false);
    const [isModalBarberVisible, setIsModalBarberVisible] = useState<boolean>(false);
    const [chooseData, setChooseData] = useState(0);
    const [chooseProfessional, setChooseProfessional] = useState(0);
    const [services, setServicesData] = useState<any[]>([
        { id: 0, describe: 'Clique para selecionar', time: '', price: '' }
    ]);
    const [professional, setProfessionalData] = useState<any[]>([
        { id: 0, name: 'Clique para selecionar' }
    ]);
    const [hourList, setHourList] = useState<string[]>(['09:00:00', '10:00:00', '11:00:00']);
    const [selectedHour, setSelectedHour] = useState<string>();
    const windowWidth = Dimensions.get('window').width;

    console.log(selectedHour)

    const setService = option => setChooseData(option);
    const setProfessional = option => setChooseProfessional(option);

    useEffect(() => {
        const getService = () => api.get('service');
        const getBarber = () => api.get('professional');

        axios.all([getService(), getBarber()])
            .then(axios.spread(function (resService, resBarber) {
                setServicesData([...services, ...resService.data]);
                setProfessionalData([...professional, ...resBarber.data]);
            }))
            .catch(function (error) {
                console.error(error.message);
            });
    }, []);

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

                    <CardHour
                        hourList={hourList}
                        setSelectedHour={setSelectedHour}
                    />

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

