import React from 'react';
import {View, Modal, TouchableOpacity} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {PrsStore} from '../../../mobxStore/prsStore';
import {observer} from 'mobx-react';
import {
  SE_Array,
  Platform_Array,
  Size_Array,
  Difficulty_Array,
  Status_Array,
  Release_Version_Array,
} from '../../Common/prProperties';
import IssueDropdownItem from '../../Common/issueDropdownItem';
import IssueCheckBoxItem from '../../Common/issueCheckBoxItem';
import {UpdateStore} from '../../../mobxStore/updateStore';
import i18n from '../../Language/Parts/i18n';
import {ColorStore} from '../../../mobxStore/colorStore';
import UpdateModaHeader from './updadeModaHeader';
import UpdateModalInputProperty from './updateModalInputProperty';

interface modalProps {
  visible: boolean;
}

const ModalForm: React.FC<modalProps> = observer(props => {
  return (
    <Modal transparent visible={props.visible}>
      <View
        style={{
          flex: 1,
          backgroundColor: ColorStore().updateModalBackgroundColor.get(),
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            paddingTop: 0,
            width: '95%',
            backgroundColor: ColorStore().updateModalMainContainerColor.get(),
            paddingHorizontal: 20,
            paddingVertical: 30,
            borderRadius: 20,
            elevation: 25,
            height: '100%',
          }}>
          <UpdateModaHeader />

          <View
            style={{
              paddingTop: 0,
              backgroundColor: 'beige',
              height: '100%',
              borderWidth: 3,
              borderColor: ColorStore().itemPropertyBorderColor.get(),
              borderRadius: 20,
              elevation: 10,
            }}>
            <UpdateModalInputProperty />

            <View
              style={{
                flexDirection: 'row',
                width: '95%',
                borderWidth: 1,
                borderColor: ColorStore().propertyBorderColor.get(),
                alignSelf: 'center',
                height: '65%',
                borderRadius: 20,
                backgroundColor:
                  ColorStore().updateModalMainContainerColor.get(),
              }}>
              <View
                style={{
                  marginTop: 3,
                  marginLeft: 5,
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                  paddingVertical: 5,
                  borderWidth: 1,
                  borderColor: ColorStore().propertyBorderColor.get(),
                  borderRadius: 20,
                  height: '100%',
                  width: '65%',
                }}>
                <IssueDropdownItem
                  defaultValue={PrsStore().se.get()}
                  data={SE_Array}
                  setItem={PrsStore().setSE}
                  propertyDefinition={i18n.get('se')}
                />
                <IssueDropdownItem
                  defaultValue={PrsStore().platform.get()}
                  data={Platform_Array}
                  setItem={PrsStore().setPlatform}
                  propertyDefinition={i18n.get('platform')}
                />
                <IssueDropdownItem
                  defaultValue={PrsStore().size.get()}
                  data={Size_Array}
                  setItem={PrsStore().setSize}
                  propertyDefinition={i18n.get('size')}
                />
                <IssueDropdownItem
                  defaultValue={PrsStore().difficulty.get()}
                  data={Difficulty_Array}
                  setItem={PrsStore().setDifficulty}
                  propertyDefinition={i18n.get('difficulty')}
                />
                <IssueDropdownItem
                  defaultValue={PrsStore().status.get()}
                  data={Status_Array}
                  setItem={PrsStore().setStatus}
                  propertyDefinition={i18n.get('status')}
                />
                <IssueDropdownItem
                  defaultValue={PrsStore().version.get()}
                  data={Release_Version_Array}
                  setItem={PrsStore().setVersion}
                  propertyDefinition={i18n.get('version')}
                />
              </View>

              <View
                style={{
                  marginTop: 3,
                  marginHorizontal: 2,
                  flexDirection: 'column',
                  justifyContent: 'space-around',
                  alignItems: 'center',
                  borderWidth: 1,
                  borderColor: ColorStore().itemPropertyBorderColor.get(),
                  borderRadius: 20,
                  height: '100%',
                  width: '32%',
                  backgroundColor:
                    ColorStore().updateModalSecondaryContainercolor.get(),
                }}>
                <IssueCheckBoxItem
                  propertyText={i18n.get('by')}
                  reviewBy={PrsStore().reviewByBY.get()}
                  setReview={PrsStore().setReviewByBY}
                />
                <IssueCheckBoxItem
                  propertyText={i18n.get('ah')}
                  reviewBy={PrsStore().reviewByAH.get()}
                  setReview={PrsStore().setReviewByAH}
                />
                <IssueCheckBoxItem
                  propertyText={i18n.get('ht')}
                  reviewBy={PrsStore().reviewByHT.get()}
                  setReview={PrsStore().setReviewByHT}
                />
                <TouchableOpacity
                  onPress={() =>
                    UpdateStore().handleUpdate(
                      UpdateStore().updatableItem.get(),
                    )
                  }>
                  <View
                    style={{
                      width: 60,
                      borderWidth: 2,
                      borderColor: ColorStore().itemPropertyBorderColor.get(),
                      height: 40,
                      borderRadius: 20,
                      justifyContent: 'center',
                      alignItems: 'center',
                      backgroundColor:
                        ColorStore().updateButtonbackgroundColor.get(),
                    }}>
                    <FontAwesome5 name={'save'} size={23} color={'black'} />
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
});

interface updateProps {
  handleModal: boolean;
}

const UpdateModal: React.FC<updateProps> = props => {
  return (
    <View>
      <ModalForm visible={props.handleModal} />
    </View>
  );
};

export default UpdateModal;
