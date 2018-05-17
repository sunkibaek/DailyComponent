import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

const styles = StyleSheet.create({
  main: {
    alignItems: "center",
    backgroundColor: "#F5FCFF",
    flex: 1,
    justifyContent: "center"
  }
});

export default class CenterView extends Component {
  public static defaultProps = {
    children: null
  };

  public render() {
    return <View style={styles.main}>{this.props.children}</View>;
  }
}
