import { StyleSheet, Text, View } from "react-native";
import { cards } from "../cards/carddata"; // Importing the cards array

export default function CardScreen() {
  return (
    <View style={styles.container}>
      {cards.map((card) => (
        <View key={card.id} style={styles.card}>
          <Text style={styles.cardText}>{card.cardtext}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  card: {
    backgroundColor: "#f9f9f9",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    width: "100%",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 3,
  },
  cardText: {
    fontSize: 18,
  },
});
