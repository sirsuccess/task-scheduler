import React from "react";
import { Platform } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import { createMaterialTopTabNavigator } from "react-navigation-tabs";

import TabBarIcon from "../components/TabBarIcon";
import HomeScreen from "../screens/Task";
import LinksScreen from "../screens/CancelTask";
import SettingsScreen from "../screens/AllTask";

const config = Platform.select({
  web: { headerMode: "screen" },
  default: {}
});

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: "TASK"
};

HomeStack.path = "";

const LinksStack = createStackNavigator(
  {
    Links: LinksScreen
  },
  config
);

LinksStack.navigationOptions = {
  tabBarLabel: "CANCEL TASK"
};

LinksStack.path = "";

const SettingsStack = createStackNavigator(
  {
    Settings: SettingsScreen
  },
  config
);

SettingsStack.navigationOptions = {
  tabBarLabel: "ALL TASK"
};

SettingsStack.path = "";

const tabNavigator = createMaterialTopTabNavigator(
  {
    HomeStack,
    LinksStack,
    SettingsStack
  },
  {
    tabBarOptions: {
      style: {
        paddingTop: 15
        // backgroundColor: "green"
      }
    }
    // swipeEnabled: true
  }
);

tabNavigator.path = "";

export default tabNavigator;
