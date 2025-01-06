import * as React from 'react';
import { Switch } from 'react-native-paper';

interface ICustomTextInputProps {
  toggleFunction?: () => void;
  color?: string;
}

const CustomButtonItem: React.FC<ICustomTextInputProps> = ({ color, toggleFunction }) => {
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);

  const onToggleSwitch = React.useCallback(() => {
    setIsSwitchOn(prevIsSwitchOn => !prevIsSwitchOn);
  }, []);

  return <Switch color={color} value={isSwitchOn} onValueChange={onToggleSwitch} />;
};

export default CustomButtonItem;
