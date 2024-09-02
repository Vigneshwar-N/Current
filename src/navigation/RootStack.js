import 'react-native-gesture-handler';

import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from '../screens/Splash';
import Login from '../screens/Login';
import {DrawerNavigator} from './DrawerNavigator';
import {BottomNavigator} from './BottomTabs';
import Home from '../screens/Home';
import DataContainer from '../apis/DataContainer';

const Stack = createNativeStackNavigator();
const RootStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="splash">
      <Stack.Screen name="splash" component={Splash} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Data" component={DataContainer} />
    </Stack.Navigator>
  );
};

export default RootStack;
