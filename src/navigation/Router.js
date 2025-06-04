// src/navigation/Router.js
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './TabNavigator';
import AddLirikScreen from '../screens/AddLirikScreen';

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* Tab Navigator utama */}
        <Stack.Screen
          name="MainApp"
          component={TabNavigator}
          options={{ headerShown: false }}
        />

        {/* AddLirikScreen disembunyikan dari Tab, tapi tetap bisa dipanggil */}
        <Stack.Screen
          name="AddLirik"
          component={AddLirikScreen}
          options={{ title: 'Tambah Lirik Lagu' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
