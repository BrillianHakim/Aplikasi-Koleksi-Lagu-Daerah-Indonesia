import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

const ProfileScreen = () => {
  const [judul, setJudul] = useState('');
  const [provinsi, setProvinsi] = useState('');
  const [pencipta, setPencipta] = useState('');
  const [deskripsi, setDeskripsi] = useState('');

  const handleSubmit = () => {
    if (!judul || !provinsi || !pencipta || !deskripsi) {
      Alert.alert('Error', 'Semua field harus diisi!');
      return;
    }

    Alert.alert(
      'Lagu Ditambahkan',
      `Judul: ${judul}\nProvinsi: ${provinsi}\nPencipta: ${pencipta}\nDeskripsi: ${deskripsi}`
    );

    setJudul('');
    setProvinsi('');
    setPencipta('');
    setDeskripsi('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tambah Lagu (via Profil)</Text>
      <TextInput style={styles.input} placeholder="Judul Lagu" value={judul} onChangeText={setJudul} />
      <TextInput style={styles.input} placeholder="Provinsi" value={provinsi} onChangeText={setProvinsi} />
      <TextInput style={styles.input} placeholder="Pencipta" value={pencipta} onChangeText={setPencipta} />
      <TextInput style={[styles.input, { height: 80 }]} multiline placeholder="Deskripsi" value={deskripsi} onChangeText={setDeskripsi} />
      <Button title="Tambah Lagu" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20 },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 16 },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginBottom: 12,
    backgroundColor: '#fff'
  },
});

export default ProfileScreen;
