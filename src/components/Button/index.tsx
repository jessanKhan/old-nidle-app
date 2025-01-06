import * as React from 'react';
import { TouchableOpacity } from 'react-native';

import { EButtonType } from '@/app-enum';

import { colors } from '../../theme/colors';
import { TextItem } from '..';

import Styles from './Styles';

interface ICustomTextInputProps {
  txt: string;
  type?: string;
  pressFunction?: () => void;
}

const CustomButtonItem: React.FC<ICustomTextInputProps> = ({
  txt,
  type = EButtonType.GrayBtn,
  pressFunction
}) => (
  <TouchableOpacity
    style={type === EButtonType.GrayBtn ? Styles.buttonGray : Styles.buttonWhite}
    onPress={pressFunction}>
    <TextItem
      txt={txt}
      color={type === EButtonType.GrayBtn ? colors.white : colors.black}
      fontSize={16}
      fontWeight={'700'}
    />
  </TouchableOpacity>
);

export default CustomButtonItem;
