import React, { Component } from "react";
import {
  Animated,
  RegisteredStyle,
  StyleSheet,
  TextInput,
  TextStyle,
  View,
  ViewStyle
} from "react-native";
import { human } from "react-native-typography";

interface IProps {
  containerStyle?: RegisteredStyle<ViewStyle> | ViewStyle;
  labelText: string;
  textInputStyle?: RegisteredStyle<TextStyle> | TextStyle;
}
interface IState {
  isFocused: boolean;
  labelAnimation: Animated.Value;
  text: string;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F2F1F2",
    borderBottomColor: "#727272",
    borderBottomWidth: 1,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    height: 48,
    justifyContent: "flex-end",
    paddingBottom: 6,
    paddingLeft: 8,
    paddingRight: 8
  },
  focusedContainer: {
    borderBottomColor: "purple"
  },
  focusedLabel: {
    color: "purple"
  },
  label: {
    bottom: 4,
    left: 8,
    position: "absolute"
  }
});

class LabelTextInput extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      isFocused: false,
      labelAnimation: new Animated.Value(0),
      text: ""
    };
  }

  public render() {
    return (
      <View
        style={[
          styles.container,
          this.state.isFocused && styles.focusedContainer,
          this.props.containerStyle
        ]}
      >
        <Animated.Text
          style={[
            styles.label,
            human.body,
            this.state.isFocused && styles.focusedLabel,
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
                    outputRange: [0, -16]
                  })
                },
                {
                  scaleX: this.state.labelAnimation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [1, 0.6]
                  })
                },
                {
                  scaleY: this.state.labelAnimation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [1, 0.6]
                  })
                }
              ]
            }
          ]}
        >
          {this.props.labelText}
        </Animated.Text>

        <TextInput
          onBlur={this.handleBlur}
          onFocus={this.handleFocus}
          onChangeText={this.setText}
          style={[human.body, this.props.textInputStyle]}
          value={this.state.text}
        />
      </View>
    );
  }

  private handleBlur = () => {
    this.setState(() => ({ isFocused: false }));
    this.moveDownLabel();
  };

  private handleFocus = () => {
    this.setState(() => ({ isFocused: true }));
    this.moveUpLabel();
  };

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
