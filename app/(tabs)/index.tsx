import { View, Text, Image, StyleSheet, ImageBackground } from 'react-native';

export default function HomeScreen() {
  return (
    <ImageBackground 
      source={{ uri: 'https://i.pinimg.com/originals/90/7c/62/907c62060fcc8383b63207d79b942fd3.jpg' }} 
      style={styles.background}
    >
      <View style={styles.container}>
        {/* SECTION FOTO */} 
        <Image 
          source={require('../../assets/images/pict.jpeg')}
          style={styles.profilePic} 
        />

        {/* SECTION IDENTITAS */}
        <Text style={styles.name}>Meisya Cut Nanda</Text>
        <Text style={styles.nim}>NIM 243303621220</Text>

        {/* SECTION BIO */}
        <View style={styles.bioCard}>
          <Text style={styles.bioText}>
            Tetaplah berbuat baik walaupun
            sudah di kecewakan berkali kali
          </Text>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1, // Memenuhi seluruh layar
  },
  container: {
    flex: 1,
    // Saya ubah background menjadi semi-transparan hitam (RGBA) 
    // agar teks tetap terbaca di atas motif yang ramai
    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  profilePic: {
    width: 140,
    height: 140,
    borderRadius: 70,
    borderWidth: 3,
    borderColor: '#040e0ef7',
    marginBottom: 15,
  },
  name: {
    fontSize: 24,
    fontWeight: '900',
    color: '#ffffff',
    marginBottom: 5,
  },
  nim: {
    fontSize: 14,
    color: '#99d5ff',
    marginBottom: 20,
    letterSpacing: 2,
  },
  bioCard: {
    backgroundColor: '#0f0202',
    padding: 20,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#333',
    width: '100%',
  },
  bioText: {
    // Saya ganti warnanya ke putih agar lebih kontras di background gelap
    color: '#ffffff', 
    textAlign: 'center',
    fontStyle: 'italic',
  },
});