declare module "react-native-typography" {
  import { RegisteredStyle, TextStyle } from "react-native";

  export class human {
    static largeTitle: RegisteredStyle<TextStyle>;
    static title1: RegisteredStyle<TextStyle>;
    static title2: RegisteredStyle<TextStyle>;
    static title3: RegisteredStyle<TextStyle>;
    static headline: RegisteredStyle<TextStyle>;
    static body: RegisteredStyle<TextStyle>;
    static callout: RegisteredStyle<TextStyle>;
    static subhead: RegisteredStyle<TextStyle>;
    static footnote: RegisteredStyle<TextStyle>;
    static caption1: RegisteredStyle<TextStyle>;
    static caption2: RegisteredStyle<TextStyle>;
  }
}
