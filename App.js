import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  ScrollView,
  Modal,
  Button,
  Dimensions,
} from "react-native";
import dataList from "./data/data.json";

const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;

export default function App() {
  const [selectedData, setSelectedData] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const test = (data) => {
    setSelectedData(data);
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <ScrollView horizontal={true}>
          <View style={styles.content}>
            {dataList.map((data) => {
              return (
                <TouchableWithoutFeedback
                  key={data.id}
                  onPress={() => test(data)}
                >
                  <View
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
                    <Text>{data.name}</Text>
                  </View>
                </TouchableWithoutFeedback>
              );
            })}
          </View>
        </ScrollView>
        <Modal
          visible={isModalVisible}
          onRequestClose={closeModal}
          animationType="slide"
          presentationStyle="pageSheet"
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalText}>
                {selectedData ? selectedData.name : ""}
              </Text>
              {selectedData && selectedData.teachers && (
                <Text style={styles.teacherText}>
                  Teacher: {selectedData.teachers}
                </Text>
              )}
              <View style={styles.buttonContainer}>
                <Button title="Close" onPress={closeModal} />
              </View>
            </View>
          </View>
        </Modal>
      </ScrollView>
      <View style={styles.fixedView}>
        <View style={[styles.switch, styles.switchOne]}>
          <Text style={styles.switchText}>Třetí Patro</Text>
        </View>
        <View style={[styles.switch, styles.switchTwo]}>
          <Text style={styles.switchText}>Druhé Patro</Text>
        </View>
        <View style={[styles.switch, styles.switchThree]}>
          <Text style={styles.switchText}>Přízemí</Text>
        </View>
        <View style={[styles.switch, styles.switchFour]}>
          <Text style={styles.switchText}>Nulté Patro</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    width: 700,
    height: 1000,
    backgroundColor: "#DCF2F1",
  },
  room: {
    position: "absolute",
    backgroundColor: "#7FC7D9",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "#7FC7D9",
    width: windowWidth * 0.8,
    height: windowHeight * 0.8,
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  modalText: {
    color: "#1035F1",
    fontSize: 24,
    marginBottom: 10,
  },
  teacherText: {
    color: "#1035F1",
    fontSize: 18,
    marginBottom: 10,
  },
  buttonContainer: {
    marginTop: "auto",
  },
  fixedView: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: "space-between",
    padding: 10,
  },
  switch: {
    height: windowHeight * 0.06,
    width: windowWidth * 0.95,
    marginTop: 10,
    backgroundColor: "black",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  switchText: {
    color: "white",
    fontSize: 20,
  },
});
