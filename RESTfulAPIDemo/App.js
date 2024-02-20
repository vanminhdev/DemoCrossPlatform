import { StyleSheet, Text, View } from 'react-native';
import { commonService, authService } from './src/services';

const getDataTest = () => {
  commonService.getData("/api/student/get-all", { pageSize: 10, pageIndex: 1 })
    .then(response => {
      console.log(response.data);
    })
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
