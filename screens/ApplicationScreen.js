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
    console.log("second floor");
    setSelectedFloor("second");
    setDataList(secondDataList);
  };
  const changeFloorToFirst = () => {
    console.log("first floor");
    setSelectedFloor("first");
    setDataList(firstDataList);
  };

  const changeFloorToGround = () => {
    console.log("ground floor");
    setSelectedFloor("ground");
    setDataList(groundDataList);
  };
  const changeFloorToBasement = () => {
    console.log("basement floor");
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
              styles.switchOne,
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
              styles.switchTwo,
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
              styles.switchThree,
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
              styles.switchFour,
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
    textAlign: "center",
    color: "black",
    fontSize: 60,
    fontFamily: "Kanit-Black",
  },
  content: {
    width: 1000,
    height: 1500,
    backgroundColor: "#DCF2F1",
  },
  room: {
    position: "absolute",
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
    marginTop: 10,
  },
  descriptionText: {
    color: "#1035F1",
    fontSize: 18,
    marginBottom: 0,
  },
  buttonContainer: {
    marginTop: "auto",
  },
  fixedView: {
    position: "absolute",
    display: "none",
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
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  switchText: {
    color: "white",
    fontSize: 20,
  },
  switchOne: { backgroundColor: "black" },
  switchTwo: { backgroundColor: "black" },
  switchThree: { backgroundColor: "black" },
  switchFour: { backgroundColor: "black" },
  selectedFloor: { backgroundColor: "grey" },
});
