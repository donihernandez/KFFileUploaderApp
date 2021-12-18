import {IAction, IFile} from '../../constants/interfaces';
import {ImageSourcePropType} from 'react-native';

const initialUploadList: IFile[] = [
  {
    id: 1,
    fileName: 'Birthday 2020.png',
    fileSize: '2MB',
    status: 'waiting',
    image: require('../../assets/icons/file-thumbnail-image.png'),
  },
  {
    id: 2,
    fileName: 'Photo ID.zip',
    fileSize: '2MB',
    status: 'waiting',
    image: require('../../assets/icons/file-thumbnail-zip.png'),
  },
  {
    id: 3,
    fileName: 'Payroll 2020.xls',
    fileSize: '2MB',
    status: 'waiting',
    image: require('../../assets/icons/file-thumbnail-excel.png'),
  },
  {
    id: 4,
    fileName: 'Party 2020.png',
    fileSize: '6MB',
    status: 'waiting',
    image: require('../../assets/icons/file-thumbnail-image.png'),
  },
  {
    id: 5,
    fileName: 'License.pdf',
    fileSize: '2MB',
    status: 'waiting',
    image: require('../../assets/icons/file-thumbnail-pdf.png'),
  },
  {
    id: 6,
    fileName: 'Birthday 2021.png',
    fileSize: '5MB',
    status: 'waiting',
    image: require('../../assets/icons/file-thumbnail-image.png'),
  },
];

const initialState = {
  list: initialUploadList,
  uploading: {
    title: 'Uploading',
    action: 'CANCEL UPLOAD',
    file: {
      id: -1,
      fileName: '',
      fileSize: '',
      image: '' as ImageSourcePropType,
      status: '',
    },
    emptyText: 'No file on uploading yet',
  },
  nextUp: {
    title: 'Next Up',
    action: 'CANCEL All',
    files: [] as IFile[],
    emptyText: 'No file on queue yet.',
  },
  completed: {
    title: 'Completed',
    action: 'DISMISS All',
    files: [] as IFile[],
    emptyText: 'No file uploads completed yet.',
  },
  incomplete: {
    title: 'Incomplete Uploads',
    action: 'RETRY All',
    complementaryAction: 'DISMISS All',
    files: [] as IFile[],
    emptyText: 'No file uploads completed yet.',
  },
};

const FileList = (state = initialState, action: IAction) => {
  // UPLOAD ACTIONS
  if (action.type === 'FILL_NEXT_TO_UPLOAD') {
    const uploading = state.uploading;
    const nextUp = state.nextUp;
    uploading.file = action.payload.fileToUpload;
    nextUp.files = action.payload.nextUpList;

    state = {
      ...state,
      uploading: uploading,
      nextUp: nextUp,
    };
  }

  // CANCEL ACTIONS
  if (action.type === 'CANCEL_ON_UPLOAD') {
    const uploading = state.uploading;
    const cancelled = state.incomplete;

    uploading.file = {
      id: -1,
      fileName: '',
      fileSize: '',
      image: '' as ImageSourcePropType,
      status: '',
    };
    let file = action.payload.fileToCancel;
    file.status = 'cancelled';
    cancelled.files.push(file);

    state = {
      ...state,
      uploading: uploading,
      incomplete: cancelled,
    };
  }

  if (action.type === 'CANCEL_ON_NEXT_UP') {
    let nextUp = state.nextUp;
    const cancelled = state.incomplete;

    nextUp.files = nextUp.files.filter((file: IFile) => {
      if (file.id !== action.payload.fileToCancel.id) {
        return file;
      }
    });
    action.payload.fileToCancel.status = 'cancelled';
    cancelled.files.push(action.payload.fileToCancel);

    state = {
      ...state,
      nextUp: nextUp,
      incomplete: cancelled,
    };
  }

  if (action.type === 'CANCEL_ON_COMPLETED') {
    let completed = state.completed;

    completed.files = completed.files.filter((file: IFile) => {
      if (file.id !== action.payload.fileToCancel.id) {
        return file;
      }
    });

    state = {
      ...state,
      completed: completed,
    };
  }
  if (action.type === 'CANCEL_ON_INCOMPLETE') {
    let incomplete = state.incomplete;

    incomplete.files = incomplete.files.filter((file: IFile) => {
      if (file.id !== action.payload.fileToCancel.id) {
        return file;
      }
    });

    state = {
      ...state,
      incomplete: incomplete,
    };
  }

  if (action.type === 'CANCEL_ALL_ON_NEXT_UP') {
    let nextUp = state.nextUp;
    const cancelled = state.incomplete;

    cancelled.files = nextUp.files.map(file => {
      file.status = 'cancelled';
      return file;
    });

    nextUp.files = [] as IFile[];

    state = {
      ...state,
      nextUp: nextUp,
      incomplete: cancelled,
    };
  }

  if (action.type === 'DISMISS_ALL_COMPLETED') {
    let completed = state.completed;

    completed.files = [] as IFile[];

    state = {
      ...state,
      completed: completed,
    };
  }

  if (action.type === 'DISMISS_ALL_INCOMPLETE') {
    let incomplete = state.incomplete;

    incomplete.files = [] as IFile[];

    state = {
      ...state,
      incomplete: incomplete,
    };
  }

  // EDIT ACTIONS
  if (action.type === 'EDIT_UPLOAD_FILE_STATUS') {
    const uploading = state.uploading;
    uploading.file = action.payload.fileToUpload;
    state = {
      ...state,
      uploading: uploading,
    };
  }

  // ADD ACTIONS
  if (action.type === 'ADD_TO_COMPLETED') {
    const completed = state.completed;
    const completedFile: IFile = action.payload.fileToAddToCompleted;
    if (completed.files.indexOf(completedFile, completedFile.id) === -1) {
      completed.files.push(completedFile);
    }

    state = {
      ...state,
      completed: completed,
    };
  }

  if (action.type === 'ADD_TO_INCOMPLETE') {
    const incomplete = state.incomplete;
    const incompleteFile: IFile = action.payload.fileToAddToInComplete;
    if (incomplete.files.indexOf(incompleteFile, incompleteFile.id) === -1) {
      incomplete.files.push(incompleteFile);
    }

    state = {
      ...state,
      incomplete: incomplete,
    };
  }

  return state;
};

export default FileList;
