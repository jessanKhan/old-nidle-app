import * as React from 'react';
import { Text } from 'react-native-paper';

import { colors } from '../../theme/colors';

interface ICustomTextInputProps {
  txt: string;
  color?: string;
  variant?: string;
  fontWeight?: 'normal' | '900' | '800' | '700' | '600' | '500' | '400' | 'bold';
  fontSize?: number;
  textAlign?: 'center' | 'auto' | 'left' | 'right' | 'justify' | undefined;
}

const CustomTextItem: React.FC<ICustomTextInputProps> = ({
  txt,
  color = colors.iconEye,
  variant = 'labelMedium',
  fontWeight,
  fontSize,
  textAlign
}) => (
  <Text style={{ color, fontWeight, fontSize, textAlign }} variant={variant}>
    {txt}
  </Text>
);

export default CustomTextItem;
