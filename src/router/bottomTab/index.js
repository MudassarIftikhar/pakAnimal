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
        tabBarActiveTintColor: '#b63439',
        labelStyle: {
          fontSize: 14,
          margin: 0,
          padding: 0,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          title: '',
          tabBarIcon: ({focused, color, size}) => (
            <View style={styles.homeView}>
              <Ionicons
                name={focused ? 'home' : 'ios-home-outline'}
                color={color}
                size={26}
              />
              <Text style={{width: '100%', color: focused ? '#b63439' : color}}>
                Home
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="MyAds"
        component={MyAdsTab}
        options={{
          title: '',
          tabBarIcon: ({focused, color}) => (
            <View style={styles.homeView}>
              <MaterialCommunityIcons
                name={focused ? 'bullhorn' : 'bullhorn-outline'}
                color={color}
                size={28}
              />
              <Text style={{width: '100%', color: focused ? '#b63439' : color}}>
                My Ads
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarStyle: {display: 'none'},
          title: '',
          tabBarIcon: ({focused, color}) => (
            <View style={styles.homeView}>
              <Image
                style={styles.plusBtn}
                source={require('../../assets/images/pluss.png')}
              />
              <Text
                style={{
                  width: '100%',
                  color: focused ? '#b63439' : color,
                  top: -21,
                }}>
                Sell Now
              </Text>
            </View>
          ),
        }}
        name="PostAdd"
        component={PostAdd}
      />
      <Tab.Screen
        name="Chat"
        component={Chat}
        options={{
          title: '',
          tabBarIcon: ({focused, color}) => (
            <View style={styles.homeView}>
              <Ionicons
                name={focused ? 'chatbox' : 'ios-chatbox-ellipses'}
                color={color}
                size={28}
              />
              <Text style={{width: '100%', color: focused ? '#b63439' : color}}>
                Chat
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="More"
        component={MoreTab}
        options={{
          headerShown: false,
          title: '',
          tabBarIcon: ({focused, color}) => (
            <View style={styles.homeView}>
              <Octicons name="three-bars" color={color} size={28} />
              <Text style={{width: '100%', color: focused ? '#b63439' : color}}>
                More
              </Text>
            </View>
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
    height: 40,
    width: 40,
    borderRadius: 20,
    resizeMode: 'center',
    top: -25,
    padding: 25,
  },
});
export default BottomTab;
