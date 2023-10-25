import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Cross from 'react-native-vector-icons/Feather';

const SelectedTags = props => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapView}>
        <Text style={styles.lblText}>{props.Lable}</Text>

        <Cross name="x" size={20} color="#b63439" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  lblText: {
    color: '#b63439',
    alignItems: 'center',
    textAlignVertical: 'center',
  },
  wrapView: {
    // Set alignSelf to "flex-start" to allow the view to wrap its content
    alignSelf: 'flex-start',
    padding: 8,
    backgroundColor: '#F4C0B5',
    borderColor: '#b63439',
    borderWidth: 1,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default SelectedTags;
