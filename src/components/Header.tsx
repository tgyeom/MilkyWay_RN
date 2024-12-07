import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Input from './Input';
import useResponsiveSize from '@/utils/responsive';
import HeaderLogoIcon from '@/assets/svg/HeaderLogo.svg';
import BookmarkIcon from '@/assets/svg/Bookmark.svg';
import {useNavigation} from '@react-navigation/native';

const {responsiveWidth, responsiveHeight} = useResponsiveSize();

const Header = () => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();

  return (
    <View style={[styles.container, {marginTop: insets.top}]}>
      <View style={styles.logoContainer}>
        <HeaderLogoIcon
          style={styles.character}
          width={responsiveWidth(22)}
          height={responsiveWidth(22)}
        />
      </View>
      <View style={styles.inputContainer}>
        <Input
          placeholder="어떤 스터디/프로젝트를 찾으세요?"
          width={responsiveWidth(255)}
          height={responsiveHeight(50)}
        />
      </View>
      <View style={styles.logoContainer}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Login');
          }}>
          <BookmarkIcon
            style={styles.character}
            width={responsiveWidth(24)}
            height={responsiveWidth(24)}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
    width: '100%',
  },
  logoContainer: {
    display: 'flex',
    flex: 0.2,
  },
  character: {
    alignSelf: 'center',
    flex: 1,
  },
  inputContainer: {
    display: 'flex',
    flex: 1,
  },
});

export default Header;
