import * as React from 'react';
import {View, StyleSheet} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from '../Home';
import PrsScreen from '../Prs';
import IssueScreen from '../AddPrs';
import LanguageScreen from '../Language';
import {ColorStore} from '../../mobxStore/colorStore';
import {observer} from 'mobx-react';
import i18n from '../Language/Parts/i18n';
import {LanguageStore} from '../../mobxStore/languageStore';

const Drawer = createDrawerNavigator();

const DrawerComponent = observer(() => {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Drawer.Navigator
          initialRouteName="Home"
          // I am also facing trouble with drawer screens names on update,when I choose arabic for example the screens names will dessappear and come back on drawer refresh
          screenOptions={{
            headerShown: true,
            drawerPosition: 'left', //LanguageStore().drawerPosition.get()
            drawerActiveBackgroundColor: 'black',
            drawerInactiveBackgroundColor: 'azure',
            headerTintColor: 'coral',
            drawerType: 'slide',
            drawerStatusBarAnimation: 'fade',
            drawerHideStatusBarOnOpen: true,
            headerStyle: {
              backgroundColor: 'grey',
            },
          }}>
          <Drawer.Screen
            name="Home"
            component={HomeScreen}
            options={{
              drawerLabel: i18n.get(
                'drawer_Home',
                LanguageStore().languageStateString.get(),
              ),
              drawerIcon: ({color}) => (
                <FontAwesome5
                  name={'home'}
                  size={28}
                  color={ColorStore().homePageIconsColor.get()}
                />
              ),
            }}
          />
          <Drawer.Screen
            name="Prs"
            component={PrsScreen}
            options={{
              drawerLabel: i18n.get(
                'drawer_Prs',
                LanguageStore().languageStateString.get(),
              ),
              drawerIcon: ({color}) => (
                <FontAwesome5
                  name={'digital-tachograph'}
                  size={28}
                  color={ColorStore().homePageIconsColor.get()}
                />
              ),
            }}
          />
          <Drawer.Screen
            name="Add Pr"
            component={IssueScreen}
            options={{
              drawerLabel: i18n.get(
                'drawer_Add_Pr',
                LanguageStore().languageStateString.get(),
              ),
              drawerIcon: ({color}) => (
                <FontAwesome5
                  name={'plus-square'}
                  size={28}
                  color={ColorStore().homePageIconsColor.get()}
                />
              ),
            }}
          />
          <Drawer.Screen
            name="Languages"
            component={LanguageScreen}
            options={{
              drawerLabel: i18n.get(
                'drawer_Language',
                LanguageStore().languageStateString.get(),
              ),
              drawerIcon: ({color}) => (
                <FontAwesome5
                  name={'language'}
                  size={28}
                  color={ColorStore().homePageIconsColor.get()}
                />
              ),
            }}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {},
});

export default DrawerComponent;
