import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {CalendarStore} from '../../../mobxStore/calendarStore';
import {observer} from 'mobx-react';

const Calender = observer(() => {
  return (
    <>
      <View>
        <TouchableOpacity onPress={() => CalendarStore().showDatePicker()}>
          <FontAwesome5 name={'calendar-alt'} size={33} color={'olivedrab'} />
        </TouchableOpacity>
        <DateTimePickerModal
          isVisible={CalendarStore().isDatePickerVisible.get()}
          mode="date"
          onConfirm={CalendarStore().handleConfirm}
          onCancel={CalendarStore().hideDatePicker}
        />
      </View>
    </>
  );
});

export default Calender;
