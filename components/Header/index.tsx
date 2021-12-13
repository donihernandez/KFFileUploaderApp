import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Hr from '../Divider';

import styles from './styles';
import COLORS from '../../constants/colors';
import {useDispatch, useSelector} from 'react-redux';
import {ApplicationState} from '../../store';

export default function Header() {
  const dispatch = useDispatch();
  const files = useSelector((state: ApplicationState) => state.fileList.list);

  const startUpload = () => {
    const fileToUpload = files.shift();
    dispatch({
      type: 'FILL_NEXT_TO_UPLOAD',
      payload: {
        fileToUpload: fileToUpload,
        sections: files,
      },
    });
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
