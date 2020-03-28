import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import CountryMap from '../../screens/CountryMap';
import AccumulatedCasesChart from '../../screens/AccumulatedCasesChart';
import RegionChart from '../../screens/RegionChart';

export default function NavigationTabs() {
  const Tab = createBottomTabNavigator();

  const getTabIcon = (iconState, route) => {
    const { color, size } = iconState;

    switch (route.name) {
      case 'Casos':
        return <Icon name="earth" color={color} size={size} />;
      case 'Região':
        return <Icon name="city" color={color} size={size} />;
      case 'Acumulados':
        return <Icon name="hospital" color={color} size={size} />;
      default:
        return <Icon name="home" color={color} size={size} />;
    }
  };

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: (iconState) => getTabIcon(iconState, route),
      })}
    >
      <Tab.Screen name="Casos" component={CountryMap} />
      <Tab.Screen name="Região" component={RegionChart} />
      <Tab.Screen name="Acumulados" component={AccumulatedCasesChart} />
    </Tab.Navigator>
  );
}
