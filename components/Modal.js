import React, { Component, useState } from "react";
import {
  Modal,
  Text,
  TouchableHighlight,
  View,
  Alert,
  Button,
  TextInput,
  StyleSheet,
  FlatList,
  TouchableOpacity
} from "react-native";

import Btn from "./buttons";
import CalendarDate from "./Date";
import CalendarTime from "./Time";
import InputText from "./InputText";
import Color from "../constants/Colors";

export default function ModalComp({ setTodo, setTask, task, todos }) {
  const [modalVisible, setModalVisible] = useState(false);

  // console.log(task);

  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
        <View style={styles.container}>
          <View>
            <Text>New Todo</Text>
            <InputText setTask={setTask} />
            <View style={styles.Date}>
              <CalendarDate setTask={setTask} task={task} />
              <CalendarTime setTask={setTask} task={task} />
            </View>
            <View style={styles.SaveCancelBtn}>
              <Button
                color={Color.green}
                title="Save"
                onPress={() => {
                  setTodo([...todos, task, (isCancel = false)]);
                  setModalVisible(!modalVisible);
                }}
              />
              <Button
                title="cancel"
                color="red"
                onPress={() => {
                  setModalVisible(!modalVisible);
                }}
              />
            </View>
          </View>
        </View>
      </Modal>

      <Btn setModalVisible={setModalVisible} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginRight: "auto",
    marginLeft: "auto",
    justifyContent: "center",
    width: 300
  },
  SaveCancelBtn: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 100
  },
  Date: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-evenly",
    marginTop: 20
    //   backgroundColor: "#fff"
  }
});
