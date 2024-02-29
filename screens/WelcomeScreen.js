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
    backgroundColor: "#e5e5e5", 
    paddingHorizontal: 20,
  },
  welcomeText: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 40,
    color: "#4a4a4a", 
    textAlign: "center",
  },
  button: {
    backgroundColor: "#ff6f61", 
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginBottom: 20,
    width: "100%",
    alignItems: "center",
  },
  buttonText: {
    color: "#ffffff", 
    fontSize: 16,
    fontWeight: "bold",
  },
});
