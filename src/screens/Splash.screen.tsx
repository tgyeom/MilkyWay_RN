import {Text} from '@/components/Text';
import responsiveSize from '@/utils/responsive';
import {StackScreenProps} from '@react-navigation/stack';
import {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';

type SplashScreenProps = StackScreenProps<RootStackParamList, 'Splash'>;

const {responsiveFont} = responsiveSize();

/**
 * @description xcode나 안드로이드 네이티브 설정에 사용하는 splash가 아니라 js로 스크린을 짜서 컴포넌트로 활용하는게 업데이트검사나 권한검사등에서 편하더라고요.
 */
const Splash = ({navigation}: SplashScreenProps) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Home');
    }, 2000);
  }, []);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Splash</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: responsiveFont(20),
  },
});

export default Splash;
