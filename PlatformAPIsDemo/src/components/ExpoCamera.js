/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Camera, CameraType} from 'expo-camera';
import {useState} from 'react';
import {
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  SafeAreaView,
} from 'react-native';

export default function ExpoCamera() {
  let camera;
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const [previewVisible, setPreviewVisible] = useState(false);
  const [capturedImage, setCapturedImage] = useState(null);

  if (!permission) {
    // Camera permissions are still loading
    return (
      <View>
        <Text>No permission camera</Text>
      </View>
    );
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet
    return (
      <View style={styles.container}>
        <Text style={{textAlign: 'center'}}>
          We need your permission to show the camera
        </Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  function toggleCameraType() {
    setType(current =>
      current === CameraType.back ? CameraType.front : CameraType.back,
    );
  }

  const capture = async () => {
    const photo = await camera.takePictureAsync();
    console.log(photo);
    setPreviewVisible(true);
    setCapturedImage(photo);
  };

  return previewVisible && capturedImage ? (
    <CameraPreview
      photo={capturedImage}
      setPreviewVisible={setPreviewVisible}
    />
  ) : (
    <Camera
      style={styles.camera}
      type={type}
      ref={r => {
        camera = r;
      }}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={toggleCameraType}>
          <Text style={styles.text}>Flip Camera</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={capture}>
          <Text style={styles.text}>Capture</Text>
        </TouchableOpacity>
      </View>
    </Camera>
  );
}

const CameraPreview = ({photo, setPreviewVisible}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          backgroundColor: 'transparent',
          flex: 1,
        }}>
        <Text>Ảnh vừa chụp</Text>
        <Image
          style={{flex: 1}}
          source={{
            uri: photo.uri,
          }}
        />
        <Button
          onPress={() => setPreviewVisible(false)}
          title="Take new photo"
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    margin: 64,
  },
  button: {
    flex: 1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
});
