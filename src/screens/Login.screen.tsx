import color from '@/consts/color';
import useResponsiveSize from '@/utils/responsive';
import LoginLogo from '@/assets/svg/LoginLogo.svg';
import CloseIcon from '@/assets/svg/Close.svg';
import {
  Dimensions,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

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
      <View style={styles.inputSection}>
        <LoginLogo style={styles.loginLogo} />
        <TextInput
          style={styles.input}
          placeholder={'이메일 주소'}
          // onChangeText={onChangeText}
          // value={value}
          // secureTextEntry={secureTextEntry} // 비밀번호 입력 시
        />
        <TextInput
          style={styles.input}
          placeholder={'비밀번호'}
          // onChangeText={onChangeText}
          // value={value}
          // secureTextEntry={secureTextEntry} // 비밀번호 입력 시
        />
        <TouchableHighlight
          style={styles.loginButton}
          underlayColor={color.PRIMARY_B_PRESS}
          onPress={() => console.log('로그인 버튼 클릭!')}>
          <Text style={styles.loginButtonLabel}>로그인</Text>
        </TouchableHighlight>
        <Pressable onPress={() => console.log('회원가입 버튼 클릭!')}>
          <Text style={styles.signUpButton}>밀키웨이가 처음이신가요?</Text>
        </Pressable>
      </View>
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
  inputSection: {
    flex: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginLogo: {
    width: responsiveWidth(210),
    marginBottom: responsiveHeight(40),
  },
  input: {
    backgroundColor: color.TERITARY_01,
    width: responsiveWidth(320),
    fontSize: responsiveFont(14),
    marginBottom: responsiveHeight(15),
    height: responsiveHeight(50),
    borderRadius: responsiveHeight(10),
    paddingHorizontal: responsiveWidth(24),
  },
  loginButton: {
    backgroundColor: color.PRIMARY_B,
    alignItems: 'center',
    justifyContent: 'center',
    width: responsiveWidth(320),
    fontSize: responsiveFont(14),
    height: responsiveHeight(50),
    borderRadius: responsiveHeight(10),
  },
  loginButtonLabel: {
    color: color.WHITE,
    fontSize: responsiveFont(14),
    textAlign: 'center',
  },
  signUpButton: {
    paddingVertical: responsiveHeight(14),
    textDecorationLine: 'underline',
    color: color.TEXT_04,
  },
});

export default Login;
