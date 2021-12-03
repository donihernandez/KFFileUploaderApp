import {StyleSheet} from 'react-native';
import COLORS from '../../constants/colors';

const styles = StyleSheet.create({
  wrapper: {
    paddingTop: 40,
    paddingHorinzontal: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontFamily: 'Poppins-Medium',
    fontWeight: '500',
    color: COLORS.BLACK,
  },
  button: {
    position: 'absolute',
    top: 35,
    right: 20,
  },
  icon: {
    color: COLORS.BLUE,
  },
  divider: {
    borderBottomColor: COLORS.BLACK,
    borderBottomWidth: 1,
  },
});

export default styles;
