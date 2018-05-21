import { storiesOf } from "@storybook/react-native";
import React from "react";

import LabelTextInput from "../../src/components/LabelTextInput";
import CenterView from "./CenterView";

storiesOf("TextInput")
  .addDecorator((getStory: any) => <CenterView>{getStory()}</CenterView>)
  .add("without text", () => (
    <LabelTextInput
      labelText="Username"
      placeholder="Please input your username here"
      style={{ width: 300 }}
    />
  ));
