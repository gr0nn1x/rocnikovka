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
import groundDataList from "../data/groundFloorData.json";
import firstDataList from "../data/firstFloorData.json";
import secondDataList from "../data/secondFloorData.json";
import basementDataList from "../data/basementFloorData.json";

const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;

export default function App() {
  const [selectedData, setSelectedData] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [dataList, setDataList] = useState(groundDataList);
  const [selectedFloor, setSelectedFloor] = useState("ground");

  const test = (data) => {
    setSelectedData(data);
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };

  const changeFloorToSecond = () => {
    setSelectedFloor("second");
    setDataList(secondDataList);
  };
  const changeFloorToFirst = () => {
    setSelectedFloor("first");
    setDataList(firstDataList);
  };

  const changeFloorToGround = () => {
    setSelectedFloor("ground");
    setDataList(groundDataList);
  };
  const changeFloorToBasement = () => {
    setSelectedFloor("basement");
    setDataList(basementDataList);
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
                        backgroundColor: data.bgcolor,
                      },
                      styles.room,
                    ]}
                  >
                    <Text style={styles.roomText}>{data.name}</Text>
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
              {selectedData && selectedData.description && (
                <Text style={styles.descriptionText}>
                  Popis: {selectedData.description}
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
        <TouchableWithoutFeedback onPress={changeFloorToSecond}>
          <View
            style={[
              styles.switch,
              selectedFloor === "second" && styles.selectedFloor,
            ]}
          >
            <Text style={styles.switchText}>Druhé Patro</Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={changeFloorToFirst}>
          <View
            style={[
              styles.switch,
              selectedFloor === "first" && styles.selectedFloor,
            ]}
          >
            <Text style={styles.switchText}>První Patro</Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={changeFloorToGround}>
          <View
            style={[
              styles.switch,
              selectedFloor === "ground" && styles.selectedFloor,
            ]}
          >
            <Text style={styles.switchText}>Přízemí</Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={changeFloorToBasement}>
          <View
            style={[
              styles.switch,
              selectedFloor === "basement" && styles.selectedFloor,
            ]}
          >
            <Text style={styles.switchText}>Nulté Patro</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e0e0e0",
  },
  content: {
    width: 1000,
    height: 1500,
    backgroundColor: "#f0f0f0",
  },
  room: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
  },
  roomText: {
    color: "#333",
    fontSize: 12,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "#fff",
    width: windowWidth * 0.8,
    height: windowHeight * 0.8,
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  modalText: {
    color: "#333",
    fontSize: 20,
    marginBottom: 10,
  },
  teacherText: {
    color: "#333",
    fontSize: 16,
    marginTop: 10,
  },
  descriptionText: {
    color: "#333",
    fontSize: 16,
    marginBottom: 0,
  },
  buttonContainer: {
    marginTop: "auto",
  },
  fixedView: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#333",
    padding: 10,
  },
  switch: {
    height: windowHeight * 0.06,
    width: windowWidth * 0.2,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  switchText: {
    color: "#fff",
    fontSize: 14,
  },
  selectedFloor: {
    backgroundColor: "#666",
  },
});
