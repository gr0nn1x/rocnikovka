import React from "react";
import { View, Text, StyleSheet, Pressable, ScrollView } from "react-native";
import dataList from "./data/data.json";

export default function App() {
  const test = (data) => {
    console.log(data.id);
  };

  return (
    <ScrollView horizontal={true}>
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
                  borderColor: data.color,
                },
                styles.room,
              ]}
            >
              <Pressable onPress={() => test(data)}>
                <Text>{data.name}</Text>
              </Pressable>
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 10000,
    height: 10000,
    backgroundColor: "plum",
  },
  room: {
    position: "absolute",
    backgroundColor: "lightblue",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
   
  },
  body: {},
});
