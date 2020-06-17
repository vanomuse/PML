import {StyleSheet} from 'react-native';
import {colors, fonts} from '../../../constants';

export default StyleSheet.create({
  container: {
    width: '100%',
    height: 85,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: colors.BORDER_GRAY,
    paddingLeft: 30,
    paddingRight: 20,
  },
  leftIconContainer: {
    marginRight: 20,
  },
  centerContainer: {},
  title: {
    fontSize: 16,
    lineHeight: 19,
    fontFamily: fonts.SF_UI_Regular,
    color: colors.ITEM_TEXT_GRAY,
  },
  rightContainer: {
    alignItems: 'flex-end',
  },
});
