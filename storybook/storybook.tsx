import { configure, getStorybookUI } from "@storybook/react-native";
import React, { Component } from "react";
import { AppRegistry } from "react-native";

configure(() => {
  require("./stories");
});

const StorybookUIRoot = getStorybookUI({ port: 7007, onDeviceUI: true });

class StorybookUIHMRRoot extends Component {
  public render() {
    return <StorybookUIRoot />;
  }
}

AppRegistry.registerComponent("DailyComponent", () => StorybookUIHMRRoot);

export default StorybookUIHMRRoot;
