import {StyleSheet} from 'react-native';
import COLORS from "../../constants/colors";

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 40,
    paddingTop: 20,
    paddingBottom: 10,
  },
  accordionContainer: {
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
  },
  fileList: {
    paddingHorizontal: 10,
  },
});

export default styles;
