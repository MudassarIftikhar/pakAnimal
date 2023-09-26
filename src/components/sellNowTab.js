import React from 'react';

import {Image, StyleSheet, Text, View} from 'react-native';

const SellNowTab = props => {
  //   console.log(props);
  return (
    <View style={styles.homeView}>
      <Image
        style={styles.plusBtn}
        source={require('../assets/images/pluss.png')}
      />
      <Text style={styles.textTitle}>Sell Now</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  barView: {
    backgroundColor: '#694fad',
    paddingBottom: 48,
    fontSize: 16,
    activeColor: '#b63439',
  },
  homeView: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
  },
  plusBtn: {
    height: 40,
    width: 40,
    borderRadius: 20,
    resizeMode: 'center',
    top: -18,
    padding: 25,
  },
  textTitle: {
    width: '100%',
    color: '#000',
    top: -16,
  },
});
export default SellNowTab;
