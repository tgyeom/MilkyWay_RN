import {StackScreenProps} from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useEffect} from 'react';
import {useSetRecoilState} from 'recoil';
import {StyleSheet, View} from 'react-native';
import {userAtom} from '@/recoil/atom';
import SplashImage from '@/assets/svg/SplashImage.svg';
import me from '@/data/me.json';

type SplashScreenProps = StackScreenProps<RootStackParamList, 'Splash'>;

const Splash = ({navigation}: SplashScreenProps) => {
  const setUserData = useSetRecoilState(userAtom);

  const checkLoginStatus = async () => {
    try {
      const token = await AsyncStorage.getItem('accessToken');
      return !!token;
    } catch {
      return false;
    }
  };

  const initializeApp = async () => {
    if (!(await checkLoginStatus())) {
      setUserData(me);
      navigation.navigate('Home');
    } else {
      navigation.navigate('Login');
    }
  };

  useEffect(() => {
    initializeApp();
  }, [navigation]);

  return (
    <View style={styles.container}>
      <SplashImage style={{height: '70%', width: '70%'}} />
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
