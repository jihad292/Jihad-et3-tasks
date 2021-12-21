import React from 'react';
import {View, Text, TextInput} from 'react-native';
import {PrsStoreImpl, PrsStore} from '../../mobxStore/prsStore';
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
import i18n from '../Language/Parts/i18n';

interface issueProps {
  prsStore: PrsStoreImpl;
}

const IssueScreen: React.FC<issueProps> = observer(({prsStore}) => {
  prsStore = PrsStore();

  return (
    <>
      <View style={issueStyle.container}>
        <View style={issueStyle.inputTextContainer}>
          <Text style={issueStyle.itemProperty}>
            {i18n.get('comment', LanguageStore().languageStateString.get())}
          </Text>
          <TextInput
            value={prsStore.comment.get()}
            style={issueStyle.textInput}
            placeholder={i18n.get(
              'comment',
              LanguageStore().languageStateString.get(),
            )}
            placeholderTextColor={'black'}
            onChangeText={prsStore.setComment}
          />
        </View>

        <View style={issueStyle.inputTextContainer}>
          <Text style={issueStyle.itemProperty}>
            {i18n.get('link', LanguageStore().languageStateString.get())}
          </Text>
          <TextInput
            value={prsStore.link.get()}
            style={issueStyle.textInput}
            placeholder={i18n.get(
              'link',
              LanguageStore().languageStateString.get(),
            )}
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
              propertyDefinition={i18n.get(
                'se',
                LanguageStore().languageStateString.get(),
              )}
            />
          </View>

          <View style={issueStyle.dropdownProperty}>
            <IssueDropdownItem
              defaultValue={prsStore.platform.get()}
              data={Platform_Array}
              setItem={prsStore.setPlatform}
              propertyDefinition={i18n.get(
                'platform',
                LanguageStore().languageStateString.get(),
              )}
            />
          </View>
        </View>

        <View style={issueStyle.dropdownDiv}>
          <View style={issueStyle.dropdownProperty}>
            <IssueDropdownItem
              defaultValue={prsStore.size.get()}
              data={Size_Array}
              setItem={prsStore.setSize}
              propertyDefinition={i18n.get(
                'size',
                LanguageStore().languageStateString.get(),
              )}
            />
          </View>

          <View style={issueStyle.dropdownProperty}>
            <IssueDropdownItem
              defaultValue={prsStore.difficulty.get()}
              data={Difficulty_Array}
              setItem={prsStore.setDifficulty}
              propertyDefinition={i18n.get(
                'difficulty',
                LanguageStore().languageStateString.get(),
              )}
            />
          </View>
        </View>

        <View style={issueStyle.dropdownDiv}>
          <View style={issueStyle.dropdownProperty}>
            <IssueDropdownItem
              defaultValue={prsStore.status.get()}
              data={Status_Array}
              setItem={prsStore.setStatus}
              propertyDefinition={i18n.get(
                'status',
                LanguageStore().languageStateString.get(),
              )}
            />
          </View>

          <View style={issueStyle.dropdownProperty}>
            <IssueDropdownItem
              defaultValue={prsStore.version.get()}
              data={Release_Version_Array}
              setItem={prsStore.setVersion}
              propertyDefinition={i18n.get(
                'version',
                LanguageStore().languageStateString.get(),
              )}
            />
          </View>
        </View>

        <View style={issueStyle.checkBoxesDiv}>
          <View style={issueStyle.checkboxProperty}>
            <IssueCheckBoxItem
              propertyText={i18n.get(
                'by',
                LanguageStore().languageStateString.get(),
              )}
              reviewBy={prsStore.reviewByBY.get()}
              setReview={prsStore.setReviewByBY}
            />
          </View>

          <View style={issueStyle.checkboxProperty}>
            <IssueCheckBoxItem
              propertyText={i18n.get(
                'ah',
                LanguageStore().languageStateString.get(),
              )}
              reviewBy={prsStore.reviewByAH.get()}
              setReview={prsStore.setReviewByAH}
            />
          </View>

          <View style={issueStyle.checkboxProperty}>
            <IssueCheckBoxItem
              propertyText={i18n.get(
                'ht',
                LanguageStore().languageStateString.get(),
              )}
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
