import React from 'react';
import {View} from 'react-native';
import {PrsStore} from '../../mobxStore/prs-store';
import {observer} from 'mobx-react';
import {
  SE_Array,
  Platform_Array,
  Size_Array,
  Difficulty_Array,
  Status_Array,
  Release_Version_Array,
} from '../../constants';
import Calender from './Parts/calender';
import AddButton from './Parts/addButton';
import i18n from '../Language/Parts/i18n';
import TextInputComponent from './Parts/textInput';
import DropdownSection from './Parts/dropdownSection';
import CheckboxSection from './Parts/checkboxSection';
import {LanguageStore} from '../../mobxStore/language-store';
import Et3Theme from '../Common/getTheme';

const IssueScreen = observer(() => {
  return (
    <>
      <View style={{flex: 1}}>
        <TextInputComponent
          title={i18n.get('comment')}
          value={PrsStore().comment.get()}
          placeholder={i18n.get('comment')}
          onChangeText={PrsStore().setComment}
        />

        <TextInputComponent
          title={i18n.get('link')}
          value={PrsStore().link.get()}
          placeholder={i18n.get('link')}
          onChangeText={PrsStore().setLink}
        />

        <DropdownSection
          defaultValue1={PrsStore().se.get()}
          data1={SE_Array}
          setItem1={PrsStore().setSE}
          propertyDefinition1={i18n.get('se')}
          defaultValue2={PrsStore().platform.get()}
          data2={Platform_Array}
          setItem2={PrsStore().setPlatform}
          propertyDefinition2={i18n.get('platform')}
        />

        <DropdownSection
          defaultValue1={PrsStore().size.get()}
          data1={Size_Array}
          setItem1={PrsStore().setSize}
          propertyDefinition1={i18n.get('size')}
          defaultValue2={PrsStore().difficulty.get()}
          data2={Difficulty_Array}
          setItem2={PrsStore().setDifficulty}
          propertyDefinition2={i18n.get('difficulty')}
        />

        <DropdownSection
          defaultValue1={PrsStore().status.get()}
          data1={Status_Array}
          setItem1={PrsStore().setStatus}
          propertyDefinition1={i18n.get('status')}
          defaultValue2={PrsStore().version.get()}
          data2={Release_Version_Array}
          setItem2={PrsStore().setVersion}
          propertyDefinition2={i18n.get('version')}
        />

        <CheckboxSection
          propertyText1={i18n.get('by')}
          reviewBy1={PrsStore().reviewByBY.get()}
          setReviewBy1={PrsStore().setReviewByBY}
          propertyText2={i18n.get('ah')}
          reviewBy2={PrsStore().reviewByAH.get()}
          setReviewBy2={PrsStore().setReviewByAH}
          propertyText3={i18n.get('ht')}
          reviewBy3={PrsStore().reviewByHT.get()}
          setReviewBy3={PrsStore().setReviewByHT}
        />

        <View
          style={{
            flexDirection:
              LanguageStore().languageText.get() === 'ENGLISH'
                ? 'row'
                : 'row-reverse',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingTop: Et3Theme().getAppUnits.get().initialHeight * 0.005,
            paddingHorizontal: 25,
          }}>
          <Calender />

          <View
            style={{
              marginTop: 0,
              width: Et3Theme().getAppUnits.get().initialWidth,
              justifyContent: 'flex-start',
              alignItems: 'center',
            }}>
            <AddButton text="+" pressHandler={PrsStore().pressHandler} />
          </View>
        </View>
      </View>
    </>
  );
});

export default IssueScreen;
