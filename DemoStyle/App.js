import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import AlignContent from './src/components/AlignContent';
import AlignItems from './src/components/AlignItems';
import AlignSelf from './src/components/AlignSelf';
import DemoFlex from './src/components/DemoFlex';
import Flex from './src/components/Flex';
import FlexBasic from './src/components/FlexBasic';
import FlexDirectionBasics from './src/components/FlexDirection';
import FlexWrap from './src/components/FlexWrap';
import JustifyContent from './src/components/JustifyContent';
import LayoutDirection from './src/components/LayoutDirection';
import PositionLayout from './src/components/PositionLayout';
import WidthHeight from "./src/components/WidthHeight";
import WidthHeightBasics from './src/components/WidthHeightBasics';

export default function App() {
  return (
    <>
      <SafeAreaView style={styles.container}>
        {/* <WidthHeight></WidthHeight> */}
        {/* <Flex></Flex> */}
        {/* <FlexDirectionBasics></FlexDirectionBasics> */}
        {/* <LayoutDirection></LayoutDirection> */}
        {/* <JustifyContent></JustifyContent> */}
        {/* <AlignItems></AlignItems> */}
        {/* <AlignSelf></AlignSelf> */}
        {/* <AlignContent></AlignContent> */}
        {/* <FlexWrap></FlexWrap> */}
        {/* <FlexBasic></FlexBasic> */}
        {/* <WidthHeightBasics></WidthHeightBasics> */}
        {/* <PositionLayout></PositionLayout> */}
        <DemoFlex></DemoFlex>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 0
  },
});
