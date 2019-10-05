import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.container_central}>
        <Text style={styles.texto}>Lontra</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container_central:{
    backgroundColor: 'blue',
    width: 120,
    height: 70,
    alignItems: "center",
    justifyContent:  'center',
    borderRadius: 10
  },
  texto:{
    color: 'white',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  }
});
