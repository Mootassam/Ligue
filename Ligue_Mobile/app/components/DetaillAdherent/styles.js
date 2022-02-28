import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  contain: {
    shadowOffset: {height: 1},
    shadowOpacity: 1.0,
  },
  nameContent: {
    borderBottomWidth: 1,
    paddingHorizontal: 8,
    paddingVertical: 8,
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
    alignItems: 'flex-start',
    height: 45,
  },
  validContent: {
    flexDirection: 'row',
    paddingHorizontal: 8,
    paddingVertical: 8,
    justifyContent: 'space-between',
    borderBottomRightRadius: 8,
    borderBottomLeftRadius: 8,
  },
  mainContent: {
    paddingVertical: 19,
    padding: 12,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    flexDirection: 'row',
  },
});
