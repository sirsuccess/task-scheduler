import React, { Component } from "react";
import { View, Text, Button, Platform, StyleSheet } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

export default class CalendarDDate extends Component {
  state = {
    date: new Date(),
    mode: "date",
    show: false,
    newDate: ""
  };

  setDate = (event, date) => {
    date = date || this.state.date;

    this.setState({
      show: Platform.OS === "ios" ? true : false,
      date,
      newDate: this.getRealDate(date)
    });
    const { setTask, task } = this.props;
    setTask({ ...task, time: this.state.newDate });
  };

  show = mode => {
    this.setState({
      show: true,
      mode
    });
  };

  timepicker = () => {
    this.show("time");
  };

  getRealDate = date => {
    // console.log("helo");

    let d = new Date(date);
    const h = d.getHours();
    let clock2 = "";
    if (h < 12) {
      clock2 = " AM";
    } else {
      clock2 = " PM";
    }

    realDate = h + ":" + d.getMinutes() + clock2;
    // const getPM = h => {
    //   if (h < 12) {
    //     return " AM";
    //   }
    //   return " PM";
    // };
    // console.log(realDate);
    return realDate;
  };

  render() {
    const { show, date, newDate, mode } = this.state;
    // console.log(show, date, mode);

    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.text}>{newDate}</Text>
          <Button onPress={this.timepicker} title="Pick Time" />
        </View>
        {show && (
          <DateTimePicker
            value={date}
            mode={mode}
            is24Hour={false}
            display="default"
            onChange={this.setDate}
          />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  // container: {
  //   flexDirection: "row",
  //   width: "100%",
  //   justifyContent: "space-evenly",
  //   marginTop: 20
  //   //   backgroundColor: "#fff"
  // }
  text: {
    color: "green"
  }
});
