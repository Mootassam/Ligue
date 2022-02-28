import React from 'react';
import {TextInput, View, I18nManager, Text} from 'react-native';
import PropTypes from 'prop-types';
import {BaseStyle, BaseColor, useTheme} from '@config';

export default function Index(props) {
  const {colors} = useTheme();
  const cardColor = colors.card;
  const {
    style,
    onChangeText,
    onFocus,
    placeholder,
    value,
    success,
    secureTextEntry,
    keyboardType,
    multiline,
    textAlignVertical,
    icon,
    onSubmitEditing,
    touched,
    errors,
  } = props;
  return (
    <>
      <View style={[BaseStyle.textInput, {backgroundColor: cardColor}, style]}>
        <TextInput
          style={{
            fontFamily: 'Raleway',
            flex: 1,
            height: '100%',
            textAlign: I18nManager.isRTL ? 'right' : 'left',
            color: colors.text,
            paddingTop: 5,
            paddingBottom: 5,
          }}
          onChangeText={text => onChangeText(text)}
          onFocus={() => onFocus()}
          autoCorrect={false}
          placeholder={placeholder}
          placeholderTextColor={success ? BaseColor.grayColor : colors.primary}
          secureTextEntry={secureTextEntry}
          value={value}
          selectionColor={colors.primary}
          keyboardType={keyboardType}
          multiline={multiline}
          textAlignVertical={textAlignVertical}
          onSubmitEditing={onSubmitEditing}
        />
        {icon}
      </View>
      {touched && errors && (
        <Text style={{fontSize: 15, color: 'red'}}>{errors}</Text>
      )}
    </>
  );
}

Index.propTypes = {
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  onChangeText: PropTypes.func,
  onFocus: PropTypes.func,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  success: PropTypes.bool,
  secureTextEntry: PropTypes.bool,
  keyboardType: PropTypes.string,
  multiline: PropTypes.bool,
  textAlignVertical: PropTypes.string,
  icon: PropTypes.node,
  onSubmitEditing: PropTypes.func,
};

Index.defaultProps = {
  style: {},
  onChangeText: text => {},
  onFocus: () => {},
  placeholder: 'Placeholder',
  value: '',
  success: true,
  secureTextEntry: false,
  keyboardType: 'default',
  multiline: false,
  textAlignVertical: 'center',
  icon: null,
  onSubmitEditing: () => {},
};
