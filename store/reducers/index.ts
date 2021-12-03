import { combineReducers } from 'redux';
import FileList from './fileReducer';

const rootReducer = combineReducers({
  fileList : FileList,
  //some more reducer will come
});

export type ApplicationState = ReturnType<typeof rootReducer>;

export { rootReducer };


