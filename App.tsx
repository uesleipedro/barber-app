import React from 'react';
import {
  Text,
  useColorScheme,
  View,
} from 'react-native';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View>
      <Text>TESTE</Text>
    </View>

  );
};

export default App;
