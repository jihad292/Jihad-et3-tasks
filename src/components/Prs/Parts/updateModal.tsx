import React from 'react';
import {View, Text, Modal, TouchableOpacity, TextInput} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {PrsStore} from '../../../mobxStore/prsStore';
import {issueStyle} from '../../AddPrs/Parts/issueStyle';
import {updateStyle} from './updateStyle';
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
import {LanguageStore} from '../../../mobxStore/languageStore';
import i18n from '../../Language/Parts/i18n';

interface modalProps {
  visible: boolean;
}

const ModalForm: React.FC<modalProps> = observer(props => {
  return (
    <Modal transparent visible={props.visible}>
      <View style={updateStyle.modal}>
        <View style={updateStyle.modalContainer}>
          <View style={updateStyle.closeModalDiv}>
            <Text style={updateStyle.issueIdText}>
              {i18n.get('id', LanguageStore().languageStateString.get())} :{' '}
              {PrsStore().id.get()}
            </Text>
            <View style={updateStyle.closeIcon}>
              <TouchableOpacity onPress={UpdateStore().closeModal}>
                <FontAwesome5
                  name={'window-close'}
                  size={23}
                  color={'olivedrab'}
                />
              </TouchableOpacity>
            </View>
          </View>

          <View style={updateStyle.propertiesDiv}>
            <View style={issueStyle.inputTextContainer}>
              <Text style={issueStyle.itemProperty}>
                {i18n.get('comment', LanguageStore().languageStateString.get())}
              </Text>
              <TextInput
                value={PrsStore().comment.get()}
                style={issueStyle.textInput}
                placeholder={i18n.get(
                  'comment',
                  LanguageStore().languageStateString.get(),
                )}
                onChangeText={PrsStore().setComment}
              />
            </View>

            <View style={issueStyle.inputTextContainer}>
              <Text style={issueStyle.itemProperty}>
                {i18n.get('link', LanguageStore().languageStateString.get())}
              </Text>
              <TextInput
                value={PrsStore().link.get()}
                style={issueStyle.textInput}
                placeholder={i18n.get(
                  'link',
                  LanguageStore().languageStateString.get(),
                )}
                onChangeText={PrsStore().setLink}
              />
            </View>

            <View style={updateStyle.secondaryDiv}>
              <View style={updateStyle.secondaryDivFirst}>
                <IssueDropdownItem
                  defaultValue={PrsStore().se.get()}
                  data={SE_Array}
                  setItem={PrsStore().setSE}
                  propertyDefinition={i18n.get(
                    'se',
                    LanguageStore().languageStateString.get(),
                  )}
                />
                <IssueDropdownItem
                  defaultValue={PrsStore().platform.get()}
                  data={Platform_Array}
                  setItem={PrsStore().setPlatform}
                  propertyDefinition={i18n.get(
                    'platform',
                    LanguageStore().languageStateString.get(),
                  )}
                />
                <IssueDropdownItem
                  defaultValue={PrsStore().size.get()}
                  data={Size_Array}
                  setItem={PrsStore().setSize}
                  propertyDefinition={i18n.get(
                    'size',
                    LanguageStore().languageStateString.get(),
                  )}
                />
                <IssueDropdownItem
                  defaultValue={PrsStore().difficulty.get()}
                  data={Difficulty_Array}
                  setItem={PrsStore().setDifficulty}
                  propertyDefinition={i18n.get(
                    'difficulty',
                    LanguageStore().languageStateString.get(),
                  )}
                />
                <IssueDropdownItem
                  defaultValue={PrsStore().status.get()}
                  data={Status_Array}
                  setItem={PrsStore().setStatus}
                  propertyDefinition={i18n.get(
                    'status',
                    LanguageStore().languageStateString.get(),
                  )}
                />
                <IssueDropdownItem
                  defaultValue={PrsStore().version.get()}
                  data={Release_Version_Array}
                  setItem={PrsStore().setVersion}
                  propertyDefinition={i18n.get(
                    'version',
                    LanguageStore().languageStateString.get(),
                  )}
                />
              </View>

              <View style={updateStyle.secondaryDivSecond}>
                <IssueCheckBoxItem
                  propertyText={i18n.get(
                    'by',
                    LanguageStore().languageStateString.get(),
                  )}
                  reviewBy={PrsStore().reviewByBY.get()}
                  setReview={PrsStore().setReviewByBY}
                />
                <IssueCheckBoxItem
                  propertyText={i18n.get(
                    'ah',
                    LanguageStore().languageStateString.get(),
                  )}
                  reviewBy={PrsStore().reviewByAH.get()}
                  setReview={PrsStore().setReviewByAH}
                />
                <IssueCheckBoxItem
                  propertyText={i18n.get(
                    'ht',
                    LanguageStore().languageStateString.get(),
                  )}
                  reviewBy={PrsStore().reviewByHT.get()}
                  setReview={PrsStore().setReviewByHT}
                />
                <TouchableOpacity
                  onPress={() =>
                    UpdateStore().handleUpdate(
                      UpdateStore().updatableItem.get(),
                    )
                  }>
                  <View style={updateStyle.updateButton}>
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
