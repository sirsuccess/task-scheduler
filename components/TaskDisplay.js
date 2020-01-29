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

import Color from "../constants/Colors";

export default function TaskDisplay({ todos, setTodo }) {
  const canceItem = (item, id) => {
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
            todos[id].isCancel = true;
            console.log("OK Pressed", todos);
          }
        }
      ],
      { cancelable: true }
    );
  };
  const deleteItem = (item, id) => {
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
            const filterDelet = todos.filter(() => todos[id] !== id);
            setTodo(filterDelet);
            console.log("OK Pressed", todos);
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
          data={todos}
          keyExtractor={item => `${item.date}${item.time}`}
          renderItem={({ item, index }) => (
            <TouchableOpacity onPress={() => routeHandler(item)}>
              <View style={styles.itemFlex}>
                <View style={styles.flexInner}>
                  <View>
                    <Text style={styles.TextFont}>{item.task} </Text>
                    <View style={styles.DisplayFlex}>
                      <Text style={styles.TextDate}>{item.date}</Text>
                      <Text style={styles.TextDate}>{item.time}</Text>
                    </View>
                  </View>
                  <View>
                    <TouchableOpacity
                      onPress={() => canceItem(item.task, index)}
                    >
                      <MaterialCommunityIcons
                        name="cancel"
                        size={32}
                        color={Color.warningBackground}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => deleteItem(item.task, index)}
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
    justifyContent: "space-between"
  },

  itemHero: {
    marginTop: 20,
    height: 420
  },
  TextFont: {
    width: "100%",
    fontSize: 20,
    color: Color.deepGreen
  }
});
