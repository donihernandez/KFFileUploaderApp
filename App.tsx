import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {StyleSheet} from 'react-native';
import Home from './screens/Home';
import COLORS from './constants/colors';
import {Provider} from 'react-redux';
import {store} from './store';

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.wrapper}>
        <Home />
        <StatusBar barStyle="default" />
      </SafeAreaView>
    </Provider>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: COLORS.WHITE,
  },
});

export default App;
