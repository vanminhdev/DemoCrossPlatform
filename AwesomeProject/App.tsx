/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import StartScreen from './src/screens/StartScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './src/screens/LoginScreen';
import ScreenNames from './src/utils/ScreenNames';
import ValidateScreen from './src/screens/ValidateScreen';


const Stack = createNativeStackNavigator();

const screenOptionsWithoutHeader = {
  headerShown: false,
};

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={[backgroundStyle, styles.container]}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <NavigationContainer>
        <Stack.Navigator initialRouteName={ScreenNames.VALIDATE_SCREEN} screenOptions={screenOptionsWithoutHeader}>
          <Stack.Screen 
            name={ScreenNames.START}
            component={StartScreen} 
            //options={{ headerShown: false }}
          />
          <Stack.Screen 
            name={ScreenNames.LOGIN}
            component={LoginScreen}
            //options={{ headerShown: false, title: 'Login' }}
          />
          <Stack.Screen 
            name={ScreenNames.VALIDATE_SCREEN}
            component={ValidateScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});

export default App;
