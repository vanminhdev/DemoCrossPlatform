import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Camera, useCameraDevices} from 'react-native-vision-camera';

const DemoCamera = async () => {
  const devices = useCameraDevices('wide-angle-camera');
  const device = devices.back;

  if (device == null) {
    return <></>;
  }
  return <Camera style={StyleSheet.absoluteFill} device={device} />;
};

export default DemoCamera;
