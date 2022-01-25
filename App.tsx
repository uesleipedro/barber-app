import React from 'react';
import {
  useColorScheme,
} from 'react-native';
import Router from './src/routes/Router';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <Router />
  );
};

export default App;
