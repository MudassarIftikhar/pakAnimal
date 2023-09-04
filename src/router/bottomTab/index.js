import React, {useState} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Octicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../../screens/appScreens/home';
import MyAdsTab from '../myAdsTab';
import Chat from '../../screens/appScreens/chat';
import SellNow from '../../screens/appScreens/sellNow';
import MoreTab from '../moreTab';
const Tab = createBottomTabNavigator();
const BottomTab = ({navigation}) => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
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
      }}
      screenOptions={{
        headerStyle: {
          backgroundColor: '#00AEEF',
          height: 50,
        },
        headerTintColor: 'white',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerTitleAlign: 'center',
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          title: '',
          tabBarIcon: ({color}) => (
            <View
              style={{
                flex: 1,
                alignItems: 'center',
                flexDirection: 'column',
              }}>
              <Ionicons name="ios-home-outline" color={color} size={26} />
              <Text width={'100%'}>Home</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="MyAds"
        component={MyAdsTab}
        options={{
          title: 'My Ads',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons
              name="bullhorn-outline"
              color={color}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarStyle: {display: 'none'},
          tabBarIcon: ({focused}) => (
            <Image
              style={{height: 50, width: 50, top: -10}}
              source={require('../../assets/images/plus.png')}
            />
          ),
        }}
        name="Sell Now"
        component={SellNow}
      />
      <Tab.Screen
        name="Chat"
        component={Chat}
        options={{
          tabBarIcon: ({color}) => (
            <Ionicons name="ios-chatbox-ellipses" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="More"
        component={MoreTab}
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => (
            <Octicons name="three-bars" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({});
export default BottomTab;
