import React from 'react';
import { StyleSheet, Text, View, Image, Pressable, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import AntDesign from "react-native-vector-icons/AntDesign";
import InputField from '../components/InputField';
import { GREENCOLOR } from '../contstant/color';

const EditProfile = () => {
    const drillImg = require('../../assets/Images/drill.png');

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === "ios" ? "padding" : "height"} 
      style={{ flex: 1 }}
    >
      <ScrollView 
        style={styles.container} 
        keyboardShouldPersistTaps="handled"
      >
          <AntDesign name="leftcircleo" color="black" size={24} />
        
        <View style={styles.imageContainer}>
          <Image source={drillImg} style={styles.profileImage} />
        </View>
         
        <Text style={styles.sectionTitle}>About</Text>
        <InputField placeholder="Enter" />
        <Text style={styles.sectionTitle}>Phone Number</Text>
        <InputField placeholder="+9876543210" editable={true} />
        <Text style={styles.sectionTitle}>Address</Text>
        <InputField placeholder="123 Elm Street, New York, NY" editable={true} />

        <Text style={styles.sectionTitle}>Change password</Text>
        <InputField placeholder="Enter" secureTextEntry={true} />
        <Text style={styles.sectionTitle}>New password</Text>
        <InputField placeholder="Enter" secureTextEntry={true} />
        <Text style={styles.sectionTitle}>Confirm New password</Text>
        <InputField placeholder="Enter" secureTextEntry={true} />

        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Save Changes</Text>
        </Pressable>

      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 20,
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 150,
    height: 80,
    borderRadius : 10
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 5,
  },
  button: {
    backgroundColor: GREENCOLOR,
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
