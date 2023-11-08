import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import IonIcons from 'react-native-vector-icons/Ionicons';
import Header from '../../../components/header';
const MyOrders = ({navigation}) => {
  return (
    <SafeAreaView>
      <Header title="My Orders" Navigation={navigation} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  btnShopNow: {
    backgroundColor: '#00AEEF',
    width: '100%',
    height: 40,
    borderRadius: 5,
    justifyContent: 'center',
    marginTop: 40,
  },
  btnTxt: {
    color: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    fontSize: 16,
    fontWeight: '500',
  },
  txtLbl: {
    fontWeight: '600',
    fontSize: 22,
    color: '#000',
  },
  txtLbl2: {
    fontWeight: '500',
    fontSize: 15,
    color: '#808080',
  },
});
export default MyOrders;
