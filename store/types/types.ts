export type File = {
  fileName: string;
  fileSize: string;
  image: string;
  action: string;
  status: string;
};

export type Action = {
  type: string;
  payload?: any;
};

export type FileList = File[];
