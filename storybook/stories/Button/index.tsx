import React, { Component } from "react";
import { TouchableHighlight, TouchableHighlightProperties } from "react-native";

interface IProps {
  onPress: TouchableHighlightProperties["onPress"];
}

export default class Button extends Component<IProps> {
  public static defaultProps = {
    children: null,
    onPress: () => {
      // Does nothing
    }
  };

  public render() {
    return (
      <TouchableHighlight onPress={this.props.onPress}>
        {this.props.children}
      </TouchableHighlight>
    );
  }
}
