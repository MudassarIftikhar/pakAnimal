import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import Header from '../../../components/header';

const Saved = ({navigation}) => {
  const chatList = [
    {
      id: 1,
      name: 'zaid',
      msg: 'hello i am on the way',
      date: '10 sep 19',
    },
    {
      id: 2,
      name: 'zaid',
      msg: 'hello i am on the way',
      date: '10 sep 19',
    },
  ];
  return (
    <SafeAreaView>
      <StatusBar backgroundColor={'#b63439'} />
      <Header title="Saved" CrossIcon={false} Navigation={navigation} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  chatlist: {
    flexDirection: 'row',
    height: 70,
    margin: 10,
  },
  namenmsg: {
    marginLeft: 15,
    flex: 1,
  },
  nametext: {
    flex: 0.5,
    color: 'black',
    fontSize: 15,
    fontWeight: 'bold',
  },
  msgtext: {
    fontSize: 15,
  },
  threedoticon: {
    flex: 0.4,
  },
  datetext: {
    flex: 0.4,
    fontSize: 15,
  },
});
export default Saved;
