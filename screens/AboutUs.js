import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Welcome() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Proč jsme vytvořili tento projekt?</Text>
      <Text style={styles.description}>
        Naše škola je Velice Krásným Dílem architekta Jiřího Krohy, ale pro
        Návštěvníky kteří ji navštěvují poprvé může být obtížné se v ní
        orientovat, proto jsme vytvořili tuto mapu, aby se v ní lépe
        orientovalo.
      </Text>
      <Text style={styles.description}>
        Autor Projektu a Student školy: František Tesařík Pomocní učitel: Jan
        Till
      </Text>
    </View>
  );
}
//AA
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
  },
  description: {
    fontSize: 18,
    color: "#cccccc",
    textAlign: "center",
  },
});
