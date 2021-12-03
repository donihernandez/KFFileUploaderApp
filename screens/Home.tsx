import React from 'react';
import {View} from 'react-native';
import Header from '../components/Header';
import FileItem from '../components/FileItem';

export default function Home() {
  return (
    <View>
      <Header />
      <FileItem />
    </View>
  );
}
