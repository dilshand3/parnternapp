import React from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import AntDesign from "react-native-vector-icons/AntDesign";
import { GREENCOLOR } from '../contstant/color';

const PayRepoForAdmin = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <AntDesign name="leftcircleo" color="black" size={24} />
        <Text style={styles.headerText}>Payment To Admin</Text>
      </View>

      <View style={styles.detailsContainer}>
        <View style={styles.row}>
          <Text style={styles.text}>Payment Received From User</Text>
          <Text style={styles.text}>Rs.500</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.text}>Admin Commission 40%</Text>
          <Text style={styles.text}>Rs.200</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.text}>GST</Text>
          <Text style={styles.text}>10%</Text>
        </View>
        <View style={styles.divider} />
        <View style={styles.row}>
          <Text style={styles.totalText}>Total</Text>
          <Text style={styles.totalAmount}>Rs.220</Text>
        </View>
      </View>

      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>Continue</Text>
      </Pressable>
    </View>
  );
};

export default PayRepoForAdmin;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  detailsContainer: {
    backgroundColor: '#fff',
    padding: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 8,
  },
  text: {
    fontSize: 16,
    color: '#000',
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginVertical: 10,
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  totalAmount: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  button: {
    backgroundColor: {GREENCOLOR},
    paddingVertical: 12,
    borderRadius: 6,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
});
