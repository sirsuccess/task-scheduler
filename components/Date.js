import React, { Component } from "react";
import { View, Text, Button, Platform, StyleSheet } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

export default class CalendarDDate extends Component {
  state = {
    date: new Date("2020-01-28T03:12:10.418Z"),
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
    setTask({ ...task, date: this.state.newDate });
  };

  show = mode => {
    this.setState({
      show: true,
      mode
    });
  };
  getRealDate = date => {
    let d = new Date(date);
    realDate = +d.getDate() + "/" + (d.getMonth() + 1) + "/" + d.getFullYear();
    return realDate;
  };

  datepicker = () => {
    this.show("date");
  };

  render() {
    const { show, date, newDate, mode } = this.state;

    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.text}>{newDate}</Text>
          <Button onPress={this.datepicker} title="Pick Date" />
        </View>
        {show && (
          <DateTimePicker
            value={date}
            mode={mode}
            is24Hour={true}
            display="default"
            onChange={this.setDate}
          />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  //   container: {
  //     flexDirection: "row",
  //     width: "100%",
  //     justifyContent: "space-evenly",
  //     marginTop: 20
  //     //   backgroundColor: "#fff"
  //   }
  text: {
    color: "green"
  }
});
