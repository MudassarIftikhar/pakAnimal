import React, {useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import Header from '../../../components/header';
import SavedTab from '../../../router/savedTab';
import ProfileInfo from '../../../components/profileInfo';

const MyProfile = ({navigation}) => {
  useEffect(() => {
    navigation.getParent()?.setOptions({
      tabBarStyle: {
        display: 'none',
      },
    });
    return () => {
      navigation.getParent()?.setOptions({
        tabBarStyle: {
          display: 'flex',
        },
      });
    };
  }, []);

  return (
    <SafeAreaView backgroundColor={'#fff'} flex={1}>
      <View style={styles.headerBox}>
        <View style={styles.header}>
          <Header
            title="My Profile"
            CrossIcon={false}
            Navigation={navigation}
          />
        </View>
        <TouchableOpacity>
          <Text style={styles.headerText}>Done</Text>
        </TouchableOpacity>
      </View>
      <ProfileInfo />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  headerBox: {
    flexDirection: 'row',
    backgroundColor: '#b63439',
    alignItems: 'center',
    paddingEnd: 15,
  },
  header: {flex: 1},
  headerText: {color: '#fff'},
});
export default MyProfile;
