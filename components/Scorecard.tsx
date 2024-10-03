import React, { useState } from "react";
import { ScrollView, StyleSheet, TextInput } from "react-native";

export default function Scorecard() {
  const [number, onChangeNumber] = useState("");

  return (
    <ScrollView>
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        keyboardType="numeric"
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: 600,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
