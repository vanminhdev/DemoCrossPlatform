import { StyleSheet, Text, View } from 'react-native';
import { commonService, authService } from './src/services';

const getDataTest = () => {
  commonService.getData()
    .then()
    .catch()
}

export default function App() {
  getDataTest();

  return (
    <View style={styles.container}>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
