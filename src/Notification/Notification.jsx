import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import AntDesign from "react-native-vector-icons/AntDesign";
import Feather from "react-native-vector-icons/Feather";

const notifications = [
  { id: '1', text: 'Email From Admin.', icon: 'mail' },
  { id: '2', text: 'Check New Leads', icon: 'bell' },
  { id: '3', text: 'New Client Feedback', icon: null }, // No icon for this
  { id: '4', text: 'New Updates', icon: 'bell' },
  { id: '5', text: 'Email From Admin.', icon: 'mail' },
  { id: '6', text: 'Email From Admin.', icon: 'mail' },
];

const Notification = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <AntDesign name="leftcircleo" size={24} color="black" />
        <Text style={styles.headerText}>Notification</Text>
      </View>

      <FlatList
        data={notifications}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => (
          <View style={styles.notificationItem}>
            <Text style={styles.notificationText}>{index + 1}) {item.text}</Text>
            {item.icon && <Feather name={item.icon} size={20} color="black" style={styles.iconStyle} />}
          </View>
        )}
      />
    </View>
  );
};

export default Notification;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    padding: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 10,
  },
  notificationItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
    opacity: 0.6,
  },
  notificationText: {
    fontSize: 16,
    color: "#000000",
  },
  iconStyle: {
    opacity: 0.6, 
  },
});
