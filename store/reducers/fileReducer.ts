import {Action, TFileList} from '../types/types';

const initialUploadList: TFileList = [
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
  nextUploadList: [initialUploadList],
  completedList: [],
  incompleteList: [],
};

const fileList = (state = initialState, action: Action) => {
  if (action.type === 'UPLOAD') {
    state = {
      ...state,
      uploading: action.payload,
    };
  }

  if (action.type === 'FILL_NEXT_TO_UPLOAD') {
    state = {
      ...state,
      nextUploadList: action.payload,
    };
  }

  return state;
};

export default fileList;
