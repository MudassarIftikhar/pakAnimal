import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';
import NoDataFind from '../../../components/noDataText';

const Pending = ({navigation}) => {
  return (
    <View style={styles.container}>
      <NoDataFind
        title1="No Pending Ads"
        title2="You haven't posted anything yet. Would you like to sell something."
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    top: -120,
  },
});
export default Pending;
