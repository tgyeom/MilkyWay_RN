import React, {useRef, useState} from 'react';
import {Dimensions, FlatList, ScrollView, StyleSheet, View} from 'react-native';
import CardView from '@/components/ContentCard';
import {Text} from '@/components/Text';
import color from '@/consts/color';
import useResponsiveSize from '@/utils/responsive';
import {useRecoilValue} from 'recoil';
import {userAtom} from '@/recoil/atom';
import FeatureCard from '@/components/FeatureCard';
import HomePenIcon from '@/assets/svg/HomePen.svg';
import ArrowIcon from '@/assets/svg/Arrow.svg';
import MilkywayFlatImage from '@/assets/svg/HomeFlatImage.svg';
import cardData from '@/data/homeCardData.json';

const {height, width} = Dimensions.get('window');
const {responsiveFont, responsiveHeight, responsiveWidth} = useResponsiveSize();

const Home = () => {
  const userData = useRecoilValue(userAtom);
  const [activeSlide, setActiveSlide] = useState<number>(0);

  const renderItem = ({item}: any) => {
    return <FeatureCard />;
  };

  const handleScroll = (event: any) => {
    const offsetX = event.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(offsetX / width);
    setActiveSlide(currentIndex);
  };

  return (
    <View style={styles.container}>
      <View style={styles.TopSection}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText} weight="bold">
            {userData.name}님 안녕하세요
          </Text>
          <Text style={styles.headerSubText}>{userData.role} 회원</Text>
        </View>
        <View style={styles.cardContainer}>
          <CardView
            headerText="나에게 맞는"
            contentText="스터디/프로젝트 찾아보기"
          />
          <CardView
            headerText="내가 직접"
            contentText="스터디/프로젝트 팀원 모집하기"
          />
        </View>
        {userData.resume !== null && (
          <View style={styles.resumeContainer}>
            <View style={styles.resumeInfo}>
              <HomePenIcon
                width={responsiveWidth(30)}
                height={responsiveHeight(30)}
              />
              <Text style={styles.resumeText} weight="bold">
                이력서 완성하기
              </Text>
              <Text style={styles.percentText}>{userData.resume}%</Text>
            </View>
            <ArrowIcon />
          </View>
        )}
      </View>
      <View style={styles.borderSection} />
      <View style={styles.contentSection}>
        <View style={styles.contentHeader}>
          <Text style={styles.contentTitle} weight="bold">
            우리 학교
            <Text style={{color: color.PRIMARY_B}}> 인기 스터디/프로젝트</Text>
          </Text>
          <Text style={styles.contentLink} weight="regular">
            전체 보기
          </Text>
        </View>
        <View style={styles.scrollCardContainer}>
          <FlatList
            data={cardData}
            renderItem={renderItem}
            horizontal
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            onScroll={handleScroll}
            style={{display: 'flex', flexDirection: 'row'}}
            // keyExtractor={item => item.id}
          />
          <View style={styles.paginationContainer}>
            {cardData.map((_: any, index: React.Key | null | undefined) => (
              <View
                key={index}
                style={[
                  styles.dot,
                  activeSlide === index ? styles.activeDot : styles.inactiveDot,
                ]}
              />
            ))}
          </View>
        </View>
        <View style={styles.fullWidthContainer}>
          {/* <MilkywayFlatImage style={styles.fullWidthImage} /> */}
        </View>
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
    flex: 0.3,
    justifyContent: 'center',
    flexDirection: 'column',
  },
  cardContainer: {
    flex: 0.5,
    flexDirection: 'row',
    alignItems: 'center',
    gap: responsiveWidth(14),
  },
  resumeContainer: {
    flex: 0.3,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  resumeInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  resumeText: {
    fontSize: responsiveFont(14),
    fontWeight: '600',
    paddingHorizontal: responsiveWidth(10),
  },
  percentText: {
    color: color.PRIMARY_B,
    fontSize: responsiveFont(12),
    fontWeight: '400',
  },
  headerText: {
    fontSize: responsiveFont(20),
    fontWeight: '600',
  },
  headerSubText: {
    fontSize: responsiveFont(14),
    marginVertical: responsiveHeight(10),
    fontWeight: '300',
    color: color.TEXT_04,
  },
  borderSection: {
    borderTopColor: '#F0F0F0',
    borderTopWidth: responsiveHeight(8),
    marginHorizontal: -responsiveWidth(20),
  },
  contentSection: {
    paddingVertical: responsiveHeight(30),
    flex: 1,
    flexDirection: 'column',
    width: '100%',
    height: '100%',
  },
  contentHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: responsiveHeight(10),
  },
  contentTitle: {
    fontSize: responsiveFont(16),
    fontWeight: 'bold',
  },
  contentLink: {
    fontSize: responsiveFont(12),
    color: color.TEXT_04,
  },
  scrollCardContainer: {
    width: '100%',
    marginVertical: responsiveHeight(5),
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
  },
  scrollContent: {
    flexDirection: 'row',
    gap: responsiveWidth(10),
  },
  paginationContainer: {
    display: 'flex',
    justifyContent: 'center',
    flex: 1,
    flexDirection: 'row',
  },
  dot: {
    width: responsiveWidth(8),
    height: responsiveHeight(8),
    display: 'flex',
    borderRadius: 20,
    flexDirection: 'row',
    marginHorizontal: responsiveWidth(4),
  },
  activeDot: {
    backgroundColor: color.PRIMARY_B,
  },
  inactiveDot: {
    backgroundColor: '#F0F0F0',
  },
  fullWidthContainer: {
    position: 'relative',
    width: '100%',
    marginHorizontal: -responsiveWidth(20),
  },
  fullWidthImage: {
    width: '100%',
  },
});

export default Home;
