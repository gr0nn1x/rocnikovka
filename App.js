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
    <ScrollView horizontal={true}>
      <View style={styles.container}>
        {dataList.map((data) => {
          return (
            <TouchableWithoutFeedback key={data.id} onPress={() => test(data)}>
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
        <TouchableWithoutFeedback onPress={() => setIsModalVisible(false)}>
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
        </TouchableWithoutFeedback>
        <View style={[styles.switch, styles.switchOne]}>
          <Text style={styles.switchText}>1</Text>
        </View>
        <View style={[styles.switch, styles.switchTwo]}>
          <Text style={styles.switchText}>2</Text>
        </View>
        <View style={[styles.switch, styles.switchThree]}>
          <Text style={styles.switchText}>3</Text>
        </View>
        <View style={[styles.switch, styles.switchFour]}>
          <Text style={styles.switchText}>4</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
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
  switch: {
    height: 100,
    width: 100,
    backgroundColor: "black",
    borderRadius: 10,
  },
  switchText: { color: "white", fontSize: 20 },
  switchOne: {
    top: windowWidth * 1.8,
    left: windowHeight * 0.05,
  },
  switchTwo: {
    top: windowWidth * 1.558,
    left: windowHeight * 0.2,
  },
  switchThree: {
    top: windowWidth * 1.316,
    left: windowHeight * 0.35,
  },
  switchFour: {
    top: windowWidth * 1.072,
    left: windowHeight * 0.5,
  },
});
