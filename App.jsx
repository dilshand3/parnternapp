import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import AntDesign from "react-native-vector-icons/AntDesign";

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>App</Text>
      <Text style={styles.text}>I am Dilshan</Text>
      <Text style={styles.text}>I am the new world</Text>
      <AntDesign name="eye" color="green" size={30} />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    marginBottom: 5,
  },
});
