import React, {useEffect} from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import Header from '../../../components/header';
import SavedTab from '../../../router/savedTab';

const RecentActivity = ({navigation}) => {
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
      <Header
        title="Recent Activity"
        CrossIcon={false}
        Navigation={navigation}
      />
      <View style={{width: '100%', height: '100%'}}>
        <SavedTab tab1="Contacted" tab2="Seen" />
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
export default RecentActivity;
