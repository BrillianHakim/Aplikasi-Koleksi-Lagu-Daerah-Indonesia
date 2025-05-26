import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  Modal,
  TouchableOpacity
} from 'react-native';

const LaguCard = ({ data, isLiked, onLike }) => {
  const [showModal, setShowModal] = useState(false);

  if (!data) return null;

  return (
    <>
      <Pressable style={styles.card} onPress={() => setShowModal(true)}>
        <Image source={data.gambar} style={styles.image} />
        <View style={{ flex: 1 }}>
          <Text style={styles.title}>{data.judul}</Text>
          <Text style={styles.subtitle}>{data.provinsi}</Text>
        </View>
        <Pressable onPress={onLike}>
          <Text style={styles.like}>{isLiked ? '❤️' : '🤍'}</Text>
        </Pressable>
      </Pressable>

      {/* Custom Modal */}
      <Modal visible={showModal} transparent animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>🎵 {data.judul}</Text>
            <Text style={styles.modalText}>📍 Provinsi: {data.provinsi}</Text>
            <Text style={styles.modalText}>👤 Pencipta: {data.pencipta}</Text>
            <Text style={styles.modalText}>📝 Info: {data.deskripsi}</Text>

            <TouchableOpacity style={styles.okButton} onPress={() => setShowModal(false)}>
              <Text style={styles.okText}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 10,
    marginVertical: 8,
    padding: 10,
    alignItems: 'center',
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 10,
    marginRight: 12,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  subtitle: {
    color: 'gray',
  },
  like: {
    fontSize: 20,
    marginLeft: 8,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#f5f5f5',
    padding: 24,
    borderRadius: 16,
    width: '85%',
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#333',
  },
  modalText: {
    fontSize: 16,
    marginBottom: 8,
    color: '#444',
  },
  okButton: {
    marginTop: 16,
    backgroundColor: '#4f46e5',
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  okText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default LaguCard;
