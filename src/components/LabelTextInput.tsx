import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TextInputProperties,
  View
} from "react-native";
import { human } from "react-native-typography";

type IProps = TextInputProperties & {
  labelText: string;
};

const styles = StyleSheet.create({
  container: {
    borderBottomColor: "#727272",
    borderBottomWidth: 1
  },
  label: {
    marginBottom: 4
  },
  textInput: {}
});

class LabelTextInput extends Component<IProps> {
  public render() {
    return (
      <View style={styles.container}>
        <Text style={[styles.label, human.caption1]}>
          {this.props.labelText}
        </Text>

        <TextInput style={[styles.textInput, human.body]} {...this.props} />
      </View>
    );
  }
}

export default LabelTextInput;
