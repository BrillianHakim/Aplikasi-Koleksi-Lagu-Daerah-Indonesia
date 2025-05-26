import React, { useState } from 'react';
import {
  View, Text, TextInput, StyleSheet,
  ScrollView, Button, TouchableOpacity
} from 'react-native';

import LaguCard from '../components/LaguCard';
import { laguData } from '../data/laguData';

import TentangAplikasiScreen from './TentangAplikasiScreen';
import DaftarLaguScreen from './DaftarLaguScreen';



const HomeScreen = () => {
  const [query, setQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Semua');
  const [likedSongs, setLikedSongs] = useState({}); // key: id, value: true/false

  const [activeScreen, setActiveScreen] = useState('home');

  const categories = ['Semua', 'Populer', 'Favorit'];

  const handleLike = (id) => {
    setLikedSongs(prev => ({
      ...prev,
      [id]: !prev[id] // toggle
    }));
  };

  const filteredData = laguData.filter(lagu => {
    const matchSearch = lagu.judul.toLowerCase().includes(query.toLowerCase());

    let matchCategory = true;
    if (selectedCategory === 'Populer') matchCategory = lagu.populer;
    else if (selectedCategory === 'Terbaru') matchCategory = lagu.terbaru;
    else if (selectedCategory === 'Favorit') matchCategory = likedSongs[lagu.id];

    return matchSearch && matchCategory;
  });

  return (
  <ScrollView style={styles.container}>
    <Text style={styles.header}>Nusantara Melody</Text>

    {/* Tombol untuk ganti screen */}
    <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginVertical: 10 }}>
      <Button title="🏠 Home" onPress={() => setActiveScreen('home')} />
      <Button title="📄 Tentang" onPress={() => setActiveScreen('tentang')} />
      <Button title="🎶 Daftar Lagu" onPress={() => setActiveScreen('daftar')} />
    </View>

    {/* Tampilkan screen sesuai pilihan */}
    {activeScreen === 'tentang' && <TentangAplikasiScreen />}
    {activeScreen === 'daftar' && <DaftarLaguScreen />}

    {activeScreen === 'home' && (
      <>
        {/* Pencarian */}
        <View style={styles.searchRow}>
          <TextInput
            placeholder="Cari lagu..."
            value={query}
            onChangeText={setQuery}
            style={styles.input}
          />
          <Button title="Cari" onPress={() => {}} />
        </View>

        {/* Kategori */}
        <View style={styles.categoryRow}>
          {categories.map(category => (
            <TouchableOpacity
              key={category}
              style={[
                styles.categoryButton,
                selectedCategory === category && styles.categoryButtonSelected
              ]}
              onPress={() => setSelectedCategory(category)}
            >
              <Text
                style={[
                  styles.categoryText,
                  selectedCategory === category && styles.categoryTextSelected
                ]}
              >
                {category}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Daftar lagu */}
        {filteredData.map(item => (
          <LaguCard
            key={item.id}
            data={item}
            isLiked={likedSongs[item.id]}
            onLike={() => handleLike(item.id)}
          />
        ))}
      </>
    )}
  </ScrollView>
);

};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#f2f2f2'
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  searchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 12
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#aaa',
    padding: 8,
    borderRadius: 8,
    marginRight: 8,
    backgroundColor: '#fff'
  },
  categoryRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 12,
    gap: 8
  },
  categoryButton: {
    backgroundColor: '#ddd',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 8,
    marginBottom: 8
  },
  categoryButtonSelected: {
    backgroundColor: '#2196F3'
  },
  categoryText: {
    color: '#333'
  },
  categoryTextSelected: {
    color: '#fff'
  }
});

export default HomeScreen;
