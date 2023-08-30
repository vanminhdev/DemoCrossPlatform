import {Text, View, Button, TouchableOpacity} from 'react-native';
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
    <View>
      <Text>Start Screen 123</Text>
      <Button
        title="Login"
        onPress={() => navigation.navigate(ScreenNames.LOGIN, { data: 1 })}
      />
    </View>
  );
};

export default StartScreen;
