import {ImageSourcePropType} from 'react-native';

export interface IAction {
  type: string;
  payload?: any;
}

export interface IFile {
  fileName: string;
  fileSize: string;
  image: ImageSourcePropType;
  status: string;
}

export interface IFileList {
  title: string;
  files: IFile[];
  action: string;
  emptyText: string;
}
