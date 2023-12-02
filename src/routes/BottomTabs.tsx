import React from 'react';
import {Image} from 'react-native';
import {vh, vw} from '../utils/dimensions';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Leagues from '../screens/Leagues';
import Research from '../screens/Research';
import LeaderBoard from '../screens/LeaderBoard';
import Profile from '../screens/Profile';
import TopTabs from './TopTabs';

const BottomTab = createBottomTabNavigator();

const MyBottomTabs = () => {
  return (
    <>
      <BottomTab.Navigator
        screenOptions={{
          tabBarActiveTintColor: '#6231AD',
          headerShown: false,
          tabBarHideOnKeyboard: true,
          tabBarStyle: {height: vh(58)},
          tabBarLabelPosition: 'below-icon',
          tabBarLabelStyle: {
            fontSize: vw(10),
            bottom: vh(5),
          },
        }}>
        <BottomTab.Screen
          name={'Home'}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({focused}) => (
              <Image
                resizeMode="contain"
                style={{
                  height: vw(25),
                  width: vw(25),
                  tintColor: focused ? '#6231AD' : 'grey',
                }}
                source={require('../assets/Home.png')}
              />
            ),
          }}
          component={Home}
        />

        <BottomTab.Screen
          name={'Leagues'}
          options={{
            tabBarLabel: 'Leagues',
            tabBarIcon: ({focused}) => (
              <Image
                resizeMode="contain"
                style={{
                  height: vw(20),
                  width: vw(20),
                  tintColor: focused ? '#6231AD' : 'grey',
                }}
                source={require('../assets/trophy.png')}
              />
            ),
          }}
          component={Leagues}
        />
        <BottomTab.Screen
          name={'Research'}
          options={{
            tabBarLabel: 'Research',
            tabBarIcon: ({focused}) => (
              <Image
                resizeMode="contain"
                style={{
                  height: vw(23),
                  width: vw(23),
                  tintColor: focused ? '#6231AD' : 'grey',
                }}
                source={require('../assets/search.png')}
              />
            ),
          }}
          component={Research}
        />

        <BottomTab.Screen
          name={'LeaderBoard'}
          options={{
            tabBarLabel: 'LeaderBoard',
            tabBarIcon: ({focused}) => (
              <Image
                resizeMode="contain"
                style={{
                  height: vw(20),
                  width: vw(20),
                  tintColor: focused ? '#6231AD' : 'grey',
                }}
                source={require('../assets/leaderBoard.png')}
              />
            ),
          }}
          // component={LeaderBoard}
          component={TopTabs}
        />
        <BottomTab.Screen
          name={'Profile'}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({focused}) => (
              <Image
                resizeMode="contain"
                style={{
                  height: vw(20),
                  width: vw(20),
                  tintColor: focused ? '#6231AD' : 'grey',
                }}
                source={require('../assets/user.png')}
              />
            ),
          }}
          component={Profile}
        />
      </BottomTab.Navigator>
    </>
  );
};

export default MyBottomTabs;
