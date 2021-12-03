import React, {useState} from 'react';
import {ActivityIndicator, Image, Text, View} from 'react-native';
import styles from './styles';
import COLORS from '../../constants/colors';
import {TFile} from '../../store/types/types';
import {useDispatch} from 'react-redux';

/*
 * TODO
 *  The icons must change depending on the state of the file. If the file is uploading must be a blue spinner. If it's waiting, must be gray and without animation.
 *  And if the upload is cancelled must be a red icon.
 * */

export default function FileItem({
  fileName,
  fileSize,
  action,
  image,
  status,
}: TFile) {
  const [state, setState] = useState(action);

  const dispatch = useDispatch();

  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <View>
          <Image source={image} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.fileName}>{fileName}</Text>
          <Text style={styles.fileSize}>{fileSize}</Text>
        </View>
      </View>
      <View>
        <View>
          <ActivityIndicator
            animating={true}
            hidesWhenStopped={false}
            size="small"
            color={COLORS.BLUE}
          />
          <Text style={styles.loadingText}>{status}</Text>
        </View>
      </View>
    </View>
  );
}
