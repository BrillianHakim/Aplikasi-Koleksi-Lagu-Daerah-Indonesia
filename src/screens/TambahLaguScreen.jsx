//BAB7 AND 9
import React, { useState } from 'react';
import { View, TextInput, Button, Alert, StyleSheet, Switch, Text, ScrollView, Platform } from 'react-native';
import axios from 'axios';
import notifee, { AndroidImportance } from '@notifee/react-native';

const TambahLaguScreen = () => {
  const [judul, setJudul] = useState('');
  const [daerah, setDaerah] = useState('');
  const [gambarUrl, setGambarUrl] = useState('');
  const [isPopuler, setIsPopuler] = useState(false);
  const endpoint = 'https://683d9125199a0039e9e5fd27.mockapi.io/lagu/lagu-daerah';

  // Fungsi minta izin notifikasi (khusus Android 13+)
  async function requestNotificationPermission() {
    const settings = await notifee.requestPermission();
    if (settings.authorizationStatus < 1) {
      Alert.alert('Izin notifikasi dibutuhkan');
      return false;
    }
    return true;
  }

  // Fungsi tampilkan notifikasi
  async function displayNotification() {
    // Buat channel notifikasi (Android)
    const channelId = await notifee.createChannel({
      id: 'default',
      name: 'Default Channel',
      importance: AndroidImportance.HIGH,
    });

    // Tampilkan notifikasi
    await notifee.displayNotification({
      title: '✅ Lagu Berhasil Ditambahkan',
      body: 'Lagu berhasil ditambahkan ke koleksi!',
      android: {
        channelId,
        // smallIcon: 'ic_launcher', // opsional, pastikan tersedia
      },
    });
  }

  const handleSubmit = async () => {
    // Validasi input
    if (!judul.trim() || !daerah.trim()) {
      Alert.alert('Validasi', 'Judul dan daerah tidak boleh kosong.');
      return;
    }

    if (gambarUrl && !/^https?:\/\/.+/.test(gambarUrl)) {
      Alert.alert('Validasi', 'Masukkan URL gambar yang valid.');
      return;
    }

    const newLagu = {
      judul: judul.trim(),
      provinsi: daerah.trim(),
      gambar: gambarUrl.trim() || 'https://via.placeholder.com/100',
      populer: isPopuler,
    };

    try {
      await axios.post(endpoint, newLagu);
      Alert.alert('Berhasil', 'Lagu berhasil ditambahkan!');

      const hasPermission = await requestNotificationPermission();
      if (hasPermission) {
        await displayNotification();
      }

      // Reset form
      setJudul('');
      setDaerah('');
      setGambarUrl('');
      setIsPopuler(false);
    } catch (error) {
      Alert.alert('Gagal', 'Terjadi kesalahan saat menambahkan data.');
      console.error(error);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.label}>Judul Lagu</Text>
      <TextInput
        style={styles.input}
        placeholder="Masukkan judul lagu"
        value={judul}
        onChangeText={setJudul}
      />

      <Text style={styles.label}>Provinsi / Daerah</Text>
      <TextInput
        style={styles.input}
        placeholder="Masukkan daerah asal"
        value={daerah}
        onChangeText={setDaerah}
      />

      <Text style={styles.label}>URL Gambar (opsional)</Text>
      <TextInput
        style={styles.input}
        placeholder="Masukkan URL gambar"
        value={gambarUrl}
        onChangeText={setGambarUrl}
      />

      <View style={styles.switchContainer}>
        <Text style={styles.label}>Populer</Text>
        <Switch value={isPopuler} onValueChange={setIsPopuler} />
      </View>

      <Button title="Tambah Lagu" onPress={handleSubmit} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
  },
  label: {
    marginBottom: 6,
    fontWeight: '600',
    fontSize: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    marginBottom: 16,
    borderRadius: 6,
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
    justifyContent: 'space-between',
  },
});

export default TambahLaguScreen;

//notifikasi disini!!