/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {} from 'react-native';
import Login from '../screens/login';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignUp from '../screens/signup';
import EmailLogin from '../screens/emailLogin';
import BottomTab from './bottomTab';
import PostAdd from './postAdd';
import SellYourCar from '../screens/appScreens/screensForPost/sellYourCar';
import PostViewScreen from '../screens/appScreens/screensForPost/postViewScreen';
import BrowsCategory from '../components/browsCategory';
import BrowsCategory2 from '../components/browsCategory2';
import Inbox from '../components/inboxScreen';
import BrowsePost from '../screens/browsePost';
import PostBrowsTab from './postBrowsTab';

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="HomeActivity">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={SignUp} />
        <Stack.Screen name="EmailLogin" component={EmailLogin} />
        <Stack.Screen name="HomeActivity" component={BottomTab} />
        <Stack.Screen name="PostAdd" component={PostAdd} />
        <Stack.Screen name="SellYourCar" component={SellYourCar} />
        <Stack.Screen name="PostViewScreen" component={PostViewScreen} />
        <Stack.Screen name="Inbox" component={Inbox} />
        <Stack.Screen name="PostBrowseTab" component={PostBrowsTab} />
      </Stack.Navigator>
    </NavigationContainer>
    // <ChooseAPlan />
  );
};

export default Router;
