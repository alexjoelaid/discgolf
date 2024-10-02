import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { CompositeScreenProps } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Button, StyleSheet, Text, View } from "react-native";
import { RootStackParamList } from "../navigators/RootStackNavigator";
import { TabParamList } from "../navigators/TabNavigator";

type Props = CompositeScreenProps<
  //Första argumentet till composite ska vara närmare navigatorn till skärmen,
  //inklusive namnet på den specifika sidan
  NativeStackScreenProps<RootStackParamList, "Home">,
  //Andra argumentet är den närliggande navigatorn
  BottomTabScreenProps<TabParamList>
>;

export default function HomeScreen(props: Props) {
  // props.route.params.id;

  return (
    <View style={styles.container}>
      <Text>RIPT REVENGE</Text>
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
