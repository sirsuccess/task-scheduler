import React from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
// import GlobalStyle from "../styles/globalStyles";
import Color from "../constants/Colors";
import { Entypo } from "@expo/vector-icons";

export default function AddBtn({
  title,
  widt,
  navigation,
  distination,
  setModalVisible
}) {
  return (
    <TouchableOpacity
      onPress={() => {
        setModalVisible(true);
      }}
      style={styles.btton}
    >
      <Entypo name="plus" size={32} color={Color.white} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btton: {
    width: 50,
    height: 50,
    backgroundColor: Color.green,
    color: Color.white,
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "center",
    borderRadius: 100,
    marginLeft: "auto",
    marginBottom: 30
  },
  text: {
    color: Color.white,
    fontSize: 20
  }
});
