import React from 'react';
import {SafeAreaView, View} from 'react-native';
import NoDataFind from '../../../components/noDataText';
import Header from '../../../components/header';
import MyAdsTab from '../../../router/myAdsTab';
const MyAds = ({navigation}) => {
  return (
    <View backgroundColor={'#fff'}>
      <Header title="My Ads" CrossIcon={false} Navigation={navigation} />
      <View
        style={{
          width: '100%',
          height: '100%',
        }}>
        <MyAdsTab />
      </View>
    </View>
  );
};

export default MyAds;
