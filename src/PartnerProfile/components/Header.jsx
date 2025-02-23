import { StyleSheet, Text, View, TextInput, Pressable, Image } from 'react-native';
import React from 'react';
import Entypo from "react-native-vector-icons/Entypo";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import AntDesign from "react-native-vector-icons/AntDesign";
import Feather from "react-native-vector-icons/Feather";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const drillImg = require('../../../assets/Images/drill.png');

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <Pressable>
          <AntDesign name="leftcircleo" size={26} color="#000" />
        </Pressable>

        <View style={styles.searchContainer}>
          <Feather name="search" size={18} color="#666" style={styles.searchIcon} />
          <TextInput 
            placeholder="Search for"
            placeholderTextColor="#999"
            style={styles.searchInput}
          />
          <FontAwesome name="microphone" size={18} color="#666" style={styles.micIcon} />
        </View>

        <Pressable>
          <Entypo name="share" size={22} color="#000" />
        </Pressable>
        <Pressable>
          <MaterialIcons name="edit" size={22} color="#000" />
        </Pressable>
      </View>

      <View style={styles.profileSection}>
        <Image source={drillImg} style={styles.profileImage} />
        <View style={styles.profileDetails}>
          <Text style={styles.profileName}>Singh Enterprises</Text>
          <View style={styles.ratingContainer}>
            <Entypo name="star" size={16} color="#FFD700" />
            <Text style={styles.ratingText}>4.5 Rating</Text>
          </View>
          <Text style={styles.address}>Neharu Nagar, Kalyan.</Text>
          <Text style={styles.suggestion}>59 Suggestion</Text>
          <Text style={styles.responseTime}>Respond in <Text style={styles.highlightText}>30 min</Text></Text>
          <Text style={styles.recentViewers}><Text style={styles.highlightText}>189 people</Text> recently viewed</Text>
        </View>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingBottom: 10,
  },
  topSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f1f1f1',
    flex: 1,
    marginHorizontal: 10,
    borderRadius: 10,
    paddingHorizontal: 10,
    height: 35,
  },
  searchIcon: {
    marginRight: 5,
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
    color: '#333',
  },
  micIcon: {
    marginLeft: 5,
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    marginTop: 10,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 10,
  },
  profileDetails: {
    flex: 1,
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 4,
  },
  ratingText: {
    fontSize: 14,
    marginLeft: 5,
    color: '#444',
  },
  address: {
    fontSize: 14,
    color: '#666',
  },
  suggestion: {
    fontSize: 12,
    color: '#666',
  },
  responseTime: {
    fontSize: 12,
    color: '#666',
  },
  recentViewers: {
    fontSize: 12,
    color: '#666',
  },
  highlightText: {
    color: '#3498DB',
    fontWeight: 'bold',
  },
});
