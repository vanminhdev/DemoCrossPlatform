import { SafeAreaView, View } from "react-native";

export default function WidthHeight() {
    return (
      <>
        <View
          style={{
            width: 50,
            height: 50,
            backgroundColor: "powderblue",
          }}
        />
        <View
          style={{
            width: 100,
            height: 100,
            backgroundColor: "skyblue",
          }}
        />
        <View
          style={{
            width: 150,
            height: 150,
            backgroundColor: "steelblue",
          }}
        />
      </>
    );
}