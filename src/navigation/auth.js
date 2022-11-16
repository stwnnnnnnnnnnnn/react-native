import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

import Signin from '../screen/Signin';
import Signup from '../screen/Signup';
import HeaderDefault from '../components/Header/default';
import Icon from 'react-native-vector-icons/AntDesign';

import DrawerContent from '../components/DrawerContent';

function MenuNavigator() {
  return (
    // DAFTARKAN MENU YANG NANTINYA AKAN MASUK KE DALAM DRAWER DISINI
    <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
      <Drawer.Screen
        name="Signin"
        component={Signin}
        options={{
          header: props => <HeaderDefault {...props} />,
          drawerIcon: ({size, color}) => (
            <Icon name="arrowleft" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="Signup"
        component={Signup}
        options={{
          header: props => <HeaderDefault {...props} />,
          drawerIcon: ({size, color}) => (
            <Icon name="arrowleft" color={color} size={size} />
          ),
        }}
      />
      {/* MY BOOKING */}
      {/* MY WISHLIST */}
    </Drawer.Navigator>
  );
}

export default function AuthStackNavigator() {
  return (
    <Stack.Navigator initialRouteName="MenuNavigator">
      <Stack.Screen
        name="MenuNavigator"
        component={MenuNavigator}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Signup"
        options={{headerShown: false}}
        component={Signup}
      />
    </Stack.Navigator>
  );
}
