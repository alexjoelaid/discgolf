import { NavigatorScreenParams } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import TabNavigator from "./TabNavigator";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SettingsScreen from "../screens/SettingsScreen";

export type RootStackParamList = {
  //Se till att TS känner till alla parameterlistor från nästlade tab navigators skärmar
  HomeNavigator: undefined;
  Settings: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

export default function RootStackNavigator() {
  return (
    <RootStack.Navigator>
      <RootStack.Screen
        name="HomeNavigator"
        component={TabNavigator}
        options={{ headerShown: false }}
      />
      <RootStack.Screen
        name="Settings"
        component={SettingsScreen}
        options={{ headerBackTitle: "Back" }}
      />
    </RootStack.Navigator>
  );
}
