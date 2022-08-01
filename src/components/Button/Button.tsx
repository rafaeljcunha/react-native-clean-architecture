import React from 'react';
import { TouchableOpacity } from 'react-native';
import Text from '../Text/Text';
import { ButtonVariant, IButtonProps } from '../../types/button.types';
import { styles } from './styles';
import { theme } from '../../theme';

export default function Button({
  variant,
  title,
  onPress,
  titleStyle,
  ...props
}: IButtonProps) {
  const backgroundColor =
    variant === ButtonVariant.PRIMARY
      ? theme.color.primary
      : theme.color.secondary;

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.customButton,
        {
          backgroundColor,
        },
      ]}
      {...props}>
      <Text textStyle={titleStyle}>{title}</Text>
    </TouchableOpacity>
  );
}
