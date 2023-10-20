import React, {useEffect} from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import Header from '../../../components/header';
import SavedTab from '../../../router/savedTab';

const Saved = ({navigation}) => {
  useEffect(() => {
    navigation.getParent()?.setOptions({
      tabBarStyle: {
        display: 'none',
      },
    });
    return () => {
      navigation.getParent()?.setOptions({
        tabBarStyle: {
          display: 'flex',
        },
      });
    };
  }, []);

  return (
    <SafeAreaView>
      <Header title="Saved" CrossIcon={false} Navigation={navigation} />
      <View style={{width: '100%', height: '100%'}}>
        <SavedTab />
      </View>
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
