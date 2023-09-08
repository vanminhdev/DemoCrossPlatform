import {Text, View} from 'react-native';

const Inputs = ({ name }) => {
  return (
    <View>
      <Text>Input: {name}</Text>
    </View>
  );
}

const LoginScreen = ({navigation, route}) => {
  console.log(route);
  const { data } = route.params;
  if (data) {
    console.log('data:', data);
  }
  return (
    <View>
      <Text>Login Screen</Text>
      {data && <Inputs name={data} />}
    </View>
  );
};
export default LoginScreen;
