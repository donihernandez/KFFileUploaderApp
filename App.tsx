import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {StyleSheet} from 'react-native';
import Home from './screens/Home';
import COLORS from './constants/colors';

const App = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <Home />
      <StatusBar barStyle="default" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: COLORS.WHITE,
  },
});

export default App;
