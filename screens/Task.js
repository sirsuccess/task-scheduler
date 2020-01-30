import * as WebBrowser from "expo-web-browser";
import React, { useState, useEffect } from "react";
import { connect, useDispatch, useSelector } from "react-redux";

import { StyleSheet, TouchableOpacity, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Modal from "../components/Modal";
import Color from "../constants/Colors";
import TaskDisplay from "../components/TaskDisplay";
import {
  addTask,
  deleteTask,
  cancelTask,
  sortTaskAction
} from "../redux/Action/action";

function HomeScreen() {
  const taskData = useSelector(state => state.taskList);

  let notCancelTask = taskData.filter(item => item.isCancel === false);

  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <View style={styles.sort}>
        <TouchableOpacity onPress={() => dispatch(sortTaskAction())}>
          <MaterialCommunityIcons
            name="sort-ascending"
            size={32}
            color={Color.green}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <MaterialCommunityIcons
            name="sort-descending"
            size={32}
            color={Color.green}
          />
        </TouchableOpacity>
      </View>
      <TaskDisplay taskData={notCancelTask} />
      <Modal />
    </View>
  );
}
HomeScreen.navigationOptions = {
  header: null
};
const mapStateToProps = state => {
  return {
    tasks: state
  };
};
const mapDispatchToProps = dispatch => {
  return {
    delete: key => dispatch(deleteTask(key))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  sort: {
    flexDirection: "row",
    marginLeft: "auto",
    marginRight: 10,
    justifyContent: "space-between",
    width: 80
  }
});
