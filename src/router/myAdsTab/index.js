import React from 'react';
import {StyleSheet} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

import MyAds from '../../screens/appScreens/myAds/myAds';
import Pending from '../../screens/appScreens/myAds/pending';
import Remove from '../../screens/appScreens/myAds/remove';
const BottomTab = ({navigation}) => {
  return (
    <Tab.Navigator
      initialRouteName="Active (0)"
      activeColor="#0000FF"
      inactiveColor="#000"
      barStyle={styles.tabBarStyle}
      tabBarOptions={{
        labelStyle: {
          fontSize: 14,
          margin: 0,
          padding: 0,
        },
      }}>
      <Tab.Screen name="Active (0)" component={MyAds} options={{}} />
      <Tab.Screen name="Pending (0)" component={Pending} options={{}} />
      <Tab.Screen name="Removed (0)" component={Remove} options={{}} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBarStyle: {
    backgroundColor: '#694fad',
    paddingBottom: 48,
    fontSize: 16,
  },
});
export default BottomTab;
