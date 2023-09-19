import React, {useState} from 'react';
import {
  BackHandler,
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import IonIcons from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import ImagePicker from 'react-native-image-crop-picker';

const AddImagePicker = () => {
  const [seImages, setImages] = useState([]);

  const pickMultiple = () => {
    ImagePicker.openPicker({
      multiple: true,
      waitAnimationEnd: false,
      sortOrder: 'desc',
      includeExif: true,
      forceJpg: true,
    })
      .then(images => {
        if (images) {
          setImages(images);
        }
      })
      .catch(e => alert(e));
  };

  return (
    <View>
      {seImages.length ? (
        <View>
          <ScrollView horizontal={true}>
            <FlatList
              horizontal
              pagingEnabled={true}
              showsHorizontalScrollIndicator={false}
              data={seImages}
              keyExtractor={item => item.path}
              renderItem={({item}) => (
                // <View style={{flexDirection: 'column', margin: 5}}>
                <Image
                  source={{uri: item.path}}
                  style={{width: 100, height: 100, margin: 5}}
                />
                // </View>
              )}
            />
          </ScrollView>

          <Text
            style={{
              alignItems: 'center',
              textAlign: 'center',
              marginTop: 5,
            }}>
            {seImages.length} Photo
          </Text>
          <TouchableOpacity
            style={styles.imgSecondDiv}
            onPress={() => {
              pickMultiple();
            }}>
            <SimpleLineIcons name={'camera'} size={20} color={'#fff'} />
            <Text style={styles.lable2}>Add more Photos</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <TouchableOpacity
          style={styles.imgMainDiv}
          onPress={() => {
            pickMultiple();
          }}>
          <SimpleLineIcons name={'camera'} size={30} color={'#707070'} />
          <Text style={styles.lable1}>Add Photo</Text>
        </TouchableOpacity>
      )}

      <Text style={styles.headingLbl}>
        Tap on images to edit them. To reorder,select the image,hold and drag.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  imgMainDiv: {
    borderColor: '#00AEEF',
    borderStyle: 'dashed',
    borderWidth: 2,
    backgroundColor: '#fff',
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    height: 150,
  },
  imgSecondDiv: {
    backgroundColor: '#b63439',
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    flexDirection: 'row',
    marginTop: 10,
  },
  headerTitle: {
    fontSize: 20,
    color: '#fff',
    fontWeight: '600',
    marginStart: 40,
    flex: 1,
  },
  headingLbl: {
    color: '#707070',
    fontSize: 14,
    marginLeft: 10,
    marginRight: 15,
  },
  lable1: {
    fontSize: 12,
    fontWeight: '500',
  },
  lable2: {
    fontSize: 12,
    fontWeight: '500',
    color: '#fff',
    marginStart: 5,
  },
});
export default AddImagePicker;
