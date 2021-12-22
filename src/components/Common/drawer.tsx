import * as React from 'react';
import {View, StyleSheet} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from '../Home'
import PrsScreen from '../Prs';
import IssueScreen from '../AddPrs';
import LanguageScreen from '../Language';
import {ColorStore} from '../../mobxStore/colorStore';
import {observer} from 'mobx-react';

const Drawer = createDrawerNavigator();

const DrawerComponent = observer(() => {
    return (
        <View style={styles.container}>
          <NavigationContainer>
            <Drawer.Navigator
              initialRouteName="Home"
              screenOptions={{
                headerShown: true,
                drawerPosition: 'left',
                drawerActiveBackgroundColor: 'coral',
                drawerInactiveBackgroundColor: 'azure',
                headerTintColor: 'coral',
                drawerType: 'slide',
                drawerStatusBarAnimation: 'fade',
                drawerHideStatusBarOnOpen: true,
              }}>
              <Drawer.Screen
                name="Home"
                component={HomeScreen}
                options={{
                  drawerLabel: 'Home',  
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
                  drawerLabel: 'Prs',
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
                  drawerLabel: 'Add Pr',
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
                  drawerLabel: 'Languages',
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
})

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    header: {},
  });

export default DrawerComponent