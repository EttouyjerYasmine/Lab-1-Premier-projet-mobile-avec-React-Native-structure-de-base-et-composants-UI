import { StyleSheet, Text, View } from 'react-native';

export default function AppFooter() {
  const currentYear = new Date().getFullYear();
  const appName = 'MonApp';

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {appName} © {currentYear} - All rights reserved
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F4CE14',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  text: {
    fontSize: 14,
    color: 'black',
    textAlign: 'center',
  },
});