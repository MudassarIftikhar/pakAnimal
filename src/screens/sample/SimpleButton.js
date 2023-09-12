import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import _ from 'lodash';
import {SelectMultipleButton} from 'react-native-selectmultiple-button';
import AnimalInfo from '../appScreens/screensForPost/animalInfo';

const ios_blue = '#00AEEF';
const multipleData = ['Goat', 'Cow', 'Perrot', 'Cat', 'Dog'];

export default class SimpleButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      multipleSelectedData: [],
      multipleSelectedDataLimited: [],
    };
  }

  render() {
    return (
      <View>
        <Text style={styles.selectedText}>
          I like {_.join(this.state.multipleSelectedData, ', ')}
        </Text>
        <View style={styles.multiBtncontainer}>
          {multipleData.map(interest => (
            <SelectMultipleButton
              key={interest}
              buttonViewStyle={styles.multiBtnView}
              textStyle={styles.multiBtnText}
              highLightStyle={styles.multiBtnHighLight}
              value={interest}
              selected={this.state.multipleSelectedData.includes(interest)}
              singleTap={valueTap => {
                this._singleTapMultipleSelectedButtons(interest);
                <AnimalInfo />;
              }}
            />
          ))}
        </View>
      </View>
    );
  }

  _singleTapMultipleSelectedButtons(interest) {
    if (this.state.multipleSelectedData.includes(interest)) {
      _.remove(this.state.multipleSelectedData, ele => {
        return ele === interest;
      });
    } else {
      this.state.multipleSelectedData.push(interest);
    }

    this.setState({
      multipleSelectedData: this.state.multipleSelectedData,
    });
  }
}

const styles = StyleSheet.create({
  welcome: {
    margin: 10,
    marginTop: 30,
    color: 'gray',
  },
  multiBtncontainer: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  multiBtnView: {
    borderRadius: 10,
    height: 40,
  },
  multiBtnText: {
    fontSize: 15,
  },
  multiBtnHighLight: {
    borderColor: 'gray',
    backgroundColor: 'transparent',
    textColor: 'gray',
    borderTintColor: ios_blue,
    backgroundTintColor: ios_blue,
    textTintColor: 'white',
  },
  selectedText: {color: ios_blue, marginLeft: 10},
});
