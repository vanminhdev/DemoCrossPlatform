import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function ValidateScreen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (username === '') {
      newErrors.username = 'Vui lòng nhập tên đăng nhập';
    }

    if (password === '') {
      newErrors.password = 'Vui lòng nhập mật khẩu';
    }

    setErrors(newErrors);

    // Kiểm tra xem có lỗi nào không
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      // Đã xác thực thành công, thực hiện xử lý form tại đây
      console.log('Form đã được xác thực: ', username, password);
    }
  };

  return (
    <View style={styles.container}>
      <Text>Tên đăng nhập:</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setUsername(text)}
        value={username}
      />
      {errors.username && <Text style={styles.error}>{errors.username}</Text>}

      <Text>Mật khẩu:</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setPassword(text)}
        value={password}
        secureTextEntry={true}
      />
      {errors.password && <Text style={styles.error}>{errors.password}</Text>}

      <Button title="Đăng nhập" onPress={handleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 5,
  },
  error: {
    color: 'red',
    marginBottom: 10,
  },
});
