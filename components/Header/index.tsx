import React, { useState } from "react";
import {Text, TouchableOpacity, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Hr from '../Divider';

import styles from './styles';
import COLORS from '../../constants/colors';
import {useDispatch, useSelector} from 'react-redux';

export default function Header() {
  const dispatch = useDispatch();
  // @ts-ignore
  const selector = useSelector(store => store.fileList);

  const [files, setFiles] = useState(selector.initialUploadList);
  const [sections, setSections] = useState(selector.sections);

  console.log(files);
  console.log(sections);

  const startUpload = () => {
    console.log(files);
    console.log(sections);
    /*  const files = selector.initialUploadList;
    const {sections} = selector;

    const uploadingFile = files.shift();
    uploadingFile.action = 'uploading';
    uploadingFile.status = 'encrypting';

    const nextToUpload = sections[1];
    nextToUpload.files = files;

    dispatch({type: 'UPLOAD', payload: files.shift()});
    dispatch({type: 'FILL_NEXT_TO_UPLOAD', payload: nextToUpload});*/
  };

  return (
    <View>
      <View style={styles.wrapper}>
        <View>
          <Text style={styles.title}>Manage Files</Text>
        </View>

        <TouchableOpacity style={styles.button} onPress={() => startUpload()}>
          <Ionicons name="add-sharp" size={30} style={styles.icon} />
        </TouchableOpacity>
      </View>
      <Hr lineColor={COLORS.LIGHT_GRAY} />
    </View>
  );
}
