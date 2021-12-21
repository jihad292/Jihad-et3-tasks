import memoize from 'lodash/memoize';
import {observable} from 'mobx';

export class ColorStoreImpl {
  black = observable.box<string>('black');
  propertyBorderColor = observable.box<string>('cornflowerblue');
  dropDownTextColor = observable.box<string>('darkolivegreen');
  checkBoxTextColor = observable.box<string>('darkslategrey');
  addButtonColor = observable.box<string>('skyblue');
  addButtonBorderTextColor = observable.box<string>('seagreen');
  homePageBackgroundColor = observable.box<string>('rgb(204, 204, 255)');
  homePageTextColor = observable.box<string>('rgb(0, 0, 204)');
  homePageIconsColor = observable.box<string>('olivedrab');
  textInputColor = observable.box<string>('black');
  itemPropertyBorderColor = observable.box<string>('thistle');
  itemPropertyTextColor = observable.box<string>('slategray');
  itemDataColor = observable.box<string>('olivedrab');
  updateModalBackgroundColor = observable.box<string>('rgba(0,0,0,0.5)');
  updateModalMainContainerColor = observable.box<string>('burlywood');
  updateModalSecondaryContainercolor = observable.box<string>('darkkhaki');
  updateButtonbackgroundColor = observable.box<string>('darkgreen');
  languageTextColor = observable.box<string>('blue');
}

export const ColorStore = memoize(() => {
  return new ColorStoreImpl();
});

export default {ColorStore};
