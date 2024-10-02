import { NavigatorScreenParams } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import SettingsScreen from "../screens/SettingsScreen";
import ContactScreen from "../expo-components/ContactScreen";
import TabNavigator, { TabParamList } from "./TabNavigator";

export type RootStackParamList = {
  Home: undefined;
  Settings: undefined;
  GameScreen: { nrOfPlayers: number } & NavigatorScreenParams<TabParamList>;
  ContactScreen: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

export default function RootStackNavigator() {
  return (
    <RootStack.Navigator>
      <RootStack.Screen name="Home" component={HomeScreen} />
      <RootStack.Screen
        name="Settings"
        component={SettingsScreen}
        options={{ headerBackTitle: "Back" }}
      />
      <RootStack.Screen name="GameScreen" component={TabNavigator} />
      <RootStack.Screen name="ContactScreen" component={ContactScreen} />
    </RootStack.Navigator>
  );
}
