import React from 'react';
import {StyleSheet} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Search from '../../screens/appScreens/screenForMore/search';
import Ads from '../../screens/appScreens/screenForMore/Ads';
import Saved from '../../screens/appScreens/screenForMore/saved';

const Tab = createMaterialTopTabNavigator();

const SavedTab = ({navigation}) => {
  return (
    <Tab.Navigator
      initialRouteName="Search"
      screenOptions={{
        tabBarActiveTintColor: '#b63439',
        tabBarInactiveTintColor: '#000',
        tabBarLabelStyle: {textTransform: 'capitalize', fontSize: 17},
        tabBarIndicatorStyle: {backgroundColor: '#b63439', height: 1},
        headerShown: true,
      }}>
      <Tab.Screen name="Searches" component={Search} options={{}} />
      <Tab.Screen name="Ads" component={Ads} options={{}} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({});
export default SavedTab;
