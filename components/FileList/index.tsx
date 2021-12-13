import React from 'react';
import {Text, TouchableWithoutFeedback, View} from 'react-native';
import styles from './styles';
import FileItem from '../FileItem';
import COLORS from '../../constants/colors';
import Hr from '../Divider';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {IFile, IFileList} from '../../constants/interfaces';
import {useDispatch} from 'react-redux';

/*
 * TODO
 * Implementation of an accordion component. I was researching looking for a typescript-friendly library without success.
 * To do this task is necessary to create a TouchableOpacity component that executes the animation of toggling the accordion.
 * It's not hard to implement but it will take me some time.
 * */
export default function FileList(fileList: IFileList) {
  const {title, action, files, emptyText} = fileList;

  const dispatch = useDispatch();

  const handleActions = () => {
    if (action === 'CANCEL UPLOAD') {
      files.forEach(file => {
        console.log('Cancelling');
      });
    }
    if (action === 'RETRY All') {
      files.forEach(file => {
        console.log('Retrying');
      });
    }
    if (action === 'DISMISS ALL') {
      dispatch({type: 'DISMISS_ALL', payload: null});
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.accordionContainer}>
        <View>
          <Text style={styles.title}>{title}</Text>
        </View>
        <View style={styles.accordionActions}>
          <TouchableWithoutFeedback onPress={() => handleActions()}>
            <Text style={styles.action}>{action}</Text>
          </TouchableWithoutFeedback>
          <Ionicons name="chevron-up-sharp" size={24} />
        </View>
      </View>
      <Hr lineColor={COLORS.LIGHT_GRAY} />
      {files.length > 0 ? (
        <View style={styles.fileList}>
          {files &&
            files?.map((file: IFile, index: number) => {
              return (
                <FileItem
                  key={index}
                  fileName={file.fileName}
                  fileSize={file.fileSize}
                  image={file.image}
                  status={file.status}
                />
              );
            })}
        </View>
      ) : (
        <Text style={styles.emptyText}>{emptyText}</Text>
      )}
    </View>
  );
}
