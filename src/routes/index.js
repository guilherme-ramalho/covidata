import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../screens/Home';

export default function Routes() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTintColor: '#fff',
          headerStyle: {
            backgroundColor: '#990005',
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
  );
}
