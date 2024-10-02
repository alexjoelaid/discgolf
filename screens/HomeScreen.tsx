import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { CompositeScreenProps } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Button, StyleSheet, Text, View } from "react-native";
import { RootStackParamList } from "../navigators/RootStackNavigator";
import { TabParamList } from "../navigators/TabNavigator";

type Props = CompositeScreenProps<
  NativeStackScreenProps<RootStackParamList, "Home">,
  BottomTabScreenProps<TabParamList>
>;

export default function HomeScreen(props: Props) {
  // props.route.params.id;

  return (
    <View style={styles.container}>
      <Text>RIPT REVENGE</Text>
      <Button
        title="invite"
        onPress={() => props.navigation.navigate("ContactScreen")}
      />
      <Button
        title="Start game"
        onPress={() =>
          props.navigation.navigate("GameScreen", { nrOfPlayers: 2 })
        }
      />
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
