import React from 'react';
import { View, Text, Button } from 'react-native';

const Home = ({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button 
                title='Agendamento' 
                onPress={() => navigation.navigate('Schedule')}
            />
        </View>
    );
}

export default Home;