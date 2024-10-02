import { useBatteryLevel } from "expo-battery";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  const batteryLevel = useBatteryLevel();

  return (
    <View style={styles.container}>
      <Text>
        Battery:{" "}
        {batteryLevel !== null ? (batteryLevel * 100).toFixed(0) + "%" : "DEAD"}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
    marginTop: 15,
    alignItems: "center",
    justifyContent: "center",
  },
});
