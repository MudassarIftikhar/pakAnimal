import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import MultiSlider from '@ptomasroos/react-native-multi-slider';

const RangeSlider = () => {
  const [values, setValues] = useState([0, 'Any']);

  const onValuesChange = newValues => {
    setValues(newValues);
  };

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <TextInput
          style={styles.priceTextBox}
          value={values[0].toString()}
          textAlign="center"
          onChangeText={text => setValues(text)}
        />
        <Text style={styles.toText}>to</Text>
        <TextInput
          style={styles.priceTextBox}
          value={values[1].toString()}
          textAlign="center"
        />
      </View>
      <MultiSlider
        values={values}
        onValuesChange={onValuesChange}
        min={0}
        max={2000}
        step={50}
        allowOverlap={false}
        snapped
        selectedStyle={styles.sliderStyle}
        sliderLength={340}
        markerStyle={styles.markerStyle}
        trackStyle={styles.trackStyle} // Change track style
        unselectedStyle={styles.unselectedStyle}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  sliderStyle: {
    backgroundColor: '#b63439',
  },
  markerStyle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#b63439', // Change marker color
    borderWidth: 2, // Add border
    borderColor: 'white', // Border color
  },
  trackStyle: {
    height: 4, // Change track height
  },
  unselectedStyle: {
    backgroundColor: 'gray', // Change the unselected portion color
  },
  textContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
  },
  priceTextBox: {
    backgroundColor: '#eee',
    flex: 1,
    height: 35,
    borderRadius: 5,
    color: '#000',
    textAlign: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    fontSize: 17,
    textAlignVertical: 'center',
    paddingVertical: 0,
  },
  toText: {
    flex: 0.2,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: 18,
  },
});

export default RangeSlider;
