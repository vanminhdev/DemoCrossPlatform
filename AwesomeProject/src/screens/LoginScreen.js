import {Text, View} from 'react-native';

const LoginScreen = ({navigation, route}) => {
  console.log(route);
  const { data } = route.params;
  if (data) {
    console.log('data:', data);
  }
  return (
    <View>
      <Text>Login Screen</Text>
    </View>
  );
};
export default LoginScreen;
