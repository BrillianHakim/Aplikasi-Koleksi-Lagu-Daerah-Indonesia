import React from 'react';
import { ScrollView, Text, Pressable, StyleSheet } from 'react-native';

const categories = ['Populer', 'Terbaru', 'Nusantara', 'Daerah'];

const CategoryList = () => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.container}>
      {categories.map((item, index) => (
        <Pressable key={index} style={styles.categoryButton}>
          <Text style={styles.categoryText}>{item}</Text>
        </Pressable>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { paddingHorizontal: 16, marginBottom: 16 },
  categoryButton: {
    backgroundColor: '#e0e0e0',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 10
  },
  categoryText: { fontWeight: 'bold' }
});

export default CategoryList;
