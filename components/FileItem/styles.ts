import {StyleSheet} from 'react-native';
import COLORS from '../../constants/colors';

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
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
  },
  loadingText: {
    fontSize: 10,
    color: COLORS.GRAY,
  },
});

export default styles;
