import React from 'react';
import {StyleSheet, View} from 'react-native';
import useResponsiveSize from '@/utils/responsive';
import ArrowIcon from '@/assets/svg/Arrow.svg';
import StarUnCheckedIcon from '@/assets/svg/StarUnChecked.svg';
import {customerColor} from '@/utils/tag';
import {Text} from './Text';
import cardData from '@/data/homeCardData.json';
import color from '@/consts/color';

const {responsiveWidth, responsiveHeight, responsiveFont} = useResponsiveSize();

const FeatureCard = () => {
  const tags: TagProps['type'][] = ['모집중', '스터디', '멘토'];

  return (
    <View style={styles.cardContainer}>
      <View style={styles.tagContainer}>
        <View style={styles.tagRow}>
          {tags.map(tag => {
            const {bgColor, textColor} = customerColor({type: tag});
            return (
              <Text
                weight="regular"
                key={tag}
                style={[
                  styles.tagText,
                  {backgroundColor: bgColor, color: textColor},
                ]}>
                {tag}
              </Text>
            );
          })}
        </View>
        <ArrowIcon />
      </View>

      <View style={styles.cardTitleContainer}>
        <Text style={styles.cardTitle} weight="bold">
          [{cardData[0].type}] {cardData[0].title}
        </Text>
      </View>
      <View style={styles.cardInfoContainer}>
        <Text style={styles.cardInfo}>
          {cardData[0].department} | {cardData[0].name}
        </Text>
      </View>
      <View style={styles.recruitmentContainer}>
        <Text style={styles.recruitmentLabel}>모집현황</Text>
        <Text style={styles.recruitmentCount}>{cardData[0].recruitment}</Text>
        <StarUnCheckedIcon width={12} height={12} />
        <Text style={styles.starCount}>{cardData[0].starCount}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: responsiveHeight(10),
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: responsiveHeight(146),
    width: responsiveWidth(320),
    display: 'flex',
    borderWidth: responsiveHeight(1),
    borderColor: '#F0F0F0',
    padding: responsiveHeight(20),
  },
  tagContainer: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    gap: responsiveWidth(5),
    flex: 1,
    justifyContent: 'space-between',
  },
  tagRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: responsiveWidth(6),
  },
  tagText: {
    borderRadius: responsiveHeight(5),
    paddingVertical: responsiveHeight(5),
    paddingHorizontal: responsiveWidth(10),
    fontSize: responsiveFont(12),
    fontWeight: 'regular',
  },
  cardTitleContainer: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
  },
  cardTitle: {
    fontSize: responsiveFont(14),
    fontWeight: 'bold',
    display: 'flex',
  },
  cardInfoContainer: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
  },
  cardInfo: {
    fontSize: responsiveFont(12),
    fontWeight: 'regular',
    color: color.grayColor,
  },
  recruitmentContainer: {
    flexDirection: 'row',
    flex: 1,
    width: '50%',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  recruitmentLabel: {
    fontSize: responsiveFont(12),
    fontWeight: 'bold',
    color: 'black',
  },
  recruitmentCount: {
    color: color.orangeColor,
    fontSize: responsiveFont(12),
  },
  starCount: {
    color: '#6A6A6A',
    fontSize: responsiveFont(12),
  },
});

export default FeatureCard;
