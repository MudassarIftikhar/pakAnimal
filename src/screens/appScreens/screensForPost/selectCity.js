import React, {useEffect, useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {Modal} from 'react-native-paper';
import AntDesign from 'react-native-vector-icons/AntDesign';
const SelectCity = ({navigation}) => {
  const [data, setData] = useState([]);

  const getApiData = async () => {
    const url = 'http://10.0.2.2:3000/cities';
    let result = await fetch(url);
    result = await result.json();
    // console.log('City>>>>', result);
    setData(result);
  };

  useEffect(() => {
    getApiData();
  }, []);
  return (
    // <Modal visible={true} transparent={false} animationType="slide">
    <View style={styles.main}>
      <TouchableOpacity
        onPress={() => navigation.navigate('BasicInfo', {cCity: 'Faisalabad'})}>
        <Text style={styles.text1}>Select City</Text>
      </TouchableOpacity>
      <View style={styles.horizontolLine} />
      <View style={styles.searchBox}>
        <AntDesign name={'search1'} color={'#808080'} size={20} />
        <TextInput
          marginStart={10}
          fontSize={15}
          placeholder="Type to refine search"
        />
      </View>
      <ScrollView style={{marginTop: 10, marginBottom: 150}}>
        {/* <View style={}> */}
        {data.length > 0 ? (
          data.map((item, index) => (
            <TouchableOpacity
              style={styles.innerContainer}
              onPress={() =>
                navigation.navigate('BasicInfo', {cCity: 'Faisalabad'})
              }>
              <Text style={styles.item}>{item}</Text>
              <View style={styles.horizontolLine} />
            </TouchableOpacity>
          ))
        ) : (
          <Text style={{justifyContent: 'center', alignItems: 'center'}}>
            Network Error!
          </Text>
        )}
        {/* </View> */}
      </ScrollView>
    </View>
    // </Modal>
    //   style={styles.main}
    //   visible={true}
    //   transparent={false}
    //   animationType="slide">
    //   <View style={styles.modalView}>
    //     <Text>Select City</Text>
    //   </View>
    // </Modal>
    // </View>
  );
};

const styles = StyleSheet.create({
  main: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: '#fff',
    elevation: 7,
  },
  horizontolLine: {
    borderBottomColor: '#707070',
    borderBottomWidth: 1,
    margin: 10,
  },
  header: {
    backgroundColor: '#eee',
    borderRadius: 30,
    textAlign: 'right',
    alignSelf: 'flex-end',
    margin: 15,
    padding: 5,
  },
  text1: {
    fontSize: 18,
    color: '#000',
    fontWeight: '600',
    textAlign: 'left',
    margin: 10,
  },

  modalView: {
    elevation: 3,
    shadowColor: 'black',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    bottom: 0,
    backgroundColor: '#fff',
  },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#eee',
    margin: 20,
    height: 40,
    borderRadius: 5,
    paddingLeft: 15,
  },
  innerContainer: {
    marginBottom: 1,
    textAlign: 'center',
  },
  item: {
    fontSize: 16,
    marginStart: 10,
  },
});
export default SelectCity;
