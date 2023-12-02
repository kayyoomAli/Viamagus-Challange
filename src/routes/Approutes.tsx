import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MyBottomTabs from './BottomTabs';
import Splash from '../screens/Splash';

const AppRoutes = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={'MyBottomTabs'}>
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name={'Splash'}
          component={Splash}
        />

        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name={'MyBottomTabs'}
          component={MyBottomTabs}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppRoutes;
