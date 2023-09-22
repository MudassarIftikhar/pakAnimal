import React from 'react';
import {} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SellNow from '../../screens/appScreens/sellNow';
import ChooseAPlan from '../../screens/appScreens/screensForPost/chooseAPlan';
import BasicInfo from '../../screens/appScreens/screensForPost/basicInfo';
import SelectCity from '../../screens/appScreens/screensForPost/selectCity';
import SellYourCar from '../../screens/appScreens/screensForPost/sellYourCar';
import AnimalInfo from '../../screens/appScreens/screensForPost/animalInfo';
import BookVisit from '../../screens/appScreens/screensForPost/bookVisit';
import CheckOut from '../../screens/appScreens/screensForPost/checkOut';
import CheckOutSecond from '../../screens/appScreens/screensForPost/checkOutSecond';

const Stack = createNativeStackNavigator();

const PostAdd = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Sell Now">
      <Stack.Screen name="Sell Now" component={SellNow} />
      <Stack.Screen name="ChooseAPlan" component={ChooseAPlan} />
      <Stack.Screen name="BasicInfo" component={BasicInfo} />
      <Stack.Screen name="SelectCity" component={SelectCity} />
      <Stack.Screen name="SellYourCar" component={SellYourCar} />
      <Stack.Screen name="Animalinfo" component={AnimalInfo} />
      <Stack.Screen name="BookVisit" component={BookVisit} />
      <Stack.Screen name="CheckOut" component={CheckOut} />
      <Stack.Screen name="CheckOutSecond" component={CheckOutSecond} />
    </Stack.Navigator>
  );
};

export default PostAdd;
