import React from 'react';
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
import PostAdd from '../postAdd';
const Tab = createBottomTabNavigator();
const BottomTab = ({navigation}) => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#b63439"
      inactiveColor="#000"
      barStyle={styles.barView}
      tabBarOptions={{
        labelStyle: {
          fontSize: 14,
          margin: 0,
          padding: 0,
        },
      }}
      screenOptions={{
        headerStyle: {
          backgroundColor: '#b63439',
          height: 50,
        },
        headerTitleStyle: {
          fontWeight: 'bold',
          color: '#fff',
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
            <View style={styles.homeView}>
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
              style={styles.plusBtn}
              source={require('../../assets/images/pluss.png')}
            />
          ),
        }}
        name="PostAdd"
        component={PostAdd}
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

const styles = StyleSheet.create({
  barView: {
    backgroundColor: '#694fad',
    paddingBottom: 48,
    fontSize: 16,
    activeColor: '#b63439',
  },
  homeView: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
  },
  plusBtn: {
    height: 50,
    width: 50,
    top: -10,
  },
});
export default BottomTab;
