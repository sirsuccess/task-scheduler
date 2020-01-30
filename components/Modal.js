import React, { Component, useState, useEffect } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
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

import Btn from "./AddBtn";
import CalendarDate from "./Date";
import CalendarTime from "./Time";
import InputText from "./InputText";
import Color from "../constants/Colors";
import { addTaskAction, deleteTask, cancelTask } from "../redux/Action/action";

export default function ModalComp() {
  const [modalVisible, setModalVisible] = useState(false);
  const InitialTodo = {
    taskInput: "i want to code",
    time: "12pm",
    date: "1/12/2020",
    isCancel: false,
    key: Math.random()
  };
  const dispatch = useDispatch();
  const [task, setTask] = useState(InitialTodo);

  let setNewText = text => setTask({ ...task, taskInput: text });
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
            <InputText setNewText={setNewText} task={task} />
            <View style={styles.Date}>
              <CalendarDate setTask={setTask} task={task} />
              <CalendarTime setTask={setTask} task={task} />
            </View>
            <View style={styles.SaveCancelBtn}>
              <Button
                color={Color.green}
                title="Save"
                onPress={() => {
                  dispatch(addTaskAction(task));
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
