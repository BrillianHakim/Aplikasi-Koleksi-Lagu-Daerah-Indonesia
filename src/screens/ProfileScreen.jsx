import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

const ProfileScreen = () => {
  // Data dummy user, nanti bisa diganti dengan props atau API
  const user = {
    name: 'Bintang Brillian Hakim',
    email: 'bintang@example.com',
    bio: 'Mahasiswa Mobile Programming yang suka musik dan teknologi. Senang mengoleksi lagu-lagu daerah Indonesia.',
    avatar: 'https://i.pravatar.cc/150?img=12', // contoh avatar random
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={{ uri: user.avatar }} style={styles.avatar} />
      <Text style={styles.name}>{user.name}</Text>
      <Text style={styles.email}>{user.email}</Text>

      <View style={styles.bioContainer}>
        <Text style={styles.bioTitle}>Tentang Saya</Text>
        <Text style={styles.bioText}>{user.bio}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 24,
    alignItems: 'center',
    backgroundColor: '#f9fafd',
    flexGrow: 1,
  },
  avatar: {
    width: 140,
    height: 140,
    borderRadius: 70,
    marginBottom: 20,
    borderWidth: 2,
    borderColor: '#2196F3',
  },
  name: {
    fontSize: 26,
    fontWeight: '700',
    color: '#222',
    marginBottom: 4,
  },
  email: {
    fontSize: 16,
    color: '#666',
    marginBottom: 24,
  },
  bioContainer: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 20,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 3,
  },
  bioTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 12,
    color: '#2196F3',
  },
  bioText: {
    fontSize: 16,
    lineHeight: 24,
    color: '#444',
  },
});

export default ProfileScreen;
