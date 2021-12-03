import React from 'react';
import {
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import styles from './styles';
import FileItem from '../FileItem';
import COLORS from '../../constants/colors';
import Hr from '../Divider';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {TFile, TFileList} from '../../store/types/types';
import fileList from '../../store/reducers/fileReducer';

/*
 * TODO
 * Implementation of an accordion component. I was researching looking for a typescript-friendly library without success.
 * To do this task is necessary to create a TouchableOpacity component that executes the animation of toggling the accordion.
 * It's not hard to implement but it will take me some time.
 * */
export default function FileList({title, action, files, emptyText}: TFileList) {
  return (
    <View style={styles.container}>
      <View style={styles.accordionContainer}>
        <View>
          <Text style={styles.title}>{title}</Text>
        </View>
        <View style={styles.accordionActions}>
          <TouchableWithoutFeedback>
            <Text style={styles.action}>{action}</Text>
          </TouchableWithoutFeedback>
          <TouchableOpacity>
            <Ionicons name="chevron-up-sharp" size={24} />
          </TouchableOpacity>
        </View>
      </View>
      <Hr lineColor={COLORS.LIGHT_GRAY} />
      {fileList.length > 0 ? (
        <View style={styles.fileList}>
          {files?.map((file: TFile, index: number) => {
            return (
              <FileItem
                key={index}
                fileName={file.fileName}
                fileSize={file.fileSize}
                action={file.action}
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
