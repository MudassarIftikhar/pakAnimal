import React, {useState} from 'react';
import {
  ImageBackground,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import StepIndicator from 'react-native-step-indicator';

const labels = ['Basic info', 'Animal info', 'Checkout'];
const customStyles = {
  stepIndicatorSize: 25,
  currentStepIndicatorSize: 30,
  separatorStrokeWidth: 1,
  currentStepStrokeWidth: 3,
  stepStrokeCurrentColor: 'gold',
  stepStrokeWidth: 2,
  stepStrokeFinishedColor: '#fe7013',
  stepStrokeUnFinishedColor: '#fff',
  separatorFinishedColor: 'gold',
  separatorUnFinishedColor: '#fff',
  stepIndicatorFinishedColor: '#fe7013',
  stepIndicatorUnFinishedColor: '#ffffff',
  stepIndicatorCurrentColor: 'gold',
  stepIndicatorLabelFontSize: 11,
  currentStepIndicatorLabelFontSize: 11,
  stepIndicatorLabelCurrentColor: '#000',
  stepIndicatorLabelFinishedColor: '#000',
  stepIndicatorLabelUnFinishedColor: '#000',
  labelColor: '#fff',
  labelSize: 11,
  currentStepLabelColor: 'gold',
};

const InfoTrack = props => {
  return (
    <View>
      <View style={styles.infoTrackMainDiv}>
        <StepIndicator
          stepCount={3}
          customStyles={customStyles}
          currentPosition={props.position}
          labels={labels}
        />
      </View>
      <View style={styles.outerDiv}>
        <Text style={styles.lable1}>{props.title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  infoTrackMainDiv: {
    height: 70,
    paddingTop: 20,
  },
  outerDiv: {
    height: 100,
    paddingTop: 20,
  },

  lable1: {
    fontSize: 32,
    fontWeight: '500',
    color: '#fff',
    textAlign: 'left',
    marginLeft: 20,
    marginTop: 10,
  },
});
export default InfoTrack;
