//BAB8
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ScrollView } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import { useNavigation } from '@react-navigation/native';

const AddLirikScreen = () => {
  const navigation = useNavigation();
  const [judul, setJudul] = useState('');
  const [asal, setAsal] = useState('');
  const [lirik, setLirik] = useState('');
  const [terjemahan, setTerjemahan] = useState('');

  const handleSubmit = async () => {
  if (!judul || !asal || !lirik || !terjemahan) {
    Alert.alert('Peringatan', 'Mohon lengkapi semua kolom.');
    return;
  }

  try {
    await firestore()
      .collection('laguDaerah')
      .add({
        judul,
        asal,
        populer: false,
        lirik,
        terjemahan,
      });
    Alert.alert('Sukses', 'Lirik berhasil ditambahkan.');
    navigation.goBack();
  } catch (error) {
    Alert.alert('Error', 'Gagal menambahkan lirik. Coba lagi.');
    console.error(error);
  }
};

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Tambah Lirik Lagu</Text>

      <TextInput
        placeholder="Judul Lagu"
        value={judul}
        onChangeText={setJudul}
        style={styles.input}
      />
      <TextInput
        placeholder="Asal Daerah"
        value={asal}
        onChangeText={setAsal}
        style={styles.input}
      />
      <TextInput
        placeholder="Lirik Lagu"
        value={lirik}
        onChangeText={setLirik}
        multiline
        numberOfLines={6}
        style={[styles.input, { height: 120, textAlignVertical: 'top' }]}
      />
      <TextInput
        placeholder="Terjemahan Lirik"
        value={terjemahan}
        onChangeText={setTerjemahan}
        multiline
        numberOfLines={6}
        style={[styles.input, { height: 120, textAlignVertical: 'top' }]}
      />

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Simpan Lirik</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f9fafd',
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  button: {
    backgroundColor: '#2196F3',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
});

export default AddLirikScreen;
