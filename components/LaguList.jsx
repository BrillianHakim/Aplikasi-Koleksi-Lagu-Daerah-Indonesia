//BAB7
import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet, ActivityIndicator, Text } from 'react-native';
import axios from 'axios';
import LaguCard from './LaguCard';

const LaguList = ({ endpoint = '' }) => {
  const [laguData, setLaguData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [likedIds, setLikedIds] = useState([]);

  useEffect(() => {
    fetchData(endpoint);
  }, [endpoint]);

  const fetchData = async (endpoint) => {
    try {
      const url = 'https://683d9125199a0039e9e5fd27.mockapi.io/lagu/lagu-daerah';
      const res = await axios.get(url);
      setLaguData(res.data);
    } catch (error) {
      console.error('Gagal memuat data:', error.message);
    } finally {
      setLoading(false);
    }
  };

  const toggleLike = (id) => {
    setLikedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const renderItem = ({ item }) => (
    <LaguCard
      data={item}
      isLiked={likedIds.includes(item.id)}
      onLike={() => toggleLike(item.id)}
    />
  );

  if (loading) {
    return <ActivityIndicator size="large" style={{ marginTop: 40 }} />;
  }

  if (laguData.length === 0) {
    return <Text style={{ marginTop: 40, textAlign: 'center' }}>Data lagu kosong.</Text>;
  }

  return (
    <FlatList
      data={laguData}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
      contentContainerStyle={styles.listContainer}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    paddingHorizontal: 16,
    paddingBottom: 100,
    paddingTop: 16,
    backgroundColor: '#f9fafd',
  },
});

export default LaguList;
