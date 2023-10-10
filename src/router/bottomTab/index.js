import React, {useState} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../../screens/appScreens/home';
import MyAdsTab from '../myAdsTab';
import Chat from '../../screens/appScreens/chat';
import MoreTab from '../moreTab';
import PostAdd from '../postAdd';
import SellNowModal from '../../components/sellNowModal';
const Tab = createBottomTabNavigator();
const BottomTab = ({navigation}) => {
  const [show, setShow] = useState('false');
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
              27,
              'Home',
              focused ? 'home' : 'ios-home-outline',
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
            tabbBarIconComponent(
              focused,
              color,
              29,
              'My Ads',
              focused ? 'bullhorn' : 'bullhorn-outline',
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
              25,
              'Chat',
              focused ? 'chatbox-ellipses' : 'chatbox-ellipses-outline',
              3,
            ),
        }}
      />
      <Tab.Screen
        name="MoreTab"
        component={MoreTab}
        options={{
          headerShown: true,
          title: '',
          tabBarIcon: ({focused, color}) =>
            tabBarIconComponent(
              focused,
              color,
              35,
              'More',
              focused ? 'reorder-three-sharp' : 'reorder-three-outline',
              -3,
            ),
        }}
      />
    </Tab.Navigator>
  );
};
const tabbBarIconComponent = (focused, color, size, title, iconName) => {
  return (
    <View style={styles().homeView}>
      <MaterialCommunityIcons
        name={iconName}
        color={color}
        size={size}
        style={styles().ionIconsStyle}
      />
      <Text style={styles(focused, color).iconText}>{title}</Text>
    </View>
  );
};
const tabBarIconComponent = (
  focused,
  color,
  size,
  title,
  iconName,
  topMargin,
) => {
  return (
    <View style={styles().homeView}>
      <Ionicons
        name={iconName}
        color={color}
        size={size}
        top={topMargin}
        style={styles().ionIconsStyle}
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
    ionIconsStyle: {height: 30, alignSelf: 'center'},
    iconText: {width: '100%', color: focused ? '#b63439' : color},
  });
export default BottomTab;
