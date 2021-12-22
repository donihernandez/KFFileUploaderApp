# File Uploader - Fire Kamp Interview
File Uploader is a tool to easily manage your file uploading process.

## Description
It's a file upload simulator. It doesn't really upload anything but the idea was to improve my skills. It is made with React Native, Typescript and Redux.

Installation And Running Steps:
- yarn install
- yarn run android
- yarn run ios

Libraries Installed
- "react": "17.0.2"
- "react-native": "0.66.3"
- "react-native-vector-icons": "^9.0.0"
- "react-redux": "^7.2.6"
- "redux": "^4.1.2"
- "redux-thunk": "^2.4.1"


Notes:
Here I'll expose some considerations about the design
- There is not much contrast between the file size text and the background
- I would change the encrypting text to uploading. It seems more intuitive to me
- In my opinion, the blank space on the left in the header is not very well used. It would be better to put the upload button and the title at the same distance
- Action texts with cancel upload have too small a font
- Very small empty section texts
- Too much sections on the screen
