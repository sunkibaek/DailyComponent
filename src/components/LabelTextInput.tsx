import React, { Component } from "react";
import {
  Animated,
  StyleSheet,
  TextInput,
  TextInputProperties,
  View
} from "react-native";
import { human } from "react-native-typography";

type IProps = TextInputProperties & {
  labelText: string;
};
interface IState {
  labelMarginBottom: Animated.Value;
}

const styles = StyleSheet.create({
  container: {
    borderBottomColor: "#727272",
    borderBottomWidth: 1,
    height: 42,
    justifyContent: "space-between",
    paddingBottom: 2
  },
  label: {
    left: 0,
    position: "absolute"
  },
  textInput: {}
});

class LabelTextInput extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      labelMarginBottom: new Animated.Value(20)
    };
  }

  public render() {
    return (
      <View style={styles.container}>
        <Animated.Text
          style={[{ top: this.state.labelMarginBottom }, human.caption1]}
        >
          {this.props.labelText}
        </Animated.Text>

        <TextInput
          onFocus={this.moveUpLabel}
          style={[styles.textInput, human.body]}
          {...this.props}
        />
      </View>
    );
  }

  private moveUpLabel = () => {
    Animated.timing(this.state.labelMarginBottom, {
      duration: 300,
      toValue: 0
    }).start();
  };
}

export default LabelTextInput;
