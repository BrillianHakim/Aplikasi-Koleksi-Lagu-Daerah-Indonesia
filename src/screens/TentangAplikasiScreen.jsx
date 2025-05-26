import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TentangAplikasiScreen = () => (
  <View style={styles.container}>
    <Text style={styles.title}>Tentang Aplikasi</Text>
    <Text style={styles.text}>
      Aplikasi Nusantara Melody adalah aplikasi koleksi lagu-lagu daerah dari seluruh Indonesia.
    </Text>
    <Text style={styles.text}>
      Dibuat oleh: Bintang Brillian Hakim (2218092) untuk tugas mata kuliah Mobile Programming.
    </Text>
  </View>
);

const styles = StyleSheet.create({
  container: { padding: 20 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 10 },
  text: { fontSize: 16, lineHeight: 24, marginBottom: 8 }
});

export default TentangAplikasiScreen;
