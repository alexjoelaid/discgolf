import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { CompositeScreenProps } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StyleSheet, Text, View } from "react-native";
import { RootStackParamList } from "../navigators/RootStackNavigator";
import { TabParamList } from "../navigators/TabNavigator";

type Props = CompositeScreenProps<
  //Första argumentet till composite ska vara närmare navigatorn till skärmen,
  //inklusive namnet på den specifika sidan
  BottomTabScreenProps<TabParamList, "GameScreen">,
  //Andra argumentet är den närliggande navigatorn
  NativeStackScreenProps<RootStackParamList>
>;

export default function GameScreen({ route }: Props) {
  console.log(route.params.nrOfPlayers);
  return (
    <View style={styles.container}>
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
