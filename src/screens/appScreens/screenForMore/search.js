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

const Search = ({navigation}) => {
  return (
    <NoDataFind
      title1="No Searches Saved"
      title2="Tab the heart on a listing to save the Searches here."
      Button={true}
      screen="Ads"
    />
  );
};

const styles = StyleSheet.create({});
export default Search;
