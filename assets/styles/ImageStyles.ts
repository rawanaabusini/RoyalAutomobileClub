import {StyleSheet, Dimensions} from 'react-native';
import {SCREEN_WIDTH} from 'RoyalAutomobileClub/src/services/helper/Constant';
const WIDTH = Dimensions.get('window').width;

const ImageStyles = StyleSheet.create({
  teaserImage: {
    width: WIDTH / 3,
    height: WIDTH / 3,
  },
  userProfile: {
    width: WIDTH / 3,
    height: WIDTH / 3,
    borderRadius: WIDTH / 1.5,
  },
  lTeaserImage: {
    width: WIDTH / 5,
    height: WIDTH / 5,
    resizeMode: 'contain',
  },
  mediumImage: {
    width: WIDTH / 1.5,
    height: WIDTH / 1.5,
    marginBottom: 10,
    resizeMode: 'contain',
  },
  congratsImage: {
    width: WIDTH / 2,
    height: WIDTH / 2,
    resizeMode: 'contain',
  },
  posterImage: {
    width: '100%',
    height: Dimensions.get('window').height / 2.5,
  },
  iconHeight: {
    width: WIDTH / 15,
  },

  iconImage: {
    width: WIDTH / 17,
    height: WIDTH / 17,
  },
  mediumIcon: {
    width: WIDTH / 15,
    height: WIDTH / 15,
  },
  selectLangImg: {
    width: WIDTH / 2.2,
    height: WIDTH / 2.2,
    resizeMode: 'contain',
  },
  backIcon: {
    width: SCREEN_WIDTH / 11,
    height: SCREEN_WIDTH / 17,
    resizeMode: 'contain',
  },
});
export default ImageStyles;
