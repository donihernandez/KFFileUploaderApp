import {Action, TFile} from '../types/types';
import {ImageSourcePropType} from 'react-native';

interface IFile {
  fileName: string;
  fileSize: string;
  image: ImageSourcePropType;
  action: string;
  status: string;
}

export interface IAction {
  type: string;
  payload?: any;
};

export interface IFileList {
  title?: string;
  files?: TFile[];
  action?: string;
  emptyText: string;
};

const initialUploadList: IFile[] = [
  {
    fileName: 'Birthday 2020.png',
    fileSize: '2MB',
    status: 'waiting',
    action: 'waiting',
    image: require('../../assets/icons/file-thumbnail-image.png'),
  },
  {
    fileName: 'Photo ID.zip',
    fileSize: '2MB',
    status: 'waiting',
    action: 'waiting',
    image: require('../../assets/icons/file-thumbnail-zip.png'),
  },
  {
    fileName: 'Payroll 2020.xls',
    fileSize: '2MB',
    status: 'waiting',
    action: 'waiting',
    image: require('../../assets/icons/file-thumbnail-excel.png'),
  },
  {
    fileName: 'Birthday 2020.png',
    fileSize: '2MB',
    status: 'waiting',
    action: 'waiting',
    image: require('../../assets/icons/file-thumbnail-image.png'),
  },
  {
    fileName: 'License.pdf',
    fileSize: '2MB',
    status: 'waiting',
    action: 'waiting',
    image: require('../../assets/icons/file-thumbnail-pdf.png'),
  },
  {
    fileName: 'Birthday 2020.png',
    fileSize: '2MB',
    status: 'waiting',
    action: 'waiting',
    image: require('../../assets/icons/file-thumbnail-image.png'),
  },
];

const initialState = {
  uploading: {},
  initialUploadList,
  sections: [
    {
      title: 'Uploading',
      action: 'CANCEL UPLOAD',
      files: [],
      emptyText: '',
    },
    {
      title: 'Next Up',
      action: 'Cancel All',
      files: [],
      emptyText: '',
    },
    {
      title: 'Completed',
      action: 'Cancel All',
      files: [],
      emptyText: 'No file uploads completed yet.',
    },
  ],
};

const FileList = (state = initialState, action: Action) => {
  if (action.type === 'UPLOAD') {
    state = {
      ...state,
      uploading: action.payload,
    };
  }

  if (action.type === 'FILL_NEXT_TO_UPLOAD') {
    state = {
      ...state,
      sections: action.payload,
    };
  }

  return state;
};

export default FileList;
