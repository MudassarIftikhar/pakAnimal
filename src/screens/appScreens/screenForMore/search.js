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
    <View style={styles.mainview}>
      <NoDataFind
        title1="No Searches Saved"
        title2="Tab the heart on a listing to save the Searches here."
        Button={true}
        screen="searches"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainview: {},
});
export default Search;
