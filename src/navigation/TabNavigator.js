import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import TambahLaguScreen from '../screens/TambahLaguScreen';
import TentangAplikasiScreen from '../screens/TentangAplikasiScreen';
import LirikScreen from '../screens/LirikScreen';
import AddLirikScreen from '../screens/AddLirikScreen';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Home') iconName = 'home-outline';
          else if (route.name === 'Tambah Lagu') iconName = 'add-circle-outline';
          else if (route.name === 'Lirik Lagu') iconName = 'musical-notes-outline';
          // else if (route.name === 'Tambah Lirik') iconName = 'document-text-outline';
          else if (route.name === 'Tentang') iconName = 'information-circle-outline';
          else if (route.name === 'Profile') iconName = 'person-outline';

          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#2196F3',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Tambah Lagu" component={TambahLaguScreen} />
      <Tab.Screen name="Lirik Lagu" component={LirikScreen} />
      {/* <Tab.Screen name="Tambah Lirik" component={AddLirikScreen} /> */}
      <Tab.Screen name="Tentang" component={TentangAplikasiScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
