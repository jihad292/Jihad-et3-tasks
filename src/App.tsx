import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from './components/Home';
import PrsScreen from './components/Prs';
import IssueScreen from './components/AddPrs';
import LanguageScreen from './components/Language';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <>
        <NavigationContainer>
          <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="Home" component={HomeScreen} />
            <Drawer.Screen name="Prs" component={PrsScreen} />
            <Drawer.Screen name="Add Pr" component={IssueScreen} />
            <Drawer.Screen name="Languages" component={LanguageScreen} />
          </Drawer.Navigator>
        </NavigationContainer>
    </>
  );
};
