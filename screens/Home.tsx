import React from 'react';
import {View} from 'react-native';
import Header from '../components/Header';
import FileList from '../components/FileList';
import {useSelector} from 'react-redux';

export default function Home() {
  // @ts-ignore
  const fileList = useSelector(store => store.fileList.sections);

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
