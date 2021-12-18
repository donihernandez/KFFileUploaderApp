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

export default function FileItem(file: IFile) {
  const dispatch = useDispatch();

  const {fileName, fileSize, image, status} = file;

  const cancelUpload = () => {
    let fileToCancel = Object.assign({}, file);
    fileToCancel.status = 'cancelled';
    if (file.status === 'encrypting') {
      dispatch(
        {
        type: 'CANCEL_ON_UPLOAD',
        payload: {
          fileToCancel: fileToCancel,
        },
      });
    } else if (file.status === 'waiting') {
      file.status = 'cancelled';
      dispatch({
        type: 'CANCEL_ON_NEXT_UP',
        payload: {
          fileToCancel: fileToCancel,
        },
      });
    } else if (file.status === 'completed') {
      file.status = 'cancelled';
      dispatch({
        type: 'CANCEL_ON_COMPLETED',
        payload: {
          fileToCancel: fileToCancel,
        },
      });
    } else {
      dispatch({
        type: 'CANCEL_ON_INCOMPLETE',
        payload: {
          fileToCancel: fileToCancel,
        },
      });
    }
  };

  return (
    <View style={styles.listItem}>
      <TouchableOpacity onPress={() => cancelUpload()}>
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
      <View style={styles.centered}>
        <ActivityIndicator
          animating={true}
          hidesWhenStopped={false}
          size="small"
          color={COLORS.GRAY}
        />
        <Text style={styles.loadingText}>{status}</Text>
      </View>
    );
  } else if (status === 'encrypting') {
    return (
      <View style={styles.centered}>
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
      <View style={styles.centered}>
        <Ionicons name="reload-sharp" size={24} color={COLORS.RED} />
        <Text style={styles.loadingText}>{status}</Text>
      </View>
    );
  } else if (status === 'failed') {
    return (
      <View style={styles.centered}>
        <Ionicons name="reload-sharp" size={24} color={COLORS.RED} />
        <Text style={styles.loadingText}>{status}</Text>
      </View>
    );
  } else {
    return (
      <View style={styles.centered}>
        <Ionicons
          name="checkmark-circle-sharp"
          size={24}
          color={COLORS.GREEN}
        />
        <Text style={styles.loadingText}>{status}</Text>
      </View>
    );
  }
};
