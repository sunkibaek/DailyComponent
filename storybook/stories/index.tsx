import { storiesOf } from "@storybook/react-native";
import React from "react";
import { ScrollView } from "react-native";

import LabelTextInput from "../../src/components/LabelTextInput";
import CenterView from "./CenterView";

storiesOf("TextInput")
  .addDecorator((getStory: any) => <CenterView>{getStory()}</CenterView>)
  .add("without text", () => (
    <ScrollView>
      <LabelTextInput labelText="Username" style={{ width: 300 }} />
    </ScrollView>
  ));
