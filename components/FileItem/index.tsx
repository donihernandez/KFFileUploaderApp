import React from 'react';
import {
  ActivityIndicator,
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './styles';
import COLORS from '../../constants/colors';
import {IFile} from '../../constants/interfaces';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useDispatch} from 'react-redux';
import cancelAction from '../../store/actions/cancelAction';

/*
 * TODO
 *  The icons must change depending on the state of the file. If the file is uploading must be a blue spinner. If it's waiting, must be gray and without animation.
 *  And if the upload is cancelled must be a red icon.
 * */

export default function FileItem(file: IFile) {
  const dispatch = useDispatch();

  const {fileName, fileSize, image, status} = file;

  const cancelUpload = (fileToCancel: IFile) =>
    dispatch(cancelAction(fileToCancel));

  return (
    <View style={styles.listItem}>
      <TouchableOpacity onPress={() => cancelUpload(file)}>
        <Ionicons style={styles.closeIcon} name="close-sharp" size={20} />
      </TouchableOpacity>
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
          <Status status={status} />
        </View>
      </View>
    </View>
  );
}

interface IStatus {
  status: string;
}

const Status = ({status}: IStatus) => {
  if (status === 'waiting') {
    return (
      <View>
        <ActivityIndicator
          animating={true}
          hidesWhenStopped={false}
          size="small"
          color={COLORS.GRAY}
        />
        <Text style={styles.loadingText}>{status}</Text>
      </View>
    );
  } else if (status === 'uploading') {
    return (
      <View>
        <ActivityIndicator
          animating={true}
          hidesWhenStopped={false}
          size="small"
          color={COLORS.BLUE}
        />
        <Text style={styles.loadingText}>{status}</Text>
      </View>
    );
  } else if (status === 'cancelled') {
    return (
      <View>
        <Ionicons name="reload-sharp" size={24} color={COLORS.RED} />
        <Text style={styles.loadingText}>{status}</Text>
      </View>
    );
  } else {
    return (
      <View>
        <Ionicons name="check-mark-sharp" size={24} />
        <Text style={styles.loadingText}>{status}</Text>
      </View>
    );
  }
};
