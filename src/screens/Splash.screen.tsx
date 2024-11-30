import {StackScreenProps} from '@react-navigation/stack';
import {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import SplashImage from '@/assets/svg/SplashImage.svg';

type SplashScreenProps = StackScreenProps<RootStackParamList, 'Splash'>;

const Splash = ({navigation}: SplashScreenProps) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Home');
    }, 3000);
  }, []);
  return (
    <View style={styles.container}>
      <SplashImage height="70%" width="70%" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FF9078',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Splash;
