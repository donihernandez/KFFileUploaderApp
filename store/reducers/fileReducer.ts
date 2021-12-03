import {IAction, IFile, IFileList} from '../../constants/interfaces';

const initialUploadList: IFile[] = [
  {
    fileName: 'Birthday 2020.png',
    fileSize: '2MB',
    status: 'waiting',
    image: require('../../assets/icons/file-thumbnail-image.png'),
  },
  {
    fileName: 'Photo ID.zip',
    fileSize: '2MB',
    status: 'waiting',
    image: require('../../assets/icons/file-thumbnail-zip.png'),
  },
  {
    fileName: 'Payroll 2020.xls',
    fileSize: '2MB',
    status: 'waiting',
    image: require('../../assets/icons/file-thumbnail-excel.png'),
  },
  {
    fileName: 'Birthday 2020.png',
    fileSize: '2MB',
    status: 'waiting',
    image: require('../../assets/icons/file-thumbnail-image.png'),
  },
  {
    fileName: 'License.pdf',
    fileSize: '2MB',
    status: 'waiting',
    image: require('../../assets/icons/file-thumbnail-pdf.png'),
  },
  {
    fileName: 'Birthday 2020.png',
    fileSize: '2MB',
    status: 'waiting',
    image: require('../../assets/icons/file-thumbnail-image.png'),
  },
];

const initialState = {
  uploading: {},
  list: initialUploadList,
  sections: {
    uploading: {
      title: 'Uploading',
      action: 'CANCEL UPLOAD',
      files: [],
      emptyText: 'No file on uploading yet',
    },
    nextUp: {
      title: 'Next Up',
      action: 'CANCEL All',
      files: [],
      emptyText: 'No file on queue yet.',
    },
    completed: {
      title: 'Completed',
      action: 'DISMISS All',
      files: [],
      emptyText: 'No file uploads completed yet.',
    },
    incomplete: {
      title: 'Incomplete',
      action: 'RETRY All',
      complementaryAction: 'DISMISS All',
      files: [],
      emptyText: 'No file uploads completed yet.',
    },
  },
};

const FileList = (state = initialState, action: IAction) => {
  if (action.type === 'UPLOAD') {
    state = {
      ...state,
      uploading: action.payload,
    };
  }

  if (action.type === 'FILL_NEXT_TO_UPLOAD') {
    const fileSections: any = state.sections;
    fileSections.nextUp.files = action.payload.files;
    fileSections.uploading.files.push(action.payload.toUpload);

    state = {
      ...state,
      sections: fileSections,
    };

    console.log(state);
  }

  if (action.type === 'ADD_TO_COMPLETED') {
    const completedFilesSection: IFileList = state.sections.completed;
    let uploadingSection: IFile[] = state.sections.uploading.files;

    uploadingSection = uploadingSection.filter(file => {
      if (file.fileName !== action.payload.fileName) {
        return file;
      }
    });
    completedFilesSection.files?.push(action.payload);

    const fileSections: any = state.sections;
    fileSections.completed = completedFilesSection;
    fileSections.uploading.files = uploadingSection;

    state = {
      ...state,
      sections: fileSections,
    };
  }

  if (action.type === 'ADD_TO_INCOMPLETE') {
    const incompleteFilesSection: IFileList = state.sections.incomplete;
    incompleteFilesSection.files.push(action.payload);

    const fileSections: any = state.sections;
    fileSections.incomplete = incompleteFilesSection;

    state = {
      ...state,
      sections: fileSections,
    };
  }

  if (action.type === 'DISMISS_ALL') {
    const fileSections: any = state.sections;
    fileSections.incomplete = [];
    state = {
      ...state,
      sections: fileSections,
    };
  }

  return state;
};

export default FileList;
