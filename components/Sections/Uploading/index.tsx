import React, {useCallback, useEffect, useState} from 'react';
import {Text, TouchableWithoutFeedback, View} from 'react-native';
import styles from '../styles/styles';
import FileItem from '../../FileItem';
import COLORS from '../../../constants/colors';
import Hr from '../../Divider';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useDispatch, useSelector} from 'react-redux';
import {ApplicationState} from '../../../store';
import {calculateUploadProbability} from '../../../constants/utils';

export default function Uploading() {
  const dispatch = useDispatch();
  const selector = useSelector((state: ApplicationState) => state.fileList);

  const [section, setSection] = useState(selector.uploading);
  const [nextUp] = useState(selector.nextUp);
  const {title, action, file, emptyText} = section;
  const [isCancelling, setIsCancelling] = useState(selector.isCancelling);
  const [expanded, setExpanded] = useState(false);

  const upload = useCallback(async () => {
    file.status = 'encrypting';
    dispatch({
      type: 'EDIT_UPLOAD_FILE_STATUS',
      payload: {
        fileToUpload: file,
      },
    });
    let probabilities: any = await calculateUploadProbability();
    if (probabilities && !isCancelling) {
      if (probabilities <= 0.75) {
        file.status = 'completed';
        dispatch({
          type: 'ADD_TO_COMPLETED',
          payload: {
            fileToAddToCompleted: file,
          },
        });
      } else {
        let fileToCancel = Object.assign({}, file);
        fileToCancel.status = 'cancelled';
        dispatch({
          type: 'ADD_TO_INCOMPLETE',
          payload: {
            fileToAddToInComplete: fileToCancel,
          },
        });
      }

      const fileToUpload = nextUp.files.shift();
      dispatch({
        type: 'FILL_NEXT_TO_UPLOAD',
        payload: {
          fileToUpload: fileToUpload,
          nextUpList: nextUp.files,
        },
      });
    }
  }, [dispatch, file, isCancelling, nextUp.files]);

  useEffect(() => {
    setSection(selector.uploading);
    setIsCancelling(selector.isCancelling);
    if (file && file.fileName !== '') {
      setExpanded(true);
      upload().then(() => console.log('Uploading task finished successfully!'));
    } else {
      setExpanded(false);
    }
  }, [file, selector.isCancelling, selector.uploading, upload]);

  const handleActions = () => {
    dispatch({
      type: 'CANCEL_ON_UPLOAD',
      payload: {
        fileToCancel: file,
      },
    });
  };

  const ShowFiles = () => {
    return expanded ? (
      <View>
        <FileItem file={file} isCancelling={setIsCancelling} />
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
          <TouchableWithoutFeedback onPress={() => handleActions()}>
            <Text style={styles.action}>{action}</Text>
          </TouchableWithoutFeedback>
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
      {file && file.fileName !== '' ? (
        <ShowFiles />
      ) : (
        <Text style={styles.emptyText}>{emptyText}</Text>
      )}
    </View>
  );
}
