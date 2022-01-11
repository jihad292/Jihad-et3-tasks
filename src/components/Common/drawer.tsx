import * as React from 'react';
import {View} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from '../Home';
import PrsScreen from '../Prs';
import IssueScreen from '../AddPrs';
import LanguageScreen from '../Language';
import {observer} from 'mobx-react';
import i18n from '../Language/Parts/i18n';
import {Colors} from '../Common/colors';
import PrsTotalNumberModal from '../Common/prsTotalNumberModal';
import {LanguageStore} from '../../mobxStore/language-store';
import CustomDrawer from './customDrawer';
import {PrsStore} from '../../mobxStore/prs-store';
import Et3Theme from '../Common/getTheme';

const Drawer = createDrawerNavigator();

const DrawerComponent = observer(() => {
  return (
    <View style={{flex: 1}}>
      <PrsTotalNumberModal />

      <NavigationContainer>
        <Drawer.Navigator
          key={LanguageStore().languageText.get()}
          drawerContent={props => <CustomDrawer {...props} />}
          initialRouteName={i18n.get('drawer_Home')}
          screenOptions={{
            headerShown:
              PrsStore().prsNumberModal.get() === false ? true : false,
            drawerLabelStyle: {
              fontSize: Et3Theme().getThemeData.get().getKhFontSize(6),
              color: Colors.BLACK,
              fontWeight: 'bold',
            },
            headerTitleStyle: {
              fontWeight: 'bold',
              color: Colors.GRAY,
              fontSize: Et3Theme().getThemeData.get().getKhFontSize(6),
            },
            headerLeftContainerStyle: {
              alignItems:
                LanguageStore().languageText.get() === 'ENGLISH'
                  ? 'flex-start'
                  : 'flex-end',
              width: Et3Theme().getAppUnits.get().childX * 110,
            },
            drawerPosition:
              LanguageStore().languageText.get() === 'ENGLISH'
                ? 'left'
                : 'right',
            drawerActiveBackgroundColor: Colors.GREEN,
            drawerInactiveBackgroundColor: Colors.AZURE,
            headerTintColor: Colors.BLUE,
            drawerType: 'slide',
            drawerStatusBarAnimation: 'fade',
            drawerHideStatusBarOnOpen: true,
            headerStyle: {
              backgroundColor: Colors.GRAY,
            },
          }}>
          <Drawer.Screen
            name={i18n.get('drawer_Home')}
            component={HomeScreen}
            options={{
              drawerLabel: i18n.get('drawer_Home'),
              drawerIcon: ({color}) => (
                <FontAwesome5
                  name={'home'}
                  size={Et3Theme().getThemeData.get().getKhFontSize(7)}
                  color={Colors.OLIVE_GREEN}
                />
              ),
            }}
          />
          <Drawer.Screen
            name={i18n.get('drawer_Prs')}
            component={PrsScreen}
            options={{
              drawerLabel: i18n.get('drawer_Prs'),
              drawerIcon: ({color}) => (
                <FontAwesome5
                  name={'digital-tachograph'}
                  size={Et3Theme().getThemeData.get().getKhFontSize(7)}
                  color={Colors.OLIVE_GREEN}
                />
              ),
            }}
          />
          <Drawer.Screen
            name={i18n.get('drawer_Add_Pr')}
            component={IssueScreen}
            options={{
              drawerLabel: i18n.get('drawer_Add_Pr'),
              drawerIcon: ({color}) => (
                <FontAwesome5
                  name={'plus-square'}
                  size={Et3Theme().getThemeData.get().getKhFontSize(7)}
                  color={Colors.OLIVE_GREEN}
                />
              ),
            }}
          />
          <Drawer.Screen
            name={i18n.get('drawer_Language')}
            component={LanguageScreen}
            options={{
              drawerLabel: i18n.get('drawer_Language'),
              drawerIcon: ({color}) => (
                <FontAwesome5
                  name={'language'}
                  size={Et3Theme().getThemeData.get().getKhFontSize(7)}
                  color={Colors.OLIVE_GREEN}
                />
              ),
            }}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </View>
  );
});

export default DrawerComponent;
