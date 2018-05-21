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
  labelAnimation: Animated.Value;
  text: string;
}

const styles = StyleSheet.create({
  container: {
    borderBottomColor: "#727272",
    borderBottomWidth: 1,
    height: 42,
    justifyContent: "flex-end",
    paddingBottom: 2
  },
  label: {
    bottom: 0,
    left: 0,
    position: "absolute"
  },
  textInput: {}
});

class LabelTextInput extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      labelAnimation: new Animated.Value(0),
      text: ""
    };
  }

  public render() {
    return (
      <View style={styles.container}>
        <Animated.Text
          style={[
            styles.label,
            human.caption1,
            {
              transform: [
                {
                  translateY: this.state.labelAnimation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, -20]
                  })
                },
                {
                  translateX: this.state.labelAnimation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, -6]
                  })
                },
                {
                  scaleX: this.state.labelAnimation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [1, 0.8]
                  })
                },
                {
                  scaleY: this.state.labelAnimation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [1, 0.8]
                  })
                }
              ]
            }
          ]}
        >
          {this.props.labelText}
        </Animated.Text>

        <TextInput
          onBlur={this.moveDownLabel}
          onFocus={this.moveUpLabel}
          onChangeText={this.setText}
          style={[styles.textInput, human.body]}
          value={this.state.text}
          {...this.props}
        />
      </View>
    );
  }

  private moveUpLabel = () => {
    Animated.timing(this.state.labelAnimation, {
      duration: 180,
      toValue: 1,
      useNativeDriver: true
    }).start();
  };

  private moveDownLabel = () => {
    if (this.state.text) {
      return;
    }

    Animated.timing(this.state.labelAnimation, {
      duration: 180,
      toValue: 0,
      useNativeDriver: true
    }).start();
  };

  private setText = (text: string) => {
    this.setState(() => ({ text }));
  };
}

export default LabelTextInput;
