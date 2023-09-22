import React from 'react';
import {StyleSheet} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Categories from '../../components/categories';
import BrowsCategory from '../../components/browsCategory';

const Tab = createMaterialTopTabNavigator();
// const Tab = createBottomTabNavigator();
const CategoryTab = ({navigation}) => {
  return (
    <Tab.Navigator
      initialRouteName="Category"
      activeColor="#0000FF"
      inactiveColor="#000"
      barStyle={styles.tabBarStyle}
      tabBarOptions={{
        labelStyle: {
          fontSize: 13,
          margin: 0,
          padding: 0,
        },
      }}
      screenOptions={{
        tabBarScrollEnabled: true,
        tabBarIndicatorStyle: {
          backgroundColor: '#b63439',
          height: 1,
        },
        swipeEnabled: false,
      }}
      sceneContainerStyle={{backgroundColor: 'white'}}>
      <Tab.Screen name="Category" component={Categories} options={{}} />
      <Tab.Screen name="Pet" component={BrowsCategory} options={{}} />
      <Tab.Screen name="Farm Animal" component={Categories} options={{}} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBarStyle: {
    backgroundColor: '#694fad',
    paddingBottom: 48,
    fontWeight: '600',
  },
});
export default CategoryTab;
