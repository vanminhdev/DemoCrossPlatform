import {Text, View, Button, Pressable, StyleSheet} from 'react-native';
import ScreenNames from '../utils/ScreenNames';

const handleButtonPress = () => {};

/*
- Khi sử dụng navigate, React Navigation sẽ kiểm tra xem liệu màn hình mục tiêu đã tồn tại trong ngăn xếp điều hướng hay chưa.
Nếu màn hình đã tồn tại, nó sẽ không tạo ra một màn hình mới, mà sẽ điều hướng đến màn hình đó.
navigate thường được sử dụng để chuyển đến một màn hình mới, nhưng nếu màn hình đã tồn tại, nó sẽ không tạo thêm một thể hiện mới.

- Khi sử dụng push, một màn hình mới sẽ được thêm vào ngăn xếp điều hướng, ngay cả khi màn hình đó đã tồn tại.
*/
const StartScreen = ({navigation, route}) => {
  return (
    <View style={styles.container}>
      <Text>Start Screen 123</Text>
      {/* <Button
        title="Login"
        onPress={() => navigation.navigate(ScreenNames.LOGIN, { data: 1 })}
      /> */}
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate(ScreenNames.LOGIN, {data: 1})}>
        <Text style={styles.text}>Login</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: 200,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'blue',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});

export default StartScreen;
