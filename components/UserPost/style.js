import {StyleSheet} from 'react-native';
import {getFontFamily} from '../../assets/fonts/helper';
import {get} from 'react-native/Libraries/TurboModule/TurboModuleRegistry';

const style = StyleSheet.create({
  userContainer: {flexDirection: 'row'},
  userTextContainer: {justifyContent: 'center', marginLeft: 10},
  user: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  username: {
    color: '#000',
    fontFamily: getFontFamily('Inter', 600),
    fontSize: 16,
  },
  location: {
    color: '#76869F',
    fontfamily: getFontFamily('Inter', 400),
    fontSize: 12,
  },
});

export default style;
