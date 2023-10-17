import React from 'react';
import {StyleSheet, View} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Categories from '../../components/categories';
import BrowsCategory from '../../components/browsCategory';

const Tab = createMaterialTopTabNavigator();
// const Tab = createBottomTabNavigator();
const CategoryTab = props => {
  // console.log('Category Tab>>>>>', props);
  return (
    <Tab.Navigator
      initialRouteName="Category"
      activeColor="#0000FF"
      inactiveColor="#000"
      barStyle={styles.tabBarStyle}
      tabBarOptions={{
        labelStyle: {
          fontSize: 18,
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
        tabBarItemStyle: {alignItems: 'flex-start', marginStart: 7},
        swipeEnabled: false,
      }}
      sceneContainerStyle={{backgroundColor: '#eee'}}>
      <Tab.Screen
        name="Category"
        component={() => <BrowsCategory />}
        options={{}}
      />
      {/* <Tab.Screen name="Pet" component={BrowsCategory} options={{}} />
      <Tab.Screen name="Farm Animal" component={Categories} options={{}} /> */}
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBarStyle: {
    backgroundColor: '#694fad',
    paddingBottom: 48,
    fontWeight: '600',
    textAlign: 'left',
  },
  centeredContent: {
    alignSelf: 'center',
    justifyContent: 'center',
  },
});

export default CategoryTab;
