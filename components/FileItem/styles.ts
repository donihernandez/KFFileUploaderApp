import {StyleSheet} from 'react-native';
import COLORS from '../../constants/colors';

const styles = StyleSheet.create({
  wrapper: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#F6F7FC',
    marginBottom: 30,
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
    top: 10,
    right: 10,
  },
});

export default styles;
