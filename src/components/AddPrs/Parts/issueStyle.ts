import {StyleSheet} from 'react-native';
import {ColorStore} from '../../../mobxStore/colorStore';

export const issueStyle = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  inputTextContainer: {
    alignItems: 'center',
    padding: 1,
    marginBottom: 2,
  },
  itemProperty: {
    fontWeight: 'bold',
    fontSize: 20,
    color: ColorStore().black.get(),
  },
  textInput: {
    borderBottomWidth: 2,
    borderBottomColor: 'cornflowerblue',
    color: ColorStore().black.get(),
    justifyContent: 'center',
  },
  dropdownDiv: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10,
  },
  dropdownProperty: {
    borderWidth: 2,
    borderRadius: 10,
    borderColor: ColorStore().propertyBorderColor.get(),
    width: 210,
    maxwidth: 190,
    marginHorizontal: 1,
    alignItems: 'center',
  },
  dropdownPropertyText: {
    fontWeight: 'bold',
    color: ColorStore().dropDownTextColor.get(),
    fontSize: 15,
    alignSelf: 'center',
  },
  checkBoxesDiv: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 2,
    marginVertical: 10,
    borderColor: ColorStore().propertyBorderColor.get(),
    borderRadius: 10,
  },
  checkboxProperty: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 8,
  },
  checkboxText: {
    fontWeight: 'bold',
    fontSize: 15,
    color: ColorStore().checkBoxTextColor.get(),
    alignSelf: 'center',
  },
  checkboxContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  addButtonDiv: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButton: {
    backgroundColor: ColorStore().addButtonColor.get(),
    width: 70,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: ColorStore().addButtonBorderTextColor.get(),
    borderRadius: 10,
  },
  addButtonText: {
    color: ColorStore().addButtonBorderTextColor.get(),
    fontWeight: 'bold',
    fontSize: 20,
  },
  screenBottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    paddingHorizontal: 25,
  },
});
