import React from 'react';
import {StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import FastImage from 'react-native-fast-image';
import {Images} from '@config';

export default function Image(props) {
  const {style, resizeMode, source, ...rest} = props;
  const no_image =
    source && source[0]?.downloadUrl
      ? {uri: `${source[0].downloadUrl}`}
      : source && source.downloadUrl
      ? {uri: `${source.downloadUrl}`}
      : Images.image;
  let resize = FastImage.resizeMode.cover;
  switch (resizeMode) {
    case 'contain':
      resize = FastImage.resizeMode.contain;
      break;
    case 'stretch':
      resize = FastImage.resizeMode.stretch;
      break;
    case 'center':
      resize = FastImage.resizeMode.center;
      break;
    default:
      break;
  }
  return (
    <FastImage
      style={StyleSheet.flatten([style && style])}
      source={no_image}
      {...rest}
      resizeMode={resize}
    />
  );
}

Image.propTypes = {
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

Image.defaultProps = {
  style: {},
  resizeMode: 'contain',
};
