import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Welcome() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Proč jsme vytvořili tento projekt?</Text>
      <Text style={styles.description}>
        Cílem bylo usnadnit orientaci návštěvníkům školy a poskytnout jim informace o prostorách.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#1f1f1f", 
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#ffffff", 
    marginBottom: 20,
    textAlign: "center",
    fontFamily: "Arial", 
  },
  description: {
    fontSize: 18,
    color: "#cccccc", 
    textAlign: "center",
    fontFamily: "Arial",
  },
});
