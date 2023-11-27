import React, {useEffect, useRef} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';

export const FilterBottomSheet = ({route}) => {
  // console.log('Props success', route);
  const refRBSheet = useRef();
  // const handleBottomSheet = () => {
  //   route.params.type === 'price' ? refRBSheet.current.open() : '';

  // };
  useEffect(() => {
    refRBSheet.current.open();
  }, []);
  return (
    <View>
      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        customStyles={{
          // wrapper: {
          //   backgroundColor: "transparent"
          // },
          draggableIcon: {
            backgroundColor: 'white',
          },
        }}>
        <View style={styles.RangePickerContainer}>
          <View style={styles.priceContainer}>
            <View style={styles.iconBack}>
              <PriceSvg height={30} width={240} />
            </View>
            <Text style={styles.textPrice}>Price Range (PKR)</Text>
          </View>
          <RangeSlider />

          <TouchableOpacity style={styles.appButton2Container}>
            <Text style={styles.appButton2Text}>Apply Filters</Text>
          </TouchableOpacity>
        </View>
      </RBSheet>
    </View>
  );
};
const styles = StyleSheet.create({
  RangePickerContainer: {
    flexDirection: 'column',
    marginHorizontal: 10,
    paddingVertical: 20,
    flex: 0.8,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconBack: {
    backgroundColor: '#eee',
    borderRadius: 20,
    height: 40,
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textPrice: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
    paddingStart: 13,
  },
  appButton2Container: {
    backgroundColor: '#b63439',
    height: 40,
    width: 210,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 20,
  },
  appButton2Text: {
    color: 'white',
  },
});
