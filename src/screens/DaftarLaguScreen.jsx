import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { laguData } from '../data/laguData';

const DaftarLaguScreen = () => (
  <View style={styles.container}>
    <Text style={styles.title}>Daftar Lagu Nusantara</Text>
    {laguData.map(lagu => (
      <Text key={lagu.id} style={styles.item}>
        🎵 {lagu.judul} - {lagu.provinsi}
      </Text>
    ))}
  </View>
);

const styles = StyleSheet.create({
  container: { padding: 20 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 12 },
  item: { fontSize: 16, marginBottom: 6 }
});

export default DaftarLaguScreen;
