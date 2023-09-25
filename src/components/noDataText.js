import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';
const NoDataFind = props => {
  return (
    <SafeAreaView>
      <StatusBar backgroundColor={'#00AEEF'} />
      <View style={styles.noData}>
        <Text style={styles.txtNoAds}>{props.title1}</Text>
        <Text style={styles.txtLbl2}>{props.title2}</Text>
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
    margin: 10,
  },
});
export default NoDataFind;
