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
import {LanguageStore} from '../../mobxStore/languageStore';

interface issueProps {
  prsStore: prsStoreImpl;
}

const IssueScreen: React.FC<issueProps> = observer(({prsStore}) => {
  prsStore = PrsStore();

  return (
    <>
      <View style={issueStyle.container}>
        <View style={issueStyle.inputTextContainer}>
          <Text style={issueStyle.itemProperty}>
            {LanguageStore().commentTitle.get()}
          </Text>
          <TextInput
            value={prsStore.comment.get()}
            style={issueStyle.textInput}
            placeholder={LanguageStore().commentTitle.get()}
            placeholderTextColor={'black'}
            onChangeText={prsStore.setComment}
          />
        </View>

        <View style={issueStyle.inputTextContainer}>
          <Text style={issueStyle.itemProperty}>
            {LanguageStore().linkTitle.get()}
          </Text>
          <TextInput
            value={prsStore.link.get()}
            style={issueStyle.textInput}
            placeholder={LanguageStore().linkTitle.get()}
            placeholderTextColor={'black'}
            onChangeText={prsStore.setLink}
          />
        </View>

        <View style={issueStyle.dropdownDiv}>
          <View style={issueStyle.dropdownProperty}>
            <IssueDropdownItem
              defaultValue={prsStore.se.get()}
              data={SE_Array}
              setItem={prsStore.setSE}
              propertyDefinition={LanguageStore().seTitle.get()}
            />
          </View>

          <View style={issueStyle.dropdownProperty}>
            <IssueDropdownItem
              defaultValue={prsStore.platform.get()}
              data={Platform_Array}
              setItem={prsStore.setPlatform}
              propertyDefinition={LanguageStore().platformTitle.get()}
            />
          </View>
        </View>

        <View style={issueStyle.dropdownDiv}>
          <View style={issueStyle.dropdownProperty}>
            <IssueDropdownItem
              defaultValue={prsStore.size.get()}
              data={Size_Array}
              setItem={prsStore.setSize}
              propertyDefinition={LanguageStore().sizeTitle.get()}
            />
          </View>

          <View style={issueStyle.dropdownProperty}>
            <IssueDropdownItem
              defaultValue={prsStore.difficulty.get()}
              data={Difficulty_Array}
              setItem={prsStore.setDifficulty}
              propertyDefinition={LanguageStore().difficultyTitle.get()}
            />
          </View>
        </View>

        <View style={issueStyle.dropdownDiv}>
          <View style={issueStyle.dropdownProperty}>
            <IssueDropdownItem
              defaultValue={prsStore.status.get()}
              data={Status_Array}
              setItem={prsStore.setStatus}
              propertyDefinition={LanguageStore().statusTitle.get()}
            />
          </View>

          <View style={issueStyle.dropdownProperty}>
            <IssueDropdownItem
              defaultValue={prsStore.version.get()}
              data={Release_Version_Array}
              setItem={prsStore.setVersion}
              propertyDefinition={LanguageStore().versionTitle.get()}
            />
          </View>
        </View>

        <View style={issueStyle.checkBoxesDiv}>
          <View style={issueStyle.checkboxProperty}>
            <IssueCheckBoxItem
              propertyText={LanguageStore().ByReviewTitle.get()}
              reviewBy={prsStore.reviewByBY.get()}
              setReview={prsStore.setReviewByBY}
            />
          </View>

          <View style={issueStyle.checkboxProperty}>
            <IssueCheckBoxItem
              propertyText={LanguageStore().AhReviewTitle.get()}
              reviewBy={prsStore.reviewByAH.get()}
              setReview={prsStore.setReviewByAH}
            />
          </View>

          <View style={issueStyle.checkboxProperty}>
            <IssueCheckBoxItem
              propertyText={LanguageStore().HtReviewTitle.get()}
              reviewBy={prsStore.reviewByHT.get()}
              setReview={prsStore.setReviewByHT}
            />
          </View>
        </View>
        <View style={issueStyle.screenBottom}>
          <Calender />

          <View style={issueStyle.addButtonDiv}>
            <AddButton text="+" pressHandler={prsStore.pressHandler} />
          </View>
        </View>
      </View>
    </>
  );
});

export default IssueScreen;
