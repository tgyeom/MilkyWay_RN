import color from '@/consts/color';
import useResponsiveSize from '@/utils/responsive';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from './Text';
import HomeSearchIcon from '@/assets/svg/HomeSearch.svg';

const {responsiveWidth, responsiveHeight, responsiveFont} = useResponsiveSize();

const ContentCard = ({
  headerText,
  contentText,
}: {
  headerText: string;
  contentText: string;
}) => (
  <View style={styles.CardContainer}>
    <View>
      <HomeSearchIcon />
    </View>
    <View>
      <Text style={styles.CardContent} weight="regular">
        {headerText}
      </Text>
    </View>
    <View>
      <Text style={styles.CardTitle} weight="bold">
        {contentText}
      </Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  CardContainer: {
    borderRadius: responsiveHeight(20),
    justifyContent: 'space-around',
    width: '100%',
    height: '100%',
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
    fontWeight: 300,
    color: '#222222',
    marginTop: responsiveHeight(5),
  },
});

export default ContentCard;
