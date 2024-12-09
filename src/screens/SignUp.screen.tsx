import useResponsiveSize from '@/utils/responsive';
import CloseIcon from '@/assets/svg/Close.svg';
import {Dimensions, Pressable, StyleSheet, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Text} from '@/components/Text';

const {responsiveHeight, responsiveWidth, responsiveFont} = useResponsiveSize();
const {height, width} = Dimensions.get('window');

const Login = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.TopSection}>
        <View style={styles.headerContainer}>
          <Pressable onPress={() => navigation.goBack()}>
            <CloseIcon />
          </Pressable>
        </View>
      </View>
      <Text weight="regular">회원가입 화면</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    width: width,
    height: height,
    paddingHorizontal: responsiveWidth(20),
    paddingVertical: responsiveHeight(7),
  },
  TopSection: {
    flex: 1,
    flexDirection: 'column',
    width: '100%',
    height: '100%',
  },
  headerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
});

export default Login;
