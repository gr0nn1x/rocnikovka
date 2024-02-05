import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import dataList from "./data.json";

export default function App() {
  return (
    <View style={styles.container}>
      {dataList.map((data) => {
        return (
          <View
            key={data.id}
            style={[
              {
                left: data.x,
                top: data.y,
                width: data.width,
                height: data.height,
              },
              styles.room,
            ]}
          >
            <Text>{data.name}</Text>
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "plum",
  },
  room: {
    position: "absolute",
    backgroundColor: "lightblue",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "black",
  },
});
