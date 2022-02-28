import React, {useState, memo, useCallback} from 'react';
import {Text, TextInput, Button} from '@components';
import * as yup from 'yup';
import yupFormSchemas from '@modules/shared/yup/yupFormSchemas';
import {Formik} from 'formik';
import {ScrollView, View, PermissionsAndroid} from 'react-native';
import {useTranslation} from 'react-i18next';
import * as ImagePicker from 'react-native-image-picker';
import {ImagePickerModal} from './image-picker-modal';
import {ImagePickerAvatar} from './image-picker-avatar';
import FileUploader from '@modules/settings/fileUpload/fileUploader';
import {Message} from '@shared';
function FormPayment(props) {
  const {t} = useTranslation();
  const schema = yup.object().shape({
    montant: yupFormSchemas.string('montant', {required: true}),
  });
  const [initialValues] = useState(() => {
    return {
      montant: '',
    };
  });

  const [pickerResponse, setPickerResponse] = useState(null);
  const [visible, setVisible] = useState(false);

  const onImageLibraryPress = useCallback(() => {
    const options = {
      selectionLimit: 1,
      mediaType: 'photo',
      includeBase64: false,
    };
    ImagePicker.launchImageLibrary(options, setPickerResponse);
  }, []);

  const onCameraPress = React.useCallback(async () => {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      const options = {
        saveToPhotos: true,
        mediaType: 'photo',
        includeBase64: false,
      };
      ImagePicker.launchCamera(options, setPickerResponse);
    } else {
      // if get here, the user did NOT accepted the permissions
    }
  }, []);

  const uri = pickerResponse?.assets && pickerResponse.assets[0].uri;
  const onSubmit = async values => {
    console.log('LPOG');
    // try {
    //   const files = pickerResponse.assets;
    //   if (!files || !files.length) {
    //     return;
    //   }

    //   let file = files[0];

    //   const donsAttachements = {
    //     id: 'donsAttachements',
    //     folder: 'tenant/:tenantId/dons/attachements',
    //     maxSizeInBytes: 100 * 1024 * 1024,
    //   };

    //   // FileUploader.validate(file, {
    //   //   storage: donsAttachements,
    //   //   image: true,
    //   // });

    //   // setLoading(true);

    //   file = await FileUploader.upload(file, {
    //     storage: donsAttachements,
    //     image: true,
    //   });
    //   console.log('FILE', file);

    //   // input.current.value = '';

    //   // setLoading(false);
    // } catch (error) {
    //   console.error(error);
    //   // setLoading(false);
    //   Message.error(error);
    // }
    const data = {
      ...values,
    };
    props.onSubmit(data);
  };

  return (
    <>
      <Formik
        validationSchema={schema}
        initialValues={initialValues}
        onSubmit={values => onSubmit(values)}>
        {({values, touched, errors, handleChange, handleSubmit}) => (
          <>
            <ScrollView contentContainerStyle={{padding: 20}}>
              <Text headline semibold>
                {t('credit_card_detail')}
              </Text>
              <TextInput
                style={{marginTop: 10}}
                value={values.montant}
                onChangeText={handleChange('montant')}
                errors={errors.montant}
                touched={touched.montant}
                placeholder={t('Rising')}
              />
              {props.method === 'virement' && (
                <>
                  <ImagePickerAvatar
                    uri={uri}
                    onPress={() => setVisible(true)}
                  />

                  <ImagePickerModal
                    isVisible={visible}
                    onClose={() => setVisible(false)}
                    onImageLibraryPress={onImageLibraryPress}
                    onCameraPress={onCameraPress}
                  />
                </>
              )}
            </ScrollView>
            <View style={{paddingHorizontal: 20, paddingVertical: 15}}>
              <Button loading={props.loading} full onPress={handleSubmit}>
                {t('pay_now')}
              </Button>
            </View>
          </>
        )}
      </Formik>
    </>
  );
}

export default memo(FormPayment);
