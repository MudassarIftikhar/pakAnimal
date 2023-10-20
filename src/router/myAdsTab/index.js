import React from 'react';
import {StyleSheet} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

import Pending from '../../screens/appScreens/myAds/pending';
import Remove from '../../screens/appScreens/myAds/remove';
import ActiveAds from '../../screens/appScreens/myAds/ActiveAds';
const MyAdsTab = ({navigation}) => {
  return (
    <Tab.Navigator
      initialRouteName="Active (0)"
      screenOptions={{
        tabBarActiveTintColor: '#b63439',
        tabBarInactiveTintColor: '#000',
        tabBarLabelStyle: {textTransform: 'capitalize', fontSize: 17},
        tabBarIndicatorStyle: {backgroundColor: '#b63439', height: 1},
        headerShown: true,
      }}>
      <Tab.Screen name="Active (0)" component={ActiveAds} options={{}} />
      <Tab.Screen name="Pending (0)" component={Pending} options={{}} />
      <Tab.Screen name="Removed (0)" component={Remove} options={{}} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({});
export default MyAdsTab;
