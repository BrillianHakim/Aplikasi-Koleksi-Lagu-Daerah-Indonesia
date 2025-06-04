//BAB7
import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
  Pressable,
} from 'react-native';
import LaguCard from './components/LaguCard';
import { useNavigation } from '@react-navigation/native';

// Contoh fetch data dari mockAPI (ganti URL sesuai milikmu)
const fetchLaguData = async () => {
  const response = await fetch('https://683d9125199a0039e9e5fd27.mockapi.io/lagu/lagu-daerah'); // ganti URL
  if (!response.ok) throw new Error('Gagal memuat data');
  return response.json();
};

const HomeScreen = () => {
  const navigation = useNavigation();
  const [query, setQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Semua');
  const [likedSongs, setLikedSongs] = useState({});
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const categories = ['Semua', 'Populer', 'Favorit'];

  const loadData = async () => {
    setLoading(true);
    setError(null);
    try {
      const result = await fetchLaguData();
      setData(result);
    } catch (err) {
      setError(err.message || 'Terjadi kesalahan');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleLike = (id) => {
    setLikedSongs((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // Filter data sesuai query dan kategori
  const filteredData = data.filter((lagu) => {
    const matchSearch = lagu.judul.toLowerCase().includes(query.toLowerCase());
    let matchCategory = true;
    if (selectedCategory === 'Populer') matchCategory = lagu.populer;
    else if (selectedCategory === 'Favorit') matchCategory = likedSongs[lagu.id];
    return matchSearch && matchCategory;
  });

  // Render item FlatList
  const renderItem = ({ item }) => (
    <LaguCard
      data={item}
      isLiked={likedSongs[item.id]}
      onLike={() => handleLike(item.id)}
    />
  );

  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <Text style={styles.header}>Nusantara Melody</Text>

        <View style={styles.searchRow}>
          <TextInput
            placeholder="Cari lagu..."
            value={query}
            onChangeText={setQuery}
            style={styles.input}
            returnKeyType="search"
          />
          <TouchableOpacity
            style={styles.searchButton}
            onPress={() => setQuery('')}
            accessibilityRole="button"
          >
            <Text style={styles.searchButtonText}>Reset</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.categoryRow}>
          {categories.map((category) => {
            const selected = selectedCategory === category;
            return (
              <TouchableOpacity
                key={category}
                style={[
                  styles.categoryButton,
                  selected && styles.categoryButtonSelected,
                ]}
                onPress={() => setSelectedCategory(category)}
                activeOpacity={0.7}
                accessibilityRole="button"
              >
                <Text
                  style={[
                    styles.categoryText,
                    selected && styles.categoryTextSelected,
                  ]}
                >
                  {category}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>

        {loading ? (
          <ActivityIndicator size="large" color="#2196F3" style={{ marginTop: 40 }} />
        ) : error ? (
          <View style={{ marginTop: 40, alignItems: 'center' }}>
            <Text style={{ color: 'red', fontSize: 16, marginBottom: 10 }}>{error}</Text>
            <TouchableOpacity
              onPress={loadData}
              style={[styles.footerButton, { paddingVertical: 10, marginHorizontal: 0 }]}
            >
              <Text style={{ color: '#2196F3', fontWeight: '700' }}>Coba Lagi</Text>
            </TouchableOpacity>
          </View>
        ) : filteredData.length > 0 ? (
          <FlatList
            data={filteredData}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 40 }}
          />
        ) : (
          <Text style={styles.noResultText}>Lagu tidak ditemukan.</Text>
        )}

        <View style={styles.footerButtons}>
          <TouchableOpacity
            style={styles.footerButton}
            onPress={() => navigation.navigate('Tentang')}
            activeOpacity={0.8}
          >
            <Text style={styles.footerButtonText}>Tentang Aplikasi</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.footerButton, styles.addSongButton]}
            onPress={() => navigation.navigate('Tambah Lagu')}
            activeOpacity={0.8}
          >
            <Text style={[styles.footerButtonText, { color: '#2196F3' }]}>Tambah Lagu</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#f9fafd',
  },
  container: {
    padding: 20,
    flex: 1,
  },
  header: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 20,
    color: '#222',
    textAlign: 'center',
  },
  searchRow: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
    elevation: 2,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  searchButton: {
    marginLeft: 12,
    backgroundColor: '#2196F3',
    paddingHorizontal: 20,
    justifyContent: 'center',
    borderRadius: 12,
    shadowColor: '#2196F3',
    shadowOpacity: 0.4,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 3,
  },
  searchButtonText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 16,
  },
  categoryRow: {
    flexDirection: 'row',
    marginBottom: 24,
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  categoryButton: {
    backgroundColor: '#e4e7f1',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 30,
    marginRight: 12,
    marginBottom: 12,
  },
  categoryButtonSelected: {
    backgroundColor: '#2196F3',
  },
  categoryText: {
    color: '#555',
    fontWeight: '600',
    fontSize: 14,
  },
  categoryTextSelected: {
    color: '#fff',
  },
  noResultText: {
    fontSize: 16,
    color: '#999',
    textAlign: 'center',
    marginTop: 40,
  },
  footerButtons: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  footerButton: {
    flex: 1,
    backgroundColor: '#e2e8f0',
    paddingVertical: 14,
    borderRadius: 16,
    marginHorizontal: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addSongButton: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#2196F3',
  },
  footerButtonText: {
    fontWeight: '700',
    fontSize: 16,
    color: '#333',
  },
});

export default HomeScreen;
