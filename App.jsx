import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React from 'react';
import PartnerProfile from './src/PartnerProfile/PartnerProfile';
import PayRepoForAdmin from './src/PaymentForAdmin/PayRepoForAdmin';
import EditProfile from './src/EditProfile/EditProfile';
import Notification from './src/Notification/Notification';

const App = () => {
  return (
    <ScrollView>
      <PartnerProfile />
      {/* <PayRepoForAdmin/> */}
      {/* <EditProfile/> */}
      {/* <Notification/> */}
    </ScrollView>
  );
};

export default App;

const styles = StyleSheet.create({});
