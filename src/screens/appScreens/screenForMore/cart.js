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
import Feather from 'react-native-vector-icons/Feather';
const Cart = ({navigation}) => {
  return (
    <SafeAreaView>
      <StatusBar backgroundColor={'#b63439'} />
      <View style={styles.header}>
        <View style={styles.headerBox}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <IonIcons name="chevron-back-sharp" size={30} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.headerTxt}>Cart (0)</Text>
        </View>
      </View>

      <View style={styles.noItemBox}>
        <Feather name="shopping-cart" size={100} color="#909090" />
        <Text style={styles.txtLbl}>No Item added to cart</Text>
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
  header: {height: 50, backgroundColor: '#b63439', alignItems: 'center'},
  headerBox: {
    flexDirection: 'row',
    height: 40,
    width: '100%',
    alignSelf: 'flex-start',
    alignItems: 'center',
    right: 0,
    paddingTop: 5,
  },
  headerTxt: {
    fontSize: 20,
    color: '#fff',
    fontWeight: '600',
    marginStart: 20,
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
});
export default Cart;
