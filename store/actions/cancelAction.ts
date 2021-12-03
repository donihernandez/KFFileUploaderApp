import {Dispatch} from 'react';
import {IAction, IFile} from '../../constants/interfaces';

const cancelAction = (file: IFile) => {
  return (dispatch: Dispatch<IAction>) => {
    dispatch({type: 'ADD_TO_INCOMPLETE', payload: file});
  };
};

export default cancelAction;
