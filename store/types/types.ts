import {ImageSourcePropType} from 'react-native';

export type TFile = {
  fileName: string;
  fileSize: string;
  image: ImageSourcePropType;
  action: string;
  status: string;
};

export type Action = {
  type: string;
  payload?: any;
};

export type TFileList = {
  title: string;
  files: TFile[];
  action: string;
};
