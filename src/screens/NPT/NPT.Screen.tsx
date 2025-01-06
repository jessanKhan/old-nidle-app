import React, { type FC, useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list';
import { Col, Grid, Row } from 'react-native-easy-grid';
import Modal from 'react-native-modal';
import DateTimePicker, { type DateTimePickerEvent } from '@react-native-community/datetimepicker';

import { List, SelectDate } from '@/assets/index';
import { CustomNavBarHeader, TextItem } from '@/components';
import { colors } from '@/theme/colors';

import Styles from './Styles';

interface SelectedDate {
  nativeEvent: {
    timestamp: number;
    utcOffset: number;
  };
  type: 'set';
}

const NPTScreen: FC = () => {
  const [mydate] = useState(new Date());
  const [isDisplayDate, setShow] = useState(false);

  const [selected, setSelected] = React.useState('');

  const [isModalVisible] = React.useState(false);

  const data = [
    { key: '1', value: '841794' },
    { key: '2', value: '841799' },
    { key: '3', value: '841797' },
    { key: '4', value: '841792' },
    { key: '5', value: '841791' },
    { key: '6', value: '841790' }
  ];

  const Divider: FC = () => {
    return <View style={Styles.dvider}></View>;
  };

  const changeSelectedDate = (
    event: DateTimePickerEvent,
    selectedDate: Date | undefined | SelectedDate
  ): void => {
    // const currentDate = selectedDate || mydate;
    // setDate(currentDate.);
    setShow(false);
  };
  // const showMode = (currentMode: any): void => {
  //     setShow(true);

  // };
  // const displayDatepicker = (): void => {
  //     showMode('date');
  // };

  return (
    <Grid>
      <CustomNavBarHeader />

      <Modal isVisible={isModalVisible}>
        <View style={Styles.flex1jone}>
          <Row style={Styles.firstRow}>
            <View style={Styles.width100}>
              <SelectList
                setSelected={(val: any) => {
                  setSelected(val);
                }}
                data={data}
                save="value"
                search={true}
              />
            </View>
          </Row>
        </View>
      </Modal>

      <Divider />
      <Row style={Styles.searchRow}>
        <Col style={Styles.listIcon}>
          <List />
        </Col>
        <Col style={Styles.allCenter}>
          <TextItem txt="Select Unit and Line" />
        </Col>
        <Col style={Styles.searchGrid}>
          <TouchableOpacity style={Styles.searchButton}>
            <TextItem txt="Search" color={colors.white} />
          </TouchableOpacity>
        </Col>
      </Row>
      <Divider />

      <Row style={Styles.itemRow}>
        <Col style={Styles.allCenter}>
          <TextItem txt={selected !== '' ? selected : 'Select Date'} />
        </Col>
        <Col style={[Styles.allCenter, Styles.widthExtra]}>
          <TouchableOpacity
            onPress={() => {
              setShow(true);
            }}
            style={Styles.button}>
            <SelectDate />
            <View style={Styles.lightWidth}></View>
            <TextItem txt="Select Date" />
          </TouchableOpacity>
        </Col>
      </Row>
      <Divider />

      <Row style={Styles.itemRow}>
        <Col style={Styles.allCenter}>
          <TextItem txt="Select Style" />
        </Col>
        <Col style={Styles.dropBox}>
          <SelectList
            setSelected={(val: any) => {
              setSelected(val);
            }}
            data={data}
            save="value"
            search={true}
          />
        </Col>
      </Row>

      {isDisplayDate && (
        <DateTimePicker
          testID="dateTimePicker"
          value={mydate}
          // mode={displaymode}
          is24Hour={true}
          display="default"
          onChange={changeSelectedDate}
        />
      )}
    </Grid>
  );
};

export default NPTScreen;
