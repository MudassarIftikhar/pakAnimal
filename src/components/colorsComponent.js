import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Image,
} from 'react-native';
import Cross from 'react-native-vector-icons/Feather';

const ColorsComponent = props => {
  const colorsList = [
    {
      imag: require('../assets/images/silver.png'),
      name: 'White',
    },
    {
      imag: require('../assets/images/black.png'),
      name: 'Black',
    },
    {
      imag: require('../assets/images/grey.png'),
      name: 'Gray',
    },
    {
      imag: require('../assets/images/blue.png'),
      name: 'Blue',
    },
    {
      imag: require('../assets/images/green.png'),
      name: 'Green',
    },
    {
      imag: require('../assets/images/red.png'),
      name: 'Red',
    },
    {
      imag: require('../assets/images/gold.png'),
      name: 'Golden',
    },
    {
      imag: require('../assets/images/maroon.png'),
      name: 'Cream',
    },
    {
      imag: require('../assets/images/brown.png'),
      name: 'Brown',
    },

    {
      imag: require('../assets/images/orange.png'),
      name: 'Orange',
    },
  ];
  const [checked, setChecked] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);

  //   const handleColorPress = index => {
  //     setSelectedIndex(index);
  //   };
  const [selectedIndices, setSelectedIndices] = useState([]);

  const handleColorPress = index => {
    // Check if the index is already selected
    if (selectedIndices.includes(index)) {
      // If selected, remove it from the selectedIndices array
      setSelectedIndices(selectedIndices.filter(item => item !== index));
    } else {
      // If not selected, add it to the selectedIndices array
      setSelectedIndices([...selectedIndices, index]);
    }
  };
  return (
    <FlatList
      showsHorizontalScrollIndicator={false}
      data={colorsList}
      horizontal={true}
      renderItem={({item, index}) => (
        <TouchableOpacity
          style={styles().colornname}
          onPress={() => handleColorPress(index)}>
          <View style={styles().colorandnameview}>
            <Image
              source={item.imag}
              style={styles(selectedIndices.includes(index)).colorimage}
            />
            <Text style={styles().namesofcolors}>{item.name}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

const styles = checked =>
  StyleSheet.create({
    colorimage: {
      width: 45,
      height: 45,
      borderRadius: 30,
      marginLeft: 22,

      borderWidth: checked ? 2 : 0,
      borderColor: checked ? '#b63439' : '',
    },
    colorandnameview: {
      alignItems: 'center',
    },
    namesofcolors: {
      alignItems: 'center',
      marginLeft: 20,
      fontSize: 12,
    },
    colornname: {
      // Add other styles for the color item
    },
  });
export default ColorsComponent;
