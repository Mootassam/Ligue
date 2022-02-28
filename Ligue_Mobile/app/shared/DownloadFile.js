import RNFetchBlob from 'rn-fetch-blob';
import {Alert} from 'react-native';
export const checkPermission = async filename => {
  try {
    // const granted = await PermissionsAndroid.request(
    //   PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
    //   {
    //     title: 'Storage Permission Required',
    //     message: 'Application needs access to your storage to download File',
    //   },
    // );
    // if (granted === PermissionsAndroid.RESULTS.GRANTED) {
    // Start downloading
    Alert.alert('Vous pouvez telecharger ce fichier', 'Write Any Text Here', [
      {
        text: 'Cancel',

        style: 'cancel',
      },
      {text: 'OK', onPress: () => downloadFile(filename)},
    ]);

    // } else {
    //   // If permission denied then show alert
    // }
  } catch (err) {
    // To handle permission related exception
  }
};

export const downloadFile = filename => {
  // Get today's date to add the time suffix in filename
  let date = new Date();
  // File URL which we want to download
  let FILE_URL = filename;
  // Function to get extention of the file url
  let file_ext = getFileExtention(FILE_URL);

  file_ext = '.' + file_ext[0];

  // config: To get response by passing the downloading related options
  // fs: Root directory path to download
  const {config, fs} = RNFetchBlob;
  let RootDir = fs.dirs.PictureDir;
  let options = {
    fileCache: true,
    addAndroidDownloads: {
      path:
        RootDir +
        '/file_' +
        Math.floor(date.getTime() + date.getSeconds() / 2) +
        file_ext,
      description: 'downloading file...',
      notification: true,
      // useDownloadManager works with Android only
      useDownloadManager: true,
    },
  };
  config(options)
    .fetch('GET', FILE_URL)
    .then(res => {
      // Alert after successful downloading
      Alert.alert(
        'toutes nos félicitations',
        'Le téléchargement faite avec succès',
        [{text: 'OK', onPress: () => {}}],
      );
    });
};

export const getFileExtention = fileUrl => {
  // To get the file extension
  return /[.]/.exec(fileUrl) ? /[^.]+$/.exec(fileUrl) : undefined;
};
