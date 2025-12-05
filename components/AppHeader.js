import { StyleSheet, Text, View } from 'react-native';

export default function AppHeader() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mon Application React Native</Text>
      <Text style={styles.description}>
        Bienvenue dans votre première application React Native ! 
        Découvrez les composants réutilisables et la structure modulaire.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F4CE14',
    paddingVertical: 24,
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#495E57',
    textAlign: 'center',
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    color: '#333333',
    textAlign: 'center',
    marginTop: 4,
    lineHeight: 22,
  },
});