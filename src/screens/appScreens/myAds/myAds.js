import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';
import NoDataFind from '../../../components/noDataText';
const MyAds = ({navigation}) => {
  return (
    <SafeAreaView>
      <StatusBar backgroundColor={'#00AEEF'} />
      <NoDataFind
        title1="No Active Ads"
        title2="You haven't posted anything yet. Would you like to sell something."
      />
    </SafeAreaView>
  );
};

export default MyAds;
