import { View, Text, StyleSheet } from "react-native";

function DemoFlex() {
  return (
    <View style={styles.container}>
      <View
        style={{
          backgroundColor: "white",
          flex: 1,
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>PLACE HOLDER FOR IMAGE </Text>
      </View>
      <View
        style={{
          backgroundColor: "lightblue",
          flex: 1,
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <View style={{ flex: 1, flexDirection: "row" }}>
          <Text
            style={{
              backgroundColor: "red",
              flex: 1,
              textAlignVertical: "center",
              textAlign: "center",
            }}
          >
            ICON 1
          </Text>
          <Text
            style={{
              backgroundColor: "pink",
              flex: 1,
              textAlignVertical: "center",
              textAlign: "center",
            }}
          >
            ICON 2
          </Text>
          <Text
            style={{
              backgroundColor: "green",
              flex: 1,
              textAlignVertical: "center",
              textAlign: "center",
            }}
          >
            ICON 3
          </Text>
        </View>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <Text
            style={{
              backgroundColor: "yellow",
              flex: 1,
              textAlignVertical: "center",
              textAlign: "center",
            }}
          >
            ICON 4
          </Text>
          <Text
            style={{
              backgroundColor: "lightblue",
              flex: 1,
              textAlignVertical: "center",
              textAlign: "center",
            }}
          >
            ICON 5
          </Text>
          <Text
            style={{
              backgroundColor: "lightgreen",
              flex: 1,
              textAlignVertical: "center",
              textAlign: "center",
            }}
          >
            ICON 6
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  }
});

export default DemoFlex;
