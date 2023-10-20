import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import NoSavedAds from '../assets/SVGIcon/NoSavedAds.svg';
import NoActiveAds from '../assets/SVGIcon/NoActiveAds.svg';
const NoDataFind = props => {
  return (
    <SafeAreaView>
      <View style={styles.noData}>
        {props.screen === 'Ads' ? (
          <NoSavedAds height={200} width={220} />
        ) : (
          <NoActiveAds height={160} width={220} />
        )}
        <Text style={styles.txtNoAds}>{props.title1}</Text>
        <Text style={styles.txtLbl2}>{props.title2}</Text>
        {props.Button ? (
          <TouchableOpacity style={styles.btnExploring}>
            <Text style={styles.btnText}>Start Exploring</Text>
          </TouchableOpacity>
        ) : (
          ''
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  noData: {
    alignItems: 'center',

    backgroundColor: '#fff',
  },
  txtNoAds: {
    fontSize: 18,
    fontWeight: '700',
    color: '#000',
    marginTop: 15,
  },
  txtLbl2: {
    color: 'grey',
    marginTop: 5,
    fontSize: 16,
    margin: 10,
  },
  btnExploring: {
    backgroundColor: '#b63439',
    width: '90%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 30,
  },
  btnText: {
    color: '#FFF',
    fontSize: 16,
  },
});
export default NoDataFind;
