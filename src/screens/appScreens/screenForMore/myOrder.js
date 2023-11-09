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
import NoItemAddedtoCart from '../../../assets/SVGIcon/NoItemAddedtoCart.svg';

const MyOrders = ({navigation}) => {
  return (
    <SafeAreaView>
      <StatusBar backgroundColor={'#b63439'} />
      <Header title="My Orders" Navigation={navigation} />
      <View style={styles.noItemBox}>
        <NoItemAddedtoCart height={100} width={320} />
        <Text style={styles.txtLbl}>No Item added to order</Text>
        <Text style={styles.txtLbl2}>Looking for Products?</Text>
        <TouchableOpacity style={styles.btnShopNow}>
          <Text style={styles.btnTxt}>Shop Now</Text>
        </TouchableOpacity>
      </View>
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
  noItemBox: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    flexDirection: 'column',
    width: '100%',
    paddingStart: 20,
    paddingEnd: 20,
    marginTop: 160,
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
  btnShopNow: {
    backgroundColor: '#b63439',
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
});
export default MyOrders;
