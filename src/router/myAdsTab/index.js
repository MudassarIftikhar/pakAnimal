import React from 'react';
import {StyleSheet} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

import Pending from '../../screens/appScreens/myAds/pending';
import Remove from '../../screens/appScreens/myAds/remove';
import ActiveAds from '../../screens/appScreens/myAds/myAds';
const TopTab = ({navigation}) => {
  return (
    <Tab.Navigator
      initialRouteName="Active (0)"
      activeColor="#0000FF"
      inactiveColor="#000"
      barStyle={styles.tabBarStyle}
      screenOptions={{
        // labelStyle: {
        //   fontSize: 14,
        // },
        headerShown: false,
      }}>
      <Tab.Screen name="Active (0)" component={ActiveAds} options={{}} />
      <Tab.Screen name="Pending (0)" component={Pending} options={{}} />
      <Tab.Screen name="Removed (0)" component={Remove} options={{}} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  // tabBarStyle: {
  //   backgroundColor: '#694fad',
  //   fontSize: 46,
  // },
});
export default TopTab;
