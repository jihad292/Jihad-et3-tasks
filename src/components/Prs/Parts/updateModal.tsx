import React from 'react';
import {View, Modal, TouchableOpacity} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {PrsStore} from '../../../mobxStore/prs-store';
import {observer} from 'mobx-react';
import {
  SE_Array,
  Platform_Array,
  Size_Array,
  Difficulty_Array,
  Status_Array,
  Release_Version_Array,
} from '../../../constants';
import IssueDropdownItem from '../../Common/issueDropdownItem';
import IssueCheckBoxItem from '../../Common/issueCheckBoxItem';
import {UpdateStore} from '../../../mobxStore/update-store';
import i18n from '../../Language/Parts/i18n';
import UpdateModaHeader from './updadeModaHeader';
import UpdateModalInputProperty from './updateModalInputProperty';
import {Colors} from '../../Common/colors';
import {LanguageStore} from '../../../mobxStore/language-store';
import Et3Theme from '../../Common/getTheme';

interface modalProps {
  visible: boolean;
}

const ModalForm: React.FC<modalProps> = observer(props => {
  const {visible} = props;
  return (
    <Modal transparent visible={visible}>
      <View
        style={{
          flex: 1,
          backgroundColor: Colors.GRAY,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            paddingTop: 0,
            width: Et3Theme().getAppUnits.get().unitX * 103,
            backgroundColor: Colors.ORANGE,
            paddingHorizontal: Et3Theme().getAppUnits.get().unitX * 3,
            paddingVertical: Et3Theme().getAppUnits.get().unitX * 8,
            borderRadius: 20,
            elevation: 25,
            height: Et3Theme().getAppUnits.get().unitY * 170,
          }}>
          <UpdateModaHeader />

          <View
            style={{
              paddingTop: 0,
              backgroundColor: Colors.AZURE,
              height: Et3Theme().getAppUnits.get().unitY * 160,
              borderWidth: 3,
              borderColor: Colors.BLUE,
              borderRadius: 20,
              elevation: 10,
            }}>
            <UpdateModalInputProperty
              comment={PrsStore().comment.get()}
              onChangeText1={PrsStore().setComment}
              link={PrsStore().link.get()}
              onChangeText2={PrsStore().setLink}
            />

            <View
              style={{
                flexDirection:
                  LanguageStore().languageText.get() === 'ENGLISH'
                    ? 'row'
                    : 'row-reverse',
                width: Et3Theme().getAppUnits.get().unitX * 90,
                borderWidth: 1,
                borderColor: Colors.BLUE,
                alignSelf: 'center',
                height: Et3Theme().getAppUnits.get().unitY * 123,
                borderRadius: 20,
                backgroundColor: Colors.ORANGE,
              }}>
              <View
                style={{
                  marginTop: Et3Theme().getAppUnits.get().unitX,
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                  paddingVertical: Et3Theme().getAppUnits.get().unitY,
                  borderWidth: 1,
                  borderColor: Colors.BLUE,
                  borderRadius: 20,
                  height: Et3Theme().getAppUnits.get().unitY * 122,
                  width: Et3Theme().getAppUnits.get().unitX * 62,
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
                  marginTop: Et3Theme().getAppUnits.get().unitX,
                  flexDirection: 'column',
                  justifyContent: 'space-around',
                  alignItems: 'center',
                  borderWidth: 1,
                  borderColor: Colors.BLUE,
                  borderRadius: 20,
                  height: Et3Theme().getAppUnits.get().unitY * 122,
                  width: Et3Theme().getAppUnits.get().unitX * 28,
                  backgroundColor: Colors.GRAY,
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
                      width: Et3Theme().getAppUnits.get().unitX * 20,
                      borderWidth: 2,
                      borderColor: Colors.BLUE,
                      height: Et3Theme().getAppUnits.get().unitY * 10,
                      borderRadius: 20,
                      justifyContent: 'center',
                      alignItems: 'center',
                      backgroundColor: Colors.GREEN,
                    }}>
                    <FontAwesome5
                      name={'save'}
                      size={Et3Theme().getThemeData.get().getKhFontSize(7)}
                      color={Colors.BLACK}
                    />
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
