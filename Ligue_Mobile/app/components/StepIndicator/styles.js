/** @format */

import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    height: 74,
    //backgroundColor: "#fff",
    paddingBottom: 6,
  },
  labelContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  label: {
    color: '#faff',
    fontSize: 12,
    textAlign: 'center',
    fontFamily: '',
  },
  labelActive: {
    color: '#64F',
    fontFamily: '',
  },
  indicatorContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 8,
  },
});
