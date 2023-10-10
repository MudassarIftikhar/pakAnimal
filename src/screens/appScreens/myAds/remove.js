import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import NoDataFind from '../../../components/noDataText';
const Remove = ({navigation}) => {
  return (
    <SafeAreaView>
      <StatusBar backgroundColor={'#b63439'} />
      <NoDataFind
        title1="No Removed Ads"
        title2="You haven't posted anything yet. Would you like to sell something."
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  noData: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  txtNoAds: {
    fontSize: 18,
    fontWeight: '700',
    color: '#000',
  },
  txtLbl2: {
    color: 'grey',
    marginTop: -5,
    fontSize: 16,
  },
});
export default Remove;
