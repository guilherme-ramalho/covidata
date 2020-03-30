import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../screens/Home';

export default function Routes() {
  const Stack = createStackNavigator();

  return (
    <>
      <StatusBar backgroundColor="#3b2a55" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerTintColor: '#fff',
            headerStyle: {
              backgroundColor: '#563d7c',
            },
          }}
        >
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ title: 'Covidata' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
