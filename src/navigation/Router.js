import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/HomeScreen';
import DiscoverScreen from '../screens/DiscoverScreen';
import BookmarkScreen from '../screens/BookmarkScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Tab = createBottomTabNavigator();

export default function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
  <Stack.Screen name="MainApp" component={TabNavigator} options={{ headerShown: false }} />
</Stack.Navigator>
    </NavigationContainer>
  );
}
