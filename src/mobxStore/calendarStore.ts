import memoize from 'lodash/memoize';
import {runInAction, observable} from 'mobx';
import {PrsStore} from './prsStore';

export class calendarStoreImpl {
  isDatePickerVisible = observable.box<boolean>(false);

  setIsDatePickerVisible = (value: boolean) => {
    runInAction(() => {
      this.isDatePickerVisible.set(value);
    });
  };

  showDatePicker = () => {
    runInAction(() => {
      this.setIsDatePickerVisible(true);
    });
  };

  hideDatePicker = () => {
    runInAction(() => {
      this.setIsDatePickerVisible(false);
    });
  };

  handleConfirm = (date: Date) => {
    PrsStore().setDate(date);
    PrsStore().setDateS('' + date);
    this.hideDatePicker();
  };
}

export const CalendarStore = memoize(
  () => {
    return new calendarStoreImpl();
  },
  () => 1,
);

export default {CalendarStore};
