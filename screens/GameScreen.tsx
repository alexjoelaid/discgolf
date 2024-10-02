import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { CompositeScreenProps } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StyleSheet, Text, View } from "react-native";
import BatteryView from "../expo-components/BatteryView";
import { RootStackParamList } from "../navigators/RootStackNavigator";
import { TabParamList } from "../navigators/TabNavigator";

type Props = CompositeScreenProps<
  BottomTabScreenProps<TabParamList, "GameScreen">,
  NativeStackScreenProps<RootStackParamList>
>;

export default function GameScreen({ route }: Props) {
  return (
    <View style={styles.container}>
      <BatteryView />
      <Text>GAME SCREEN</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
