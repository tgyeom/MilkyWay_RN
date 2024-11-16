import {Text} from '@/components/Text';
import {Dimensions, StyleSheet, View} from 'react-native';

const {height, width} = Dimensions.get('window');

const Home = () => {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
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
});
export default Home;
