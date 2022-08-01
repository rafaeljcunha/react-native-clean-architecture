import React from 'react';
import { Text as RNText } from 'react-native';
import { ITextProps } from '../../types/text.types';
import { styles } from './styles';

export default function Text({ textStyle, children, ...props }: ITextProps) {
  return (
    <RNText style={[styles.customText, textStyle]} {...props}>
      {children}
    </RNText>
  );
}
