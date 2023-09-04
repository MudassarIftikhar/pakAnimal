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
import Ionicons from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Octicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

import {NavigationContainer} from '@react-navigation/native';
import Home from '../../screens/appScreens/home';
import MyAds from '../../screens/appScreens/myAds/myAds';
import Chat from '../../screens/appScreens/chat';
import Pending from '../../screens/appScreens/myAds/pending';
import Remove from '../../screens/appScreens/myAds/remove';
// const Tab = createBottomTabNavigator();
const BottomTab = ({navigation}) => {
  return (
    <Tab.Navigator
      initialRouteName="Active (0)"
      activeColor="#0000FF"
      inactiveColor="#000"
      barStyle={{
        backgroundColor: '#694fad',
        paddingBottom: 48,
        fontSize: 16,
      }}
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

const styles = StyleSheet.create({});
export default BottomTab;
