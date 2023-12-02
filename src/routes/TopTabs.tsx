import React from 'react';
import {normalize, vh, vw} from '../utils/dimensions';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import GamesPlayed from '../screens/GamesPlayed';
import Badges from '../screens/Badges';
const Tab = createMaterialTopTabNavigator();

const TopTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName={'Games played'}
      screenOptions={{
        tabBarShowIcon: true,
        tabBarActiveTintColor: '#6231AD',
        tabBarInactiveTintColor: '#727682',
        tabBarStyle: {backgroundColor: 'white'},
        tabBarLabelStyle: {fontSize: normalize(14), fontWeight: '600'},
        tabBarIndicatorStyle: {
          height: vh(3),
          backgroundColor: '#6231AD',
        },
      }}>
      <Tab.Screen
        options={{tabBarLabel: 'Games played'}}
        name={'Games played'}
        component={GamesPlayed}
      />
      <Tab.Screen
        options={{tabBarLabel: 'Badges'}}
        name={'Badges'}
        component={Badges}
      />
    </Tab.Navigator>
  );
};

export default TopTabs;
