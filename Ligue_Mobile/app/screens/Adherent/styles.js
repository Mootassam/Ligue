import React from 'react';
import {StyleSheet} from 'react-native';
import {BaseColor} from '@config';

export default StyleSheet.create({
  contentTitle: {
    alignItems: 'flex-start',
    width: '100%',
    height: 32,
    justifyContent: 'center',
  },
  contain: {
    flex: 1,
    padding: 15,
    paddingTop: 104,
  },
  textInput: {
    height: 56,
    backgroundColor: BaseColor.fieldColor,
    borderRadius: 5,
    padding: 10,
    width: '100%',
  },

  cadreItem: {
    paddingTop: 30,
    paddingBottom: 30,

    width: 140,
    borderRadius: 14,
    alignItems: 'center',
  },
  history: {
    paddingTop: 14,
    justifyContent: 'space-around',
    flexDirection: 'row',
    backgroundColor: '#F5F5F5',
    justifyContent: 'space-between',
    height: 90,
    padding: 12,
    borderRadius: 14,
  },
});
