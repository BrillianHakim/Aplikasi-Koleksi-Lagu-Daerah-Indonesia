import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen';
import TentangAplikasiScreen from '../screens/TentangAplikasiScreen';
import DaftarLaguScreen from '../screens/DaftarLaguScreen';
import TambahLaguScreen from '../screens/TambahLaguScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Beranda" component={HomeScreen} />
        <Stack.Screen name="Tentang" component={TentangAplikasiScreen} />
        <Stack.Screen name="Daftar Lagu" component={DaftarLaguScreen} />
        <Stack.Screen name="Tambah Lagu" component={TambahLaguScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
