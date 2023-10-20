import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import NoDataFind from '../../../components/noDataText';
const Ads = ({navigation}) => {
  return (
    <View style={styles.container}>
      <NoDataFind
        title1="No Saved Ads"
        title2="Tab the heart on a listing to save the ad here."
        Button={true}
        screen="Ads"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    top: -120,
  },
});

export default Ads;
