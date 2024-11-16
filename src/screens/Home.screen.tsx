import {Text} from '@/components/Text';
import responsiveSize from '@/utils/responsive';
import {Dimensions, StyleSheet, View} from 'react-native';

const {height, width} = Dimensions.get('window');

const {responsiveFont} = responsiveSize();

const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    height: height,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: responsiveFont(20),
  },
});
export default Home;
