//BAB6
import React, { useRef, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Animated,
  TouchableWithoutFeedback,
} from 'react-native';

const TentangAplikasiScreen = () => {
  const [visible, setVisible] = useState(false);
  const slideAnim = useRef(new Animated.Value(50)).current;
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const handlePress = () => {
    setVisible(true);
    Animated.parallel([
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 600,
        useNativeDriver: true,
      }),
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 600,
        useNativeDriver: true,
      }),
    ]).start();
  };

  return (
    <View style={styles.wrapper}>
      {!visible && (
        <TouchableWithoutFeedback onPress={handlePress}>
          <View style={styles.overlay}>
            <Text style={styles.tapToReveal}>Tap di mana saja untuk melihat info aplikasi</Text>
          </View>
        </TouchableWithoutFeedback>
      )}

      {visible && (
        <Animated.View
          style={[
            styles.card,
            {
              opacity: fadeAnim,
              transform: [{ translateY: slideAnim }],
            },
          ]}
        >
          <Text style={styles.title}>🎵 Tentang Aplikasi</Text>
          <Text style={styles.text}>
            Nusantara Melody adalah aplikasi koleksi lagu-lagu daerah dari seluruh Indonesia.
            Nikmati kekayaan budaya melalui musik tradisional nusantara.
          </Text>
          <Text style={styles.text}>
            Dibuat oleh: <Text style={styles.bold}>Bintang Brillian Hakim (2218092)</Text>{'\n'}
            Untuk tugas mata kuliah <Text style={styles.bold}>Mobile Programming</Text>.
          </Text>
        </Animated.View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#f0f4f8',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    position: 'relative',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 2,
  },
  tapToReveal: {
    fontSize: 16,
    color: '#555',
    fontStyle: 'italic',
    padding: 16,
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 24,
    width: '100%',
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    zIndex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
    color: '#2196F3',
  },
  text: {
    fontSize: 16,
    color: '#333',
    marginBottom: 12,
    lineHeight: 24,
    textAlign: 'center',
  },
  bold: {
    fontWeight: '600',
    color: '#000',
  },
});

export default TentangAplikasiScreen;

//animasi nya disini