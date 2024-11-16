import styled from 'styled-components/native';
import {Text as RNText, TextProps as RNTextProps} from 'react-native';

/**
 * @description 안드로이드에서 사용자 정의 폰트사이즈 혹은 글꼴을 변경할 경우에 앱 텍스트또한 사용자 정의로 바뀌어버리는것을 막기위해서 컴포넌트에서 명시적으로 구분해줬어요
 * @description 우선 기존 프로젝트에서 사용하던 컴포넌트 거의 그대로 옮겨왔는데 pigma에 있는 폰트대로 다시 재정의하면 될것같애요.!
 * @description 추가로 native에서의 asset설정또한 완료해 두어야 합니다.
 */
type FontWeight =
  | 'thin'
  | 'light'
  | 'regular'
  | 'medium'
  | 'semiBold'
  | 'bold'
  | 'extraBold'
  | 'black';

const fontWeightMapping: Record<FontWeight, string> = {
  thin: 'Pretendard-Thin',
  light: 'Pretendard-Light',
  regular: 'Pretendard-Regular',
  medium: 'Pretendard-Medium',
  semiBold: 'Pretendard-SemiBold',
  bold: 'Pretendard-Bold',
  extraBold: 'Pretendard-ExtraBold',
  black: 'Pretendard-Black',
};

interface StyledTextProps extends RNTextProps {
  weight?: FontWeight;
  size?: number;
  color?: string;
}

const StyledText = styled(RNText)<StyledTextProps>`
  font-family: ${({weight = 'regular'}) => fontWeightMapping[weight]};
  ${({size}) => size && `font-size: ${size}px;`}
  ${({color}) => color && `color: ${color};`}
`;

export const Text: React.FC<StyledTextProps> = ({
  children,
  weight = 'regular',
  size,
  color,
  allowFontScaling = false,
  ...props
}) => (
  <StyledText
    weight={weight}
    size={size}
    color={color}
    allowFontScaling={allowFontScaling}
    {...props}>
    {children}
  </StyledText>
);
