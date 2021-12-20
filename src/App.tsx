import * as React from 'react';
import {View} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from './components/Home';
import PrsScreen from './components/Prs';
import IssueScreen from './components/AddPrs';
import {observable} from 'mobx';

const Drawer = createDrawerNavigator();

export const App = observable(() => {
  return (
    <>
      <View>
        <NavigationContainer>
          <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="Home" component={HomeScreen} />
            <Drawer.Screen name="Prs" component={PrsScreen} />
            <Drawer.Screen name="Add Pr" component={IssueScreen} />
          </Drawer.Navigator>
        </NavigationContainer>
      </View>
    </>
  );
});
