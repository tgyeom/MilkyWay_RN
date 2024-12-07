import color from '@/consts/color';
import useResponsiveSize from '@/utils/responsive';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from './Text';
import HomeSearch from '@/assets/svg/HomeSearch.svg';

const {responsiveWidth, responsiveHeight, responsiveFont} = useResponsiveSize();

const CardView = () => (
  <View style={styles.CardContainer}>
    <View>
      <HomeSearch />
    </View>
    <View>
      <Text style={styles.CardContent}>나에게 맞는</Text>
    </View>
    <View>
      <Text style={styles.CardTitle}>
        스터디/프로젝트 {'\n'}
        찾아보기
      </Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  CardContainer: {
    borderRadius: responsiveHeight(20),
    justifyContent: 'space-around',
    width: responsiveWidth(158),
    height: responsiveHeight(154),
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    backgroundColor: color.grayBg,
    paddingHorizontal: responsiveWidth(24),
    paddingVertical: responsiveHeight(25),
  },
  CardTitle: {fontSize: responsiveFont(16), fontWeight: 600},
  CardContent: {
    fontSize: responsiveFont(12),
    fontWeight: 400,
    marginTop: responsiveHeight(10),
  },
});

export default CardView;
