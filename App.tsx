import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import Home from './screens/Home';

const App = () => {
  return (
    <SafeAreaView>
      <Home />
      <StatusBar barStyle="default" />
    </SafeAreaView>
  );
};

export default App;
