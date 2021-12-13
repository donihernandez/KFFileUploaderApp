import {StyleSheet} from 'react-native';
import COLORS from '../../constants/colors';

const styles = StyleSheet.create({
  listItem: {
    marginTop: 10,
    marginHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: COLORS.LIGHT_GRAY,
    borderRadius: 20,
  },
  wrapper: {
    paddingVertical: 14,
    paddingHorizontal: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  container: {
    flexDirection: 'row',
  },
  textContainer: {
    marginLeft: 10,
  },
  fileName: {
    fontFamily: 'Poppins-Medium',
    fontWeight: '500',
    color: COLORS.BLACK,
  },
  fileSize: {
    color: COLORS.GRAY,
    fontSize: 10,
    fontFamily: 'Poppins-Regular',
    fontWeight: '400',
  },
  loadingText: {
    fontSize: 10,
    color: COLORS.GRAY,
  },
  closeIcon: {
    position: 'absolute',
    top: -6,
    right: 5,
    zIndex: 1000,
  },
});

export default styles;
