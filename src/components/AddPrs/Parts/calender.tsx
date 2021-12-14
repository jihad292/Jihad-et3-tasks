import React, {useState} from 'react';
import {View, TouchableOpacity} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {PrsStore} from '../../../mobxStore/prsStore';

const Calender = () => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  async function showDatePicker() {
    setDatePickerVisibility(true);
  }

  async function hideDatePicker() {
    setDatePickerVisibility(false);
  }

  async function handleConfirm(date: Date) {
    PrsStore.setDate(date);
    PrsStore.setDateS(date);
    await hideDatePicker();
  }

  return (
    <View>
      <TouchableOpacity onPress={showDatePicker}>
        <FontAwesome5 name={'calendar-alt'} size={27} color={'olivedrab'} />
      </TouchableOpacity>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </View>
  );
};

export default Calender;
