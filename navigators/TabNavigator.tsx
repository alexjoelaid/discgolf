import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CardScreen from "../screens/CardScreen";
import GameScreen from "../screens/GameScreen";

//Beskriv vad navigatorn ska innehålla
export type TabParamList = {
  CardScreen: undefined;
  GameScreen: { nrOfPlayers: number };
};
//Skapar navigatorn från TabParamList
const Tab = createBottomTabNavigator<TabParamList>();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ navigation }) => ({
        headerRight: (props) => (
          <MaterialIcons
            style={{ marginRight: 16 }}
            name="settings"
            size={24}
            color={props.tintColor}
            onPress={() => navigation.navigate("Settings")}
          />
        ),
      })}
    >
      <Tab.Screen name="CardScreen" component={CardScreen} />
      <Tab.Screen name="GameScreen" component={GameScreen} />
    </Tab.Navigator>
  );
}
