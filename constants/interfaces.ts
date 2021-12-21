import {ImageSourcePropType} from 'react-native';

export interface IAction {
  type: string;
  payload?: any;
}

export interface IFile {
  id: number;
  fileName: string;
  fileSize: string;
  image: ImageSourcePropType;
  status: string;
}
