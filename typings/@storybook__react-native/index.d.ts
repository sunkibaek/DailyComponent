declare module "@storybook/react-native" {
  function configure(params: any): any;
  function getStorybookUI(params: any): any;
  function storiesOf(params: any): any;

  export { configure, getStorybookUI, storiesOf };
}
