import React, { type FC } from 'react';
import { View } from 'react-native';
import { Col, Row } from 'react-native-easy-grid';

import { DrawerIcon } from '@/assets';

import NotificationBellWithNumber from '../NotificationBellWithNumber';
import TextItem from '../TextItem';

import Styles from './Styles';

const CustomNavBarHeader: FC = () => {
  return (
    <Row style={Styles.container}>
      <Col style={Styles.drawerMenuIcon}>
        <DrawerIcon />
      </Col>
      <Col style={Styles.MidTextIcon}>
        <TextItem txt="Capacity Analysis" variant="titleLarge" fontWeight="bold" color="#000" />
      </Col>
      <Col style={Styles.bellIcon}>
        <View style={Styles.bellIconText}>
          <NotificationBellWithNumber />
        </View>
      </Col>
    </Row>
  );
};

export default CustomNavBarHeader;
