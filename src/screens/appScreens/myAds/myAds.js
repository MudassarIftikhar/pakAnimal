import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import NoDataFind from '../../../components/noDataText';
const ActiveAds = ({navigation}) => {
  return (
    <SafeAreaView>
      <StatusBar backgroundColor={'#b63439'} />
      <NoDataFind
        title1="No Active Ads"
        title2="You haven't posted anything yet. Would you like to sell something."
      />
    </SafeAreaView>
  );
};

export default ActiveAds;
