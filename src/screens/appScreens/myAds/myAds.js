import React from 'react';
import {
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
const MyAds = ({navigation}) => {
  return (
    <SafeAreaView>
      <StatusBar backgroundColor={'#00AEEF'} />
      <View style={styles.noData}>
        <Text style={styles.txtNoAds}>No Active Ads</Text>
        <Text style={styles.txtLbl2}>
          You haven't posted anything yet. Would you like to sell something
        </Text>
      </View>
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
export default MyAds;
