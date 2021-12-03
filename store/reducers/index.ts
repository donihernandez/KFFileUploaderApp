import {combineReducers} from 'redux';
import fileList from './fileReducer';

const appReducer = combineReducers({
  fileList,
});

export default appReducer;
