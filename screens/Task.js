import * as WebBrowser from "expo-web-browser";
import React, { useState, useEffect } from "react";
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  Alert
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Modal from "../components/Modal";
import Color from "../constants/Colors";
import TaskDisplay from "../components/TaskDisplay";

export default function HomeScreen() {
  const InitialTodo = {
    taskInput: "i want to code",
    time: "12pm",
    date: "1/12/2020",
    isCancel: false
  };
  const [task, setTask] = useState(InitialTodo);
  const [todos, setTodo] = useState([task]);

  useEffect(() => {}, [todos]);
  // useEffect(() => {
  //   // const byDate = todos.slice(0, todos.length);
  //   // console.log("by date:", byDate);
  //   // const sortTask = byDate.sort(function(a, b) {
  //   //   return a.date - b.date;
  //   // });
  //   // setTodo(sortTask);
  //   // console.log("this is date", sortTask);
  // }, [todos]);
  console.log(todos);

  return (
    <View style={styles.container}>
      <View style={styles.sort}>
        <TouchableOpacity>
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
      <TaskDisplay todos={todos} setTodo={setTodo} />
      <Modal setTodo={setTodo} setTask={setTask} task={task} todos={todos} />
    </View>
  );
}

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

HomeScreen.navigationOptions = {
  header: null
};
