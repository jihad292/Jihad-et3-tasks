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
              Update issue with id : {PrsStore().id.get()}
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
              <Text style={issueStyle.itemProperty}>Update Comment</Text>
              <TextInput
                value={PrsStore().comment.get()}
                style={issueStyle.textInput}
                placeholder="Update Comment"
                onChangeText={PrsStore().setComment}
              />
            </View>

            <View style={issueStyle.inputTextContainer}>
              <Text style={issueStyle.itemProperty}>Update Link</Text>
              <TextInput
                value={PrsStore().link.get()}
                style={issueStyle.textInput}
                placeholder="Update Link"
                onChangeText={PrsStore().setLink}
              />
            </View>

            <View style={updateStyle.secondaryDiv}>
              <View style={updateStyle.secondaryDivFirst}>
                <IssueDropdownItem
                  defaultValue={PrsStore().se.get()}
                  data={SE_Array}
                  setItem={PrsStore().setSE}
                  propertyDefinition="SE"
                />
                <IssueDropdownItem
                  defaultValue={PrsStore().platform.get()}
                  data={Platform_Array}
                  setItem={PrsStore().setPlatform}
                  propertyDefinition="Platform"
                />
                <IssueDropdownItem
                  defaultValue={PrsStore().size.get()}
                  data={Size_Array}
                  setItem={PrsStore().setSize}
                  propertyDefinition="Size"
                />
                <IssueDropdownItem
                  defaultValue={PrsStore().difficulty.get()}
                  data={Difficulty_Array}
                  setItem={PrsStore().setDifficulty}
                  propertyDefinition="Difficulty"
                />
                <IssueDropdownItem
                  defaultValue={PrsStore().status.get()}
                  data={Status_Array}
                  setItem={PrsStore().setStatus}
                  propertyDefinition="Status"
                />
                <IssueDropdownItem
                  defaultValue={PrsStore().version.get()}
                  data={Release_Version_Array}
                  setItem={PrsStore().setVersion}
                  propertyDefinition="Version"
                />
              </View>

              <View style={updateStyle.secondaryDivSecond}>
                <IssueCheckBoxItem
                  propertyText="Review by By"
                  reviewBy={PrsStore().reviewByBY.get()}
                  setReview={PrsStore().setReviewByBY}
                />
                <IssueCheckBoxItem
                  propertyText="Review by AH"
                  reviewBy={PrsStore().reviewByAH.get()}
                  setReview={PrsStore().setReviewByAH}
                />
                <IssueCheckBoxItem
                  propertyText="Review by HT"
                  reviewBy={PrsStore().reviewByHT.get()}
                  setReview={PrsStore().setReviewByHT}
                />
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
