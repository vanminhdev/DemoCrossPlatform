/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import ExpoCamera from './src/components/ExpoCamera';
import ExpoLocation from './src/components/ExpoLocation';

const App = () => {
  return (
    <View style={styles.container}>
      {/* <ExpoLocation /> */}
      <ExpoCamera />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default App;
