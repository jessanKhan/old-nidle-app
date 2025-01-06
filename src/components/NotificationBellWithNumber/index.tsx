import React, { type FC } from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/Fontisto';
import styled from 'styled-components/native';

import { TextItem } from '..';

import Styles from './Style';

export const Wrapper = styled.View`
  width: 64;
  height: 64;
  margin-top: 5;
`;

const NotificationBellWithNumber: FC = () => {
  const badgeCount = '90';

  return (
    <Wrapper>
      <Icon style={Styles.marginExtra} name={'bell'} color={'#000'} size={30} />
      <View style={Styles.container}>
        <TextItem variant="labelSmall" color="#fff" txt={badgeCount} />
      </View>
    </Wrapper>
  );
};

export default NotificationBellWithNumber;
