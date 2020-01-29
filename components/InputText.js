import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";

import Color from "../constants/Colors";

export default function inputText({ setTask }) {
  const handleChange = e => {
    setTask();
  };

  return (
    <View style={styles.InputText}>
      <TextInput
        placeholder="Task here ..."
        name="task"
        keyboardType="default"
        multiline={true}
        onChangeText={task => {
          setTask({ ...task, task });
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  InputText: {
    width: 300,
    borderBottomColor: Color.green,
    borderBottomWidth: 2,
    marginTop: 30,
    paddingLeft: 5,
    paddingRight: 5
  }
});
