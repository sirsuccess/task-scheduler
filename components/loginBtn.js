import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
// import GlobalStyle from "../styles/globalStyles";
import Color from "../constants/Colors";

export default function Btn({ title, widt, navigation, distination }) {
  // console.log(navigation);

  const routeHandler = () => navigation.navigate(distination);
  return (
    <View
      style={[
        {
          width: widt,
          borderRadius: 20,
          overflow: "hidden"
        }
      ]}
    >
      <Button
        title={title}
        color={
          "linear-gradient(107deg, rgba(117, 233, 119, 1), rgba(112, 229, 109, 1), rgba(94, 229, 85, 1), rgba(45, 228, 39, 1))"
        }
        onPress={routeHandler}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  btton: {
    width: 300,
    backgroundColor: Color.green5,
    color: Color.white
  }
});
