import * as WebBrowser from "expo-web-browser";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  Alert
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Color from "../constants/Colors";
import { deleteTaskAction, cancelTaskAction } from "../redux/Action/action";

export default function TaskDisplay({ taskData }) {
  const dispatch = useDispatch();

  useEffect(() => {
    canceItem;
  }, []);

  const canceItem = (item, index, key) => {
    Alert.alert(
      "CANCEL TASK",
      `Do you want to cancel "${item}"`,
      [
        {
          text: "Cancel",
          style: "cancel"
        },
        {
          text: "OK",
          onPress: () => {
            dispatch(cancelTaskAction(index));
          }
        }
      ],
      { cancelable: true }
    );
  };
  const deleteItem = (item, key) => {
    Alert.alert(
      "DELETE TASK",
      `Do you want to delete "${item}"`,
      [
        {
          text: "Cancel",
          style: "cancel"
        },
        {
          text: "OK",
          onPress: () => {
            dispatch(deleteTaskAction(key));
          }
        }
      ],
      { cancelable: true }
    );
  };

  return (
    <ScrollView>
      <View style={styles.itemHero}>
        <FlatList
          data={taskData}
          keyExtractor={item => item.key}
          renderItem={({ item, index }) => (
            <TouchableOpacity>
              <View style={styles.itemFlex}>
                <View style={styles.flexInner}>
                  <View>
                    <Text
                      style={[
                        item.isCancel ? styles.cancelText : styles.TextFont
                      ]}
                    >
                      {item.taskInput}
                    </Text>
                    <View style={styles.DisplayFlex}>
                      <Text style={styles.TextDate}>{item.date}</Text>
                      <Text style={styles.TextDate}>{item.time}</Text>
                    </View>
                  </View>
                  <View>
                    <TouchableOpacity
                      onPress={() => canceItem(item.taskInput, index, item.key)}
                      style={[item.isCancel ? styles.displayNone : ""]}
                    >
                      <MaterialCommunityIcons
                        name="cancel"
                        size={32}
                        color={Color.warningBackground}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => deleteItem(item.taskInput, item.key)}
                    >
                      <MaterialCommunityIcons
                        name="delete-forever"
                        size={32}
                        color={Color.errorBackground}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </ScrollView>
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
  },
  itemFlex: {
    display: "flex",
    flexDirection: "row",
    // alignItems: "center",
    // justifyContent: "space-around",
    borderColor: Color.lightGreen,
    borderWidth: 2,
    marginBottom: 25,
    width: "90%",
    padding: 10,
    marginLeft: "auto",
    marginRight: "auto"
  },
  flexInner: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between"
  },
  DisplayFlex: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    width: 200
  },

  itemHero: {
    marginTop: 20,
    height: 420
  },
  TextFont: {
    width: "100%",
    fontSize: 20,
    color: Color.deepGreen
  },
  cancelText: {
    width: "100%",
    fontSize: 20,
    color: Color.gray,
    textDecorationLine: "line-through"
  },
  displayNone: {
    display: "none"
  }
});
