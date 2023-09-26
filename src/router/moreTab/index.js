import React from 'react';
import {StyleSheet} from 'react-native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import More from '../../screens/appScreens/more';
import Cart from '../../screens/appScreens/screenForMore/cart';
import MyOrders from '../../screens/appScreens/screenForMore/myOrder';
const Stack = createNativeStackNavigator();
const MoreTab = props => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="More">
      <Stack.Screen name="More" component={More} />
      {/* <Stack.Screen name="Cart" component={Cart} />
      <Stack.Screen name="MyOrders" component={MyOrders} /> */}
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({});
export default MoreTab;
