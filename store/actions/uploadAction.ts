import {IFile} from '../../constants/interfaces';

const uploadAction = (file: IFile, nextUpList: IFile[]) => {
  return (dispatch: any) => {
    // const success = calculateUploadProbability();
    console.log('Started uploading file');
    dispatch({
      type: 'FILL_NEXT_TO_UPLOAD',
      payload: {
        fileToUpload: file,
        fileList: nextUpList,
      },
    });

    /* const updatedFileList = nextUpList;
    updatedFileList.splice(0, 1);

    if (success <= 0.75) {
      dispatch({type: 'ADD_TO_COMPLETED', payload: file});
    } else {
      dispatch({type: 'ADD_TO_INCOMPLETE', payload: file});
    }



    if (nextUpList.length > 0) {
      const nextFile: IFile = nextUpList[0];
      nextUpList.shift();

      uploadAction(nextFile, nextUpList);
    }*/
  };
};

export default uploadAction;
