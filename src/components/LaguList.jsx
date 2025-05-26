import React from 'react';
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

const DATA = [
  { id: '1', title: 'Soleram', province: 'Riau' },
  { id: '2', title: 'Yamko Rambe Yamko', province: 'Papua' },
  { id: '3', title: 'Manuk Dadali', province: 'Jawa Barat' },
];

const LaguItem = ({ title, province }) => (
  <TouchableOpacity style={styles.item}>
    <Image
      source={{ uri: 'https://source.unsplash.com/random/100x100?music' }}
      style={styles.image}
    />
    <View style={styles.textContainer}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{province}</Text>
    </View>
  </TouchableOpacity>
);

const LaguList = () => {
  return (
    <FlatList
      data={DATA}
      keyExtractor={item => item.id}
      renderItem={({ item }) => <LaguItem title={item.title} province={item.province} />}
      contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 100 }}
    />
  );
};

const styles = StyleSheet.create({
  item: { flexDirection: 'row', marginBottom: 16 },
  image: { width: 80, height: 80, borderRadius: 10, marginRight: 16 },
  textContainer: { justifyContent: 'center' },
  title: { fontSize: 16, fontWeight: 'bold' },
  subtitle: { color: 'gray' }
});

export default LaguList;
