import filesize from 'filesize';
import {authAxios, AuthCurrentTenant} from '@modules';
import {v4 as uuid} from 'uuid';
import axios from 'axios';
import {Message} from '@shared';
export default class FileUploader {
  static validate(file, config) {
    if (!config) {
      return;
    }

    if (config.image) {
      if (!file.type.startsWith('image')) {
        throw new Error(Message.error('You must upload an image'));
      }
    }

    if (
      config.storage.maxSizeInBytes &&
      file.size > config.storage.maxSizeInBytes
    ) {
      throw new Error(
        Message.error(
          'File is too big. Max allowed size is {0}',
          filesize(config.storage.maxSizeInBytes),
        ),
      );
    }

    const extension = extractExtensionFrom(file.name);

    if (config.formats && !config.formats.includes(extension)) {
      throw new Error(
        Message.error(
          'Invalid format. Must be one of: {0}',
          config.formats.join(', '),
        ),
      );
    }
  }

  static async upload(file, config) {
    // try {
    //   this.validate(file, config);
    // } catch (error) {
    //   return Promise.reject(error);
    // }
    const extension = extractExtensionFrom(file.fileName);
    const id = uuid();
    const filename = `${id}.${extension}`;

    const {
      uploadCredentials,
      downloadUrl,
      privateUrl,
    } = await this.fetchFileCredentials(filename, 'donsAttachements');

    await this.uploadToServer(file, uploadCredentials);

    return {
      uploadCredentials,
      downloadUrl,
      privateUrl,
    };
  }

  static async fetchFileCredentials(filename, config) {
    const tenantId = await AuthCurrentTenant.get();

    const {data} = await authAxios.get(`/tenant/${tenantId}/file/credentials`, {
      params: {
        filename: filename,
        storageId: config,
      },
    });

    return data;
  }

  static async uploadToServer(file, uploadCredentials) {
    console.log(uploadCredentials.url);
    try {
      const url = uploadCredentials.url;
      const formData = new FormData();
      for (const [key, value] of Object.entries(
        uploadCredentials.fields || {},
      )) {
        formData.append(key, value);
      }
      formData.append('file', file);
      return axios.post(url, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}

function extractExtensionFrom(filename) {
  if (!filename) {
    return null;
  }

  const regex = /(?:\.([^.]+))?$/;
  const exec = regex.exec(filename);

  if (!exec) {
    return null;
  }

  return exec[1];
}
