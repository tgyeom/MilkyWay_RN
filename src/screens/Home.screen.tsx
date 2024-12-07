import CardView from '@/components/Card';
import {Text} from '@/components/Text';
import color from '@/consts/color';
import useResponsiveSize from '@/utils/responsive';
import {Dimensions, StyleSheet, View} from 'react-native';
import HomePen from '@/assets/svg/HomePen.svg';
import me from '@/data/me.json';
import {TSpan} from 'react-native-svg';

const {height, width} = Dimensions.get('window');

const {responsiveFont, responsiveHeight, responsiveWidth} = useResponsiveSize();

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.TopSection}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText} weight="bold">
            {me.name}님 안녕하세요
          </Text>
          <Text style={styles.headerSubText}>{me.role} 회원</Text>
        </View>
        <View style={styles.cardContainer}>
          <CardView />
          <CardView />
        </View>
        {me.resume !== null && (
          <View style={styles.resumeTextContainer}>
            <HomePen width={30} height={30} />
            <Text style={styles.resumeText} weight="bold">
              이력서 완성하기
              <Text
                style={{
                  color: '#133488',
                  fontSize: responsiveFont(12),
                  fontWeight: '400',
                }}>
                {me.resume}%
              </Text>
            </Text>
          </View>
        )}
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'column',
          flex: 1,
          width: '100%',
          height: '100%',
          backgroundColor: 'black',
        }}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    width: width,
    height: height,
    paddingHorizontal: responsiveWidth(20),
    paddingVertical: responsiveHeight(7),
  },
  TopSection: {
    display: 'flex',
    flex: 1,
    width: '100%',
    height: '100%',
    flexDirection: 'column',
  },
  headerContainer: {
    display: 'flex',
    justifyContent: 'center',
    flex: 0.3,
    flexDirection: 'column',
  },
  cardContainer: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    flex: 0.4,
    gap: responsiveWidth(14),
  },
  resumeTextContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flex: 0.3,
  },
  resumeText: {
    fontSize: responsiveFont(14),
    fontWeight: 600,
    marginLeft: responsiveWidth(10),
  },
  headerText: {
    fontSize: responsiveFont(20),
    fontWeight: 600,
  },
  headerSubText: {
    fontSize: responsiveFont(14),
    marginVertical: responsiveHeight(10),
    fontWeight: 300,
    color: color.subText,
  },
});
export default Home;
