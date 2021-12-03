import React from 'react';
import {View} from 'react-native';
import Header from '../components/Header';
import FileList from '../components/FileList';
import {useSelector} from 'react-redux';
import { ApplicationState } from '../store';

export default function Home() {
  const fileList =useSelector((state: ApplicationState) => state.fileList);

  return (
    <View>
      <Header />
      {fileList.map((file: any, index: number) => {
        return (
          <FileList
            key={index}
            title={file.title}
            files={file.files}
            action={file.action}
            emptyText={file.emptyText}
          />
        );
      })}
    </View>
  );
}
