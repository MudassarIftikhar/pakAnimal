import React, {useState} from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import PagerView from 'react-native-pager-view';
import BrowsCategory from './browsCategory';
import BrowsCategory2 from './browsCategory2';
const screenWidth = Dimensions.get('window').width;
const Categories = props => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [categoryList, setCategoryList] = useState([1, 1, 1]);

  return (
    <View style={styles().centerAlign}>
      <PagerView
        style={styles().pagerView}
        initialPage={0}
        orientation="horizontal"
        scrollEnabled
        onPageSelected={e => {
          setCurrentIndex(e.nativeEvent.position);
        }}>
        <View key="1">
          <BrowsCategory navigation={props.navigation} />
        </View>
        {/* <View key="2">
          <BrowsCategory2 />
        </View>
        <View key="3">
          <BrowsCategory />
        </View> */}
      </PagerView>

      {/* <View style={styles().indicatorBox}>
        {categoryList.map((items, index) => {
          return <View style={styles(currentIndex, index).indicators}></View>;
        })}
      </View> */}
    </View>
  );
};
const screenHeight = Dimensions.get('window').height;
const styles = (currentIndex, index) =>
  StyleSheet.create({
    pagerView: {
      paddingStart: 200,
      paddingEnd: 200,
      flexWrap: 'wrap',
      flexGrow: 1,
      flex: 1,
    },
    centerAlign: {
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf: 'center',
    },
    indicatorBox: {
      flexDirection: 'row',
      position: 'absolute',
      bottom: 0,
      alignItems: 'center',
      justifyContent: 'center',
    },
    indicators: {
      height: currentIndex === index ? 10 : 8,
      width: currentIndex === index ? 16 : 8,
      borderRadius: 20,
      backgroundColor: currentIndex === index ? '#b63439' : '#d2d2d2',
      flexDirection: 'column',
      margin: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
export default Categories;
