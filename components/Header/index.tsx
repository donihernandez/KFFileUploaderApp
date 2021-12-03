import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Hr from '../Divider';

import styles from './styles';
import COLORS from '../../constants/colors';
import {useDispatch, useSelector} from 'react-redux';
import {ApplicationState} from '../../store';
import {IFile} from '../../constants/interfaces';
import {calculateUploadProbability} from '../../constants/utils';

export default function Header() {
  const dispatch = useDispatch();
  const selector = useSelector((state: ApplicationState) => state.fileList);

  const [files, setFiles] = useState(selector.list);

  const startUpload = (
    nextFile: IFile = files[0],
    nextUpList: IFile[] = files,
  ) => {
    const toUpload = files[0];

    const updatedFileList = files;
    updatedFileList.splice(0, 1);

    setFiles(updatedFileList);

    /*  const success = calculateUploadProbability();*/

    dispatch({
      type: 'FILL_NEXT_TO_UPLOAD',
      payload: {
        toUpload,
        files,
      },
    });

    /* if (success <= 0.75) {
      dispatch({type: 'ADD_TO_COMPLETED', payload: toUpload});
    } else {
      dispatch({type: 'ADD_TO_INCOMPLETE', payload: toUpload});
    }*/

    if (files.length > 0) {
      nextFile = files[0];
      updatedFileList.splice(0, 1);
      setFiles(updatedFileList);

      startUpload(nextFile, nextUpList);
    }
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
