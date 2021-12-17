import React from 'react';
import {View, Text, TextInput} from 'react-native';
import {prsStoreImpl, PrsStore} from '../../mobxStore/prsStore';
import {observer} from 'mobx-react';
import {
  SE_Array,
  Platform_Array,
  Size_Array,
  Difficulty_Array,
  Status_Array,
  Release_Version_Array,
} from '../Common/prProperties';
import {issueStyle} from './Parts/issueStyle';
import IssueDropdownItem from '../Common/issueDropdownItem';
import IssueCheckBoxItem from '../Common/issueCheckBoxItem';
import Calender from './Parts/calender';
import AddButton from './Parts/addButton';

interface issueProps {
  prsStore: prsStoreImpl;
}

const IssueScreen: React.FC<issueProps> = observer(({prsStore}) => {
  prsStore = PrsStore();

  return (
    <>
      <View style={issueStyle.container}>
        <View>
          <Calender />
        </View>

        <View style={issueStyle.inputTextContainer}>
          <Text style={issueStyle.itemProperty}>Add Comment</Text>
          <TextInput
            value={prsStore.comment.get()}
            style={issueStyle.textInput}
            placeholder="add Comment"
            onChangeText={prsStore.setComment}
          />
        </View>

        <View style={issueStyle.inputTextContainer}>
          <Text style={issueStyle.itemProperty}>Add Link</Text>
          <TextInput
            value={prsStore.link.get()}
            style={issueStyle.textInput}
            placeholder="add Link"
            onChangeText={prsStore.setLink}
          />
        </View>

        <View style={issueStyle.dropdownDiv}>
          <View style={issueStyle.dropdownProperty}>
            <IssueDropdownItem
              defaultValue={prsStore.se.get()}
              data={SE_Array}
              setItem={prsStore.setSE}
              propertyDefinition="SE"
            />
          </View>

          <View style={issueStyle.dropdownProperty}>
            <IssueDropdownItem
              defaultValue={prsStore.platform.get()}
              data={Platform_Array}
              setItem={prsStore.setPlatform}
              propertyDefinition="Platform"
            />
          </View>
        </View>

        <View style={issueStyle.dropdownDiv}>
          <View style={issueStyle.dropdownProperty}>
            <IssueDropdownItem
              defaultValue={prsStore.size.get()}
              data={Size_Array}
              setItem={prsStore.setSize}
              propertyDefinition="Size"
            />
          </View>

          <View style={issueStyle.dropdownProperty}>
            <IssueDropdownItem
              defaultValue={prsStore.difficulty.get()}
              data={Difficulty_Array}
              setItem={prsStore.setDifficulty}
              propertyDefinition="Difficulty"
            />
          </View>
        </View>

        <View style={issueStyle.dropdownDiv}>
          <View style={issueStyle.dropdownProperty}>
            <IssueDropdownItem
              defaultValue={prsStore.status.get()}
              data={Status_Array}
              setItem={prsStore.setStatus}
              propertyDefinition="Status"
            />
          </View>

          <View style={issueStyle.dropdownProperty}>
            <IssueDropdownItem
              defaultValue={prsStore.version.get()}
              data={Release_Version_Array}
              setItem={prsStore.setVersion}
              propertyDefinition="Version"
            />
          </View>
        </View>

        <View style={issueStyle.checkBoxesDiv}>
          <View style={issueStyle.checkboxProperty}>
            <IssueCheckBoxItem
              propertyText="Review by By"
              reviewBy={prsStore.reviewByBY.get()}
              setReview={prsStore.setReviewByBY}
            />
          </View>

          <View style={issueStyle.checkboxProperty}>
            <IssueCheckBoxItem
              propertyText="Review by AH"
              reviewBy={prsStore.reviewByAH.get()}
              setReview={prsStore.setReviewByAH}
            />
          </View>

          <View style={issueStyle.checkboxProperty}>
            <IssueCheckBoxItem
              propertyText="Review by HT"
              reviewBy={prsStore.reviewByHT.get()}
              setReview={prsStore.setReviewByHT}
            />
          </View>
        </View>
        <View style={issueStyle.addButtonDiv}>
          <AddButton text="Add" pressHandler={prsStore.pressHandler} />
        </View>
      </View>
    </>
  );
});

export default IssueScreen;
