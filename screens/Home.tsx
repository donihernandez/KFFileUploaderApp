import React from 'react';
import {View} from 'react-native';
import Header from '../components/Header';
import FileList from '../components/FileList';

export default function Home() {
  return (
    <View>
      <Header />
      <FileList />
    </View>
  );
}
