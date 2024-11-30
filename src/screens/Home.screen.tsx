import {Text} from '@/components/Text';
import useResponsiveSize from '@/utils/responsive';

import {Dimensions, StyleSheet, View} from 'react-native';

const {height, width} = Dimensions.get('window');

const {responsiveFont, responsiveHeight, responsiveWidth} = useResponsiveSize();

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Text size={responsiveFont(24)}>복마니님 안녕하세요</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    width: width,
    height: height,
    paddingHorizontal: responsiveWidth(20),
    paddingVertical: responsiveHeight(7),
  },

  headerContainer: {
    display: 'flex',
    flexBasis: 120,
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer: {
    display: 'flex',
    flex: 1,
  },
});
export default Home;
