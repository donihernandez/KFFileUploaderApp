import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import Header from '../components/Header';
import FileList from '../components/FileList';
import {useSelector} from 'react-redux';
import {ApplicationState} from '../store';

export default function Home() {
  const sections = useSelector(
    (state: ApplicationState) => state.fileList.sections,
  );

  const [fileSections, setFileSections] = useState(sections);

  console.log(fileSections);

  useEffect(() => {
    setFileSections(sections);
  }, [sections]);

  return (
    <View>
      <Header />
      {Object.values(fileSections).map((section: any, index: number) => {
        return (
          <FileList
            key={index}
            title={section.title}
            files={section.files}
            action={section.action}
            emptyText={section.emptyText}
          />
        );
      })}
    </View>
  );
}
