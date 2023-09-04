import React, {useState} from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import IonIcons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
const MyOrders = ({navigation}) => {
  return (
    <SafeAreaView>
      <StatusBar backgroundColor={'#00AEEF'} />
      <View
        style={{height: 50, backgroundColor: '#00AEEF', alignItems: 'center'}}>
        <View
          style={{
            flexDirection: 'row',
            height: 40,
            width: '100%',
            alignSelf: 'flex-start',
            alignItems: 'center',
            right: 0,
            paddingTop: 5,
          }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <IonIcons name="chevron-back-sharp" size={30} color="#fff" />
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 20,
              color: '#fff',
              fontWeight: '600',
              marginStart: 20,
            }}>
            My Orders
          </Text>
        </View>
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
});
export default MyOrders;
