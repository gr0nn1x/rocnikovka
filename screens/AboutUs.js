import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Welcome() {
  return (
    <View style={styles.container}>
      <Text style={styles.nadpis}>Proč tento projekt vznikl? </Text>
      <Text style={styles.popisjedna}>
        Cílem bylo vytvořit pomůcku pro návštěvníky školy, kteří neznají
        rozpoložení učeben
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f0f0f0",
    textAlign: "center",
  },
  nadpis: { fontSize: 20, },
});
