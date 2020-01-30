import * as WebBrowser from "expo-web-browser";
import React from "react";
import { useSelector } from "react-redux";

import { StyleSheet, View, Text } from "react-native";

import TaskDisplay from "../components/TaskDisplay";
import Color from "../constants/Colors";

export default function AllTask() {
  const taskData = useSelector(state => state.taskList);
  const realTask = taskData.filter(item => item.taskInput !== undefined);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>ALL TASK</Text>
      <TaskDisplay taskData={realTask} />
    </View>
  );
}
AllTask.navigationOptions = {
  header: null
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  text: {
    fontSize: 30,
    textAlign: "center",
    marginTop: 10,
    color: Color.green
  }
});
