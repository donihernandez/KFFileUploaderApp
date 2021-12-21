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

export default function Incomplete() {
  const selector = useSelector((state: ApplicationState) => state.fileList);
  const [section, setSection] = useState(selector.incomplete);
  const {title, action, complementaryAction, files, emptyText} = section;
  const [expanded, setExpanded] = useState(false);

  const dispatch = useDispatch();

  const handleRetryAction = () => {
    const fileToUpload = files.shift();
    dispatch({
      type: 'FILL_NEXT_TO_UPLOAD',
      payload: {
        fileToUpload: fileToUpload,
        nextUpList: files,
      },
    });
  };

  const handleDismissAction = () => {
    dispatch({type: 'DISMISS_ALL_INCOMPLETE', payload: null});
  };

  useEffect(() => {
    setSection(selector.incomplete);
    if (section.files.length > 0) {
      setExpanded(true);
    } else {
      setExpanded(false);
    }
  }, [section.files.length, selector.incomplete]);

  const ShowFiles = () => {
    return expanded ? (
      <View>
        {files &&
          files?.map((file: IFile) => {
            return <FileItem key={file.id} file={file} />;
          })}
      </View>
    ) : (
      <Text />
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.accordionContainer}>
        <View>
          <Text style={styles.title}>{title}</Text>
        </View>
        <View style={styles.accordionActions}>
          {expanded ? (
            <Ionicons
              name="chevron-up-sharp"
              size={24}
              onPress={() => setExpanded(!expanded)}
            />
          ) : (
            <Ionicons
              name="chevron-down-sharp"
              size={24}
              onPress={() => setExpanded(!expanded)}
            />
          )}
        </View>
      </View>
      <Hr lineColor={COLORS.LIGHT_GRAY} />
      <View style={styles.incompleteActions}>
        <TouchableWithoutFeedback onPress={() => handleRetryAction()}>
          <Text style={styles.action}>{action}</Text>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => handleDismissAction()}>
          <Text style={styles.action}>{complementaryAction}</Text>
        </TouchableWithoutFeedback>
      </View>
      {files.length > 0 ? (
        <ShowFiles />
      ) : (
        <Text style={styles.emptyText}>{emptyText}</Text>
      )}
    </View>
  );
}
