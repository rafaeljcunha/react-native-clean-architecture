import { StyleProp, TextStyle as ITextStyle } from 'react-native';

export type TextStyle = StyleProp<ITextStyle>;

export interface ITextProps {
  children: React.ReactNode;
  textStyle?: TextStyle;
}
