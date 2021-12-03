import {Dispatch} from 'react';
import {IFile, IAction} from '../../constants/interfaces';
import {calculateUploadProbability} from '../../constants/utils';

const uploadAction = (file: IFile) => {
  return (dispatch: Dispatch<IAction>) => {
    const success = calculateUploadProbability();
    if (success <= 0.75) {
      dispatch({type: 'ADD_TO_COMPLETED', payload: file});
    } else {
      dispatch({type: 'ADD_TO_INCOMPLETE', payload: file});
    }
  };
};

export default uploadAction;
