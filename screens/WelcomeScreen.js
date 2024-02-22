import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function Welcome({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Mapa Střední Průmyslové Školy v Mladé Boleslavy</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Application")}
      >
        <Text style={styles.buttonText}>Jít na mapu školy</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("About")}
      >
        <Text style={styles.buttonText}>O Aplikaci</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f0f0f0",
  },
  welcomeText: {
    fontSize: 36,
    fontWeight: "bold",
    marginBottom: 120,
    color: "#333",
    textAlign: "center", // Center the text horizontally
  },
  button: {
    backgroundColor: "#007bff",
    padding: 15,
    borderRadius: 8,
    marginBottom: 20,
    width: 250,
    alignItems: "center",
  },
  buttonText: { color: "#fff", fontSize: 18 },
});
