import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default StyleSheet.create({
  emptyContainer: {
    paddingHorizontal: '11%',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
    paddingBottom: hp('6.15%'),
    paddingTop: hp('15.6%'),
  },
  topBlock: {
    alignItems: 'center',
  },
});
