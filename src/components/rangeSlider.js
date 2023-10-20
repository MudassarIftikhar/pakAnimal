import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import MultiSlider from '@ptomasroos/react-native-multi-slider';

const RangeSlider = () => {
  const [values, setValues] = useState([20, 80]);

  const onValuesChange = newValues => {
    setValues(newValues);
  };

  return (
    <View style={styles.container}>
      <Text>
        Selected Range: {values[0]} - {values[1]}
      </Text>
      <MultiSlider
        values={values}
        onValuesChange={onValuesChange}
        min={0}
        max={100}
        step={1}
        allowOverlap={false}
        snapped
        selectedStyle={styles.sliderStyle}
        sliderLength={300}
        markerStyle={styles.markerStyle}
        trackStyle={styles.trackStyle} // Change track style
        unselectedStyle={styles.unselectedStyle}
      />
      <Text>
        Selected Range: {values[0]} - {values[1]}
      </Text>
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
});

export default RangeSlider;
