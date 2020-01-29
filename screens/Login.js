import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  TouchableWithoutFeedback,
  Keyboard
} from "react-native";
import Btn from "../components/loginBtn";
import Color from "../constants/Colors";

export default function Login({ navigation }) {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.ContainerFluid}>
        <View style={styles.container}>
          {/* <BigText text="Login" /> */}
          <View style={styles.InputText}>
            <TextInput placeholder="Email" keyboardType="email-address" />
          </View>
          <View style={styles.InputText}>
            <TextInput placeholder="Password" secureTextEntry={true} />
          </View>
          <TouchableOpacity>
            <View style={styles.Reset}>
              <Text style={styles.ResetText}>Reset Login details</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.LoginContainer}>
            <Btn
              title="Login"
              widt={150}
              navigation={navigation}
              distination={"screen"}
            />
            <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
              <Text style={styles.SignUp}>Sign Up</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.Social}>
            <TouchableOpacity>
              <Image
                style={{ width: 30, height: 30 }}
                source={require("../assets/images/google.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                style={{ width: 30, height: 30 }}
                source={require("../assets/images/facebook.png")}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  ContainerFluid: {
    width: "100%",
    flex: 1,
    backgroundColor: Color.white
  },
  container: {
    paddingTop: 100,
    width: "80%",
    backgroundColor: Color.white,
    marginLeft: "auto",
    marginRight: "auto"
  },

  InputText: {
    width: 300,
    borderBottomColor: Color.green5,
    borderBottomWidth: 1,
    marginTop: 50
  },
  Reset: {
    marginLeft: "auto",
    width: 200,
    color: Color.lightGray,
    marginTop: 10
  },
  ResetText: {
    color: Color.lightDark
  },
  LoginContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 300,
    marginTop: 100
  },
  SignUp: {
    fontSize: 25,
    color: Color.green2
  },
  Social: {
    flexDirection: "row",
    width: 100,
    justifyContent: "space-between",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 50
  }
});
