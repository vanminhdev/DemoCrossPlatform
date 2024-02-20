import { useEffect } from 'react';
import {Text, View} from 'react-native';
import { commonService } from '../services';

const Inputs = ({ name }) => {
  return (
    <View>
      <Text>Input: {name}</Text>
    </View>
  );
}

const LoginScreen = ({navigation, route}) => {
  useEffect(() => {
    commonService.getData("/api/student/get-all", { pageSize: 10, pageIndex: 1 })
      .then(response => {
        console.log(response.data);
      })
      .catch()
  }, [])

  console.log(route);
  console.log('data:', route?.params?.data);
  data = route?.params?.data;
  return (
    <View>
      <Text>Login Screen</Text>
      {data && <Inputs name={data} />}
    </View>
  );
};
export default LoginScreen;
