import {StyleSheet} from 'react-native';
import COLORS from '../../../constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingBottom: 10,
  },
  accordionContainer: {
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 18,
    fontFamily: 'Poppins-Medium',
    color: COLORS.BLACK,
  },
  action: {
    fontFamily: 'Poppins-Regular',
    fontSize: 10,
    fontWeight: '400',
    color: COLORS.BLUE,
    textDecorationLine: 'underline',
    marginRight: 5,
  },
  accordionActions: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 10,
  },
  emptyText: {
    paddingHorizontal: 20,
    paddingTop: 20,
    color: COLORS.GRAY,
    fontFamily: 'Poppins-Regular',
    fontSize: 10,
    fontWeight: '400',
  },
  incompleteActions: {
    paddingHorizontal: 20,
    paddingTop: 20,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
});

export default styles;
