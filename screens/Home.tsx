import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import Header from '../components/Header';
import Uploading from '../components/Sections/Uploading';
import NextUp from '../components/Sections/NextUp';
import Completed from '../components/Sections/Completed';
import Incomplete from '../components/Sections/Incomplete';

export default function Home() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Header />
        <Uploading />
        <NextUp />
        <Completed />
        <Incomplete />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
