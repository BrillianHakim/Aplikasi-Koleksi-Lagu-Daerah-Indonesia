//BAB8
import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const LirikScreen = () => {
  const [laguList, setLaguList] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  useEffect(() => {
    const unsubscribe = firestore()
      .collection('laguDaerah')
      .onSnapshot(snapshot => {
        const laguData = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        setLaguList(laguData);
        setLoading(false);
      });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#2196F3" />
      </View>
    );
  }

  return (
    <View style={styles.wrapper}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.header}>📜 Lirik & Terjemahan Lagu</Text>

        {laguList.length === 0 ? (
          <Text style={styles.emptyText}>Belum ada lirik yang ditambahkan.</Text>
        ) : (
          laguList.map((lagu) => (
            <View key={lagu.id} style={styles.card}>
              <Text style={styles.judul}>{lagu.judul}</Text>
              <Text style={styles.asal}>Asal: {lagu.asal}</Text>
              <Text style={styles.subHeader}>🎵 Lirik Lagu:</Text>
              <Text style={styles.textBlock}>{lagu.lirik}</Text>
              <Text style={styles.subHeader}>📝 Terjemahan:</Text>
              <Text style={styles.textBlock}>{lagu.terjemahan}</Text>
            </View>
          ))
        )}
      </ScrollView>

      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate('AddLirik')}
      >
        <Icon name="add" size={24} color="#fff" />
        <Text style={styles.addButtonText}>Tambah Lirik</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#f9fafd',
  },
  container: {
    padding: 16,
    paddingBottom: 100,
  },
  header: {
    fontSize: 22,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  card: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
    borderLeftWidth: 5,
    borderLeftColor: '#2196F3',
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  judul: {
    fontSize: 20,
    fontWeight: '700',
    color: '#2196F3',
    marginBottom: 4,
  },
  asal: {
    fontSize: 14,
    color: '#666',
    marginBottom: 10,
  },
  subHeader: {
    fontWeight: '600',
    fontSize: 16,
    marginTop: 8,
    color: '#444',
  },
  textBlock: {
    fontSize: 14,
    lineHeight: 22,
    marginTop: 4,
    color: '#333',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f9fafd',
  },
  emptyText: {
    textAlign: 'center',
    fontSize: 16,
    color: '#888',
    marginTop: 50,
  },
  addButton: {
    position: 'absolute',
    bottom: 24,
    right: 24,
    backgroundColor: '#2196F3',
    borderRadius: 30,
    paddingVertical: 12,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 3,
  },
  addButtonText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 14,
    marginLeft: 8,
  },
});

export default LirikScreen;
