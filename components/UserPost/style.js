import {StyleSheet} from 'react-native';
import {getFontFamily} from '../../assets/fonts/helper';
import {get} from 'react-native/Libraries/TurboModule/TurboModuleRegistry';

const style = StyleSheet.create({
  userContainer: {flexDirection: 'row'},
  userTextContainer: {justifyContent: 'center', marginLeft: -4},
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
    marginLeft: -4,
    fontfamily: getFontFamily('Inter', 400),
    fontSize: 12,
  },
  postImage: {
    alignItems: 'center',
    marginVertical: 35,
  },
  userPostContainer: {
    marginTop: 35,
    borderBottomWidth: 1,
    paddingBottom: 20,
    borderBottomColor: '',
  },
  userPostStat: {
    marginLeft: 10,
    flexDirection: 'row',
  },
  userPostStatButton: {
    flexDirection: 'row',
  },
  userPostStatButtonRight: {
    marginLeft: 27,
    flexDirection: 'row',
  },
  userPostStatText: {
    marginLeft: 3,
    color: '#79869F',
  },
});

export default style;
