import React, {useEffect, useState} from 'react';
import {Text, TouchableWithoutFeedback, View} from 'react-native';
import styles from '../styles/styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useDispatch, useSelector} from 'react-redux';
import {IFile} from '../../../constants/interfaces';
import COLORS from '../../../constants/colors';
import Hr from '../../Divider';
import FileItem from '../../FileItem';
import {ApplicationState} from '../../../store';

export default function Completed() {
  const selector = useSelector((state: ApplicationState) => state.fileList);
  const [section, setSection] = useState(selector.completed);
  const {title, action, files, emptyText} = section;

  const dispatch = useDispatch();

  const handleActions = () => {
    dispatch({type: 'DISMISS_ALL_COMPLETED', payload: null});
  };

  useEffect(() => {
    setSection(selector.completed);
  }, [selector.completed]);

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
        <View>
          {files &&
            files?.map((file: IFile) => {
              return (
                <FileItem
                  key={file.id}
                  id={file.id}
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
