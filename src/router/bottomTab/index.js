import React, {useState} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../../screens/appScreens/home';
import MyAdsTab from '../myAdsTab';
import Chat from '../../screens/appScreens/chat';
import MoreTab from '../moreTab';
import PostAdd from '../postAdd';
import SellNowTab from '../../components/sellNowTab';
const Tab = createBottomTabNavigator();
const BottomTab = ({navigation}) => {
  const [show, setShow] = useState('false');

  const myAdsOutline = require('../../assets/images/MyAdsOutline.png'); //My Ads Outline-01-01
  const myAdsFill = require('../../assets/images/MyAdsFill.png');

  const homeFill = require('../../assets/images/HomeFill.png');
  const homeOutline = require('../../assets/images/HomeOutline.png');

  const chatFill = require('../../assets/images/ChatFill.png');
  const chatOutline = require('../../assets/images/ChatOutline.png');

  const moreFill = require('../../assets/images/MoreFill.png');
  const moreOutline = require('../../assets/images/MoreOutline.png');
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#b63439"
      inactiveColor="#000"
      barStyle={styles.barView}
      screenOptions={{
        headerStyle: {
          backgroundColor: '#b63439',
          height: 25,
        },
        headerTitleStyle: {
          fontWeight: 'bold',
          color: '#fff',
        },
        headerTitleAlign: 'center',
        tabBarActiveTintColor: '#b63439',
        tabBarInactiveTintColor: '#000',
        labelStyle: {
          fontSize: 14,
          margin: 0,
          padding: 0,
        },
        tabBarStyle: {height: 60, paddingTop: 3},
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          title: '',
          tabBarIcon: ({focused, color, size}) =>
            tabBarIconComponent(
              focused,
              color,
              40,
              40,
              'Home',
              focused ? homeFill : homeOutline,
              0,
            ),
        }}
      />
      <Tab.Screen
        name="MyAds"
        component={MyAdsTab}
        options={{
          title: '',
          tabBarIcon: ({focused, color, size}) =>
            tabBarIconComponent(
              focused,
              color,
              40,
              40,
              'My Ads',
              focused ? myAdsFill : myAdsOutline,
              0,
            ),
        }}
      />
      <Tab.Screen
        options={{
          presentation: 'modal',
          headerShown: false,
          tabBarStyle: {display: 'none'},
          title: '',
          tabBarIcon: tabBarPlusBtn,
        }}
        name="PostAdd" //"PostAdd"
        component={PostAdd}
        // eslint-disable-next-line no-shadow
        // listeners={({navigation}) => ({
        //   tabPress: e => {
        //     e.preventDefault(); // Prevents navigation
        //     setShow(!show);
        //     // Use navigation.navigate to navigate to the Home screen with the modal prop
        //     navigation.navigate('Home', {customProp: {show}});
        //   },
        // })}
      />
      {/* {() => null} */}
      {/* </Tab.Screen> */}

      <Tab.Screen
        name="Chat"
        component={Chat}
        options={{
          title: '',
          tabBarIcon: ({focused, color, size}) =>
            tabBarIconComponent(
              focused,
              color,
              40,
              40,
              'Chat',
              focused ? chatFill : chatOutline,
              3,
            ),
        }}
      />
      <Tab.Screen
        name="MoreTab"
        component={BrowsePost}
        options={{
          headerShown: true,
          title: '',
          tabBarIcon: ({focused, color}) =>
            tabBarIconComponent(
              focused,
              color,
              40,
              40,
              'More',
              focused ? moreFill : moreOutline,
              5,
            ),
        }}
      />
    </Tab.Navigator>
  );
};

const tabBarIconComponent = (
  focused,
  color,
  width,
  height,
  title,
  iconName,
  topMargin,
) => {
  return (
    <View style={styles().homeView}>
      <Image
        style={styles().ionIconsStyle}
        source={iconName}
        width={width}
        height={height}
        resizeMode="center"
      />
      <Text style={styles(focused, color).iconText}>{title}</Text>
    </View>
  );
};
const tabBarPlusBtn = () => {
  return (
    <View style={styles().homeView}>
      <Image
        style={styles().plusBtn}
        source={require('../../assets/images/pluss.png')}
      />
      <Text style={styles().textTitle}>Sell Now</Text>
    </View>
  );
};
const styles = (focused, color) =>
  StyleSheet.create({
    barView: {
      backgroundColor: '#694fad',
      paddingBottom: 48,
      fontSize: 16,
    },
    homeView: {
      alignItems: 'center',
      flexDirection: 'column',
      flex: 1,
      marginTop: 2,
    },
    plusBtn: {
      height: 40,
      width: 40,
      borderRadius: 20,
      resizeMode: 'center',
      top: -18,
      padding: 25,
    },
    textTitle: {
      width: '100%',
      color: '#000',
      top: -16,
    },
    ionIconsStyle: {
      height: 30,
      width: 30,
      alignSelf: 'center',
      resizeMode: 'center',
    },
    iconText: {width: '100%', color: focused ? '#b63439' : color},
  });
export default BottomTab;
