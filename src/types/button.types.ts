import { ITextStyle } from '../components/Text/Text';

export enum ButtonVariant {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

type Variant = ButtonVariant.PRIMARY | ButtonVariant.SECONDARY;

export interface IButtonProps {
  variant: Variant;
  onPress(): void;
  title: string;
  titleStyle?: ITextStyle;
}
