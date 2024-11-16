import {Dimensions, PixelRatio} from 'react-native';

/**
 * @description 디바이스 크기별 화면 대응을 위한 유틸함수에요. 대각선 기준으로 잡아놨습니다
 * @returns responsiveFont
 * @returns responsiveWidth
 * @returns responsiveHeight
 * @type number
 */

const responsiveSize = () => {
  const {width, height} = Dimensions.get('window');

  // 가로 360 x 세로 800
  const baseDiagonal = Math.sqrt(360 ** 2 + 800 ** 2);

  const currentDiagonal = Math.sqrt(width ** 2 + height ** 2);

  const diagonalRatio = currentDiagonal / baseDiagonal;

  const responsiveFont = (size: number) => {
    const newSize = size * diagonalRatio;
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  };

  const responsiveWidth = (size: number) => {
    const newSize = size * (width / 360);
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  };

  const responsiveHeight = (size: number) => {
    const newSize = size * (height / 800);
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  };

  return {responsiveFont, responsiveWidth, responsiveHeight};
};

export default responsiveSize;
