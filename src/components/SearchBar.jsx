import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Pressable, Text } from 'react-native';

const SearchBar = () => {
  const [searchText, setSearchText] = useState('');

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Search lagu tradisional..."
        value={searchText}
        onChangeText={setSearchText}
        style={styles.input}
      />
      <Pressable style={styles.button}>
        <Text style={{ color: 'white' }}>Cari</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flexDirection: 'row', paddingHorizontal: 16, marginBottom: 16 },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10
  },
  button: {
    backgroundColor: '#4f46e5',
    padding: 10,
    borderRadius: 8,
    marginLeft: 8
  }
});

export default SearchBar;
