import { storiesOf } from "@storybook/react-native";
import React from "react";
import { ScrollView } from "react-native";

import LabelTextInput from "../../src/components/LabelTextInput";
import CenterView from "./CenterView";

storiesOf("TextInput")
  .addDecorator((getStory: any) => (
    <CenterView>
      <ScrollView>{getStory()}</ScrollView>
    </CenterView>
  ))
  .add("two inputs", () => (
    <>
      <LabelTextInput labelText="Username" textInputStyle={{ width: 300 }} />

      <LabelTextInput
        labelText="Email"
        containerStyle={{ marginTop: 16 }}
        textInputStyle={{ width: 300 }}
      />
    </>
  ));
