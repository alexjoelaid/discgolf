import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { CompositeScreenProps } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import BatteryView from "../expo-components/BatteryView";
import { RootStackParamList } from "../navigators/RootStackNavigator";
import { TabParamList } from "../navigators/TabNavigator";
import { useState } from "react";

type Props = CompositeScreenProps<
  BottomTabScreenProps<TabParamList, "GameScreen">,
  NativeStackScreenProps<RootStackParamList>
>;

export default function GameScreen({ route }: Props) {
  const [number1, onChangeNumber1] = useState("");
  const [number2, onChangeNumber2] = useState("");
  const [number3, onChangeNumber3] = useState("");
  const [number4, onChangeNumber4] = useState("");
  // temporary code, will take input of how many players and how many holes later, this is for preview only
  return (
    <View style={styles.container}>
      <BatteryView />
      <Text>GAME SCREEN</Text>
      <ScrollView style={{ flex: 1 }}>
        <View style={{ flexDirection: "row" }}>
          <View style={styles.playercolumns}>
            <Text>PLAYER 1</Text>
            <TextInput
              style={styles.input}
              onChangeText={onChangeNumber1}
              value={number1}
              keyboardType="numeric"
            />
          </View>
          <View style={styles.playercolumns}>
            <Text>PLAYER 2</Text>
            <TextInput
              style={styles.input}
              onChangeText={onChangeNumber2}
              value={number2}
              keyboardType="numeric"
            />
          </View>
          <View style={styles.playercolumns}>
            <Text>PLAYER 3</Text>
            <TextInput
              style={styles.input}
              onChangeText={onChangeNumber3}
              value={number3}
              keyboardType="numeric"
            />
          </View>
          <View style={styles.playercolumns}>
            <Text>PLAYER 4</Text>
            <TextInput
              style={styles.input}
              onChangeText={onChangeNumber4}
              value={number4}
              keyboardType="numeric"
            />
          </View>
        </View>
      </ScrollView>
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
  input: {
    height: 40,
    width: 60,
    margin: 10,
    borderWidth: 1,
    padding: 10,
  },
  playercolumns: {
    alignItems: "center",
    justifyContent: "center",
  },
});
