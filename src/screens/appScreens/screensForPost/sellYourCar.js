import React from 'react';
import {
  BackHandler,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';

import Header from '../../../components/header';
import {useFocusEffect} from '@react-navigation/native';
import AddImagePicker from '../../../components/addImagePicker';
import BreedingPostInfo from '../../../components/breedingPostInfo';

const SellYourCar = props => {
  // console.log('SellType>>>>', props);
  const type = props.route.params?.type ?? 'other';
  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        this.props.navigation.goBack();
        return true;
      };

      // Add Event Listener for hardwareBackPress
      BackHandler.addEventListener('hardwareBackPress', onBackPress);

      return () => {
        // Once the Screen gets blur Remove Event Listener
        BackHandler.removeEventListener('hardwareBackPress', onBackPress);
      };
    }, []),
  );

  return (
    <SafeAreaView backgroundColor={'#fff'} flex={1}>
      <StatusBar backgroundColor={'#b63439'} />
      <View style={styles.headerBox}>
        <Header
          style
          title={`Sell your ${type}`}
          CrossIcon={false}
          Navigation={props.navigation}
        />
      </View>
      <ScrollView>
        <AddImagePicker />
        <BreedingPostInfo type={type} Navigation={props.navigation} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  headerBox: {
    backgroundColor: '#b63439',
  },

  lable1: {
    fontSize: 12,
    fontWeight: '500',
  },
});
export default SellYourCar;
