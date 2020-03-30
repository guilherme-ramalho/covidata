import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import CountryMap from '../../screens/CountryMap';
// import AccumulatedCases from '../../screens/AccumulatedCases';
import RegionsCases from '../../screens/RegionsCases';

export default function NavigationTabs() {
  const Tab = createBottomTabNavigator();

  const getTabIcon = (iconState, route) => {
    const { color, size } = iconState;

    switch (route.name) {
      case 'Casos':
        return <Icon name="earth" color={color} size={size} />;
      case 'Regiões':
        return <Icon name="chart-arc" color={color} size={size} />;
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
      tabBarOptions={{
        activeTintColor: '#fab822',
        inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen name="Casos" component={CountryMap} />
      <Tab.Screen name="Regiões" component={RegionsCases} />
      {/* <Tab.Screen name="Acumulados" component={AccumulatedCases} /> */}
    </Tab.Navigator>
  );
}
