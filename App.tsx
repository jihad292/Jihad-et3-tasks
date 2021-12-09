import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './screens/home';
import PrsScreen from './screens/prs';
import IssueScreen from './screens/issue';
 
const Drawer = createDrawerNavigator();    

export default function App() {  
  return (
    <>
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Prs" component={PrsScreen} />
        <Drawer.Screen name="Issue" component={IssueScreen} />
      </Drawer.Navigator>  
    </NavigationContainer>
    </>
    
    
  );
}