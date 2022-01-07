import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {Colors} from './colors';
import {View} from 'react-native';

interface Props {}

const CustomDrawer: React.FC<Props> = props => {
  return (
    <View style={{flex: 1, backgroundColor: Colors.DARKS_SLATE_GRAY}}>
      <View style={{flex: 1, borderWidth: 2, borderColor: Colors.BLACK}}>
        <DrawerContentScrollView
          {...props}
          contentContainerStyle={{backgroundColor: Colors.ORANGE}}>
          <DrawerItemList
            state={undefined}
            navigation={undefined}
            descriptors={undefined}
            {...props}
          />
        </DrawerContentScrollView>
      </View>
    </View>
  );
};

export default CustomDrawer;
