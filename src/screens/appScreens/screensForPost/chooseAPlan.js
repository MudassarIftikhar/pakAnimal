import React from 'react';
import {
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Header from '../../../components/header';
import AdFarmAnimal from '../../../assets/SVGIcon/AdFarmAnimal.svg';
import FarmAnimalBreed from '../../../assets/SVGIcon/FarmAnimalBreeding.svg';
import PetBreeding from '../../../assets/SVGIcon/PetBreeding.svg';
import PetAdd from '../../../assets/SVGIcon/PetAd.svg';
const screenHeight = Dimensions.get('window').height;
const ChooseAPlan = props => {
  console.log('Type>>>>', props.route.params.type);
  const type = props.route.params.type;
  return (
    <SafeAreaView>
      <StatusBar backgroundColor={'#b63439'} />

      <View
        style={{
          backgroundColor: '#b63439',
        }}>
        <Header
          title="Choose a Plan"
          CrossIcon={false}
          Navigation={props.navigation}
        />
      </View>
      {type === 'Pet' ? (
        <ScrollView>
          <View marginBottom={screenHeight * 0.1}>
            <Text style={styles.mainHeading}>
              How are you looking to list your pet?
            </Text>
            <TouchableOpacity
              onPress={() =>
                props.navigation.navigate('SellYourCar', {type: 'Pet Animal'})
              }
              style={styles.postContainer}>
              <View flex={1}>
                <Text style={styles.postHeading}>Sell Your Pet!</Text>
                <Text style={styles.postDiscription} numberOfLines={2}>
                  Connect with Caring Pet Owners and Verified Buyers
                </Text>
                <Text style={styles.postTxtlbl}>
                  I want expert to sell my animal
                </Text>
              </View>
              <PetAdd style={styles.postImage} />
            </TouchableOpacity>
            {/* Card 2 */}

            <TouchableOpacity
              onPress={() =>
                props.navigation.navigate('SellYourCar', {
                  type: 'Pet Breed Animal',
                })
              }
              style={styles.postContainer}>
              <View flex={1}>
                <Text style={styles.postHeading}>Post Ad for Breeding!</Text>
                <Text style={styles.postDiscription} numberOfLines={2}>
                  Secure and Trustworthy Breeding with a Perfect Match
                </Text>
                <Text style={styles.postTxtlbl}>
                  I want expert to sell my animal
                </Text>
              </View>
              <PetBreeding style={styles.postImage} />
            </TouchableOpacity>
          </View>
        </ScrollView>
      ) : (
        <ScrollView>
          <View paddingBottom={screenHeight * 0.1}>
            {/* 2nd Type */}

            <Text style={styles.mainHeading}>
              How are you looking to list your farm animal?
            </Text>
            {/* 3rd card */}

            <TouchableOpacity
              onPress={() =>
                props.navigation.navigate('SellYourCar', {type: 'Farm Animal'})
              }
              style={styles.postContainer}>
              <View flex={1}>
                <Text style={styles.postHeading}>Sell Your Farm Animal!</Text>
                <Text style={styles.postDiscription} numberOfLines={2}>
                  Connect with Caring Farm Animal Owners and Verified Buyers
                </Text>
                <Text style={styles.postTxtlbl}>
                  I want expert to sell my animal
                </Text>
              </View>
              <AdFarmAnimal style={styles.postImage} />
            </TouchableOpacity>
            {/* Card 4 */}

            <TouchableOpacity
              onPress={() =>
                props.navigation.navigate('SellYourCar', {
                  type: 'Farm Breed Animal',
                })
              }
              style={styles.postContainer}>
              <View flex={1}>
                <Text style={styles.postHeading}>Post Ad for Breeding!</Text>
                <Text style={styles.postDiscription} numberOfLines={2}>
                  Secure and Trustworthy Breeding with a Perfect Match
                </Text>
                <Text style={styles.postTxtlbl}>
                  I want expert to sell my animal
                </Text>
              </View>
              <FarmAnimalBreed style={styles.postImage} />
            </TouchableOpacity>
          </View>
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainHeading: {
    fontSize: 36,
    fontWeight: '600',
    margin: 30,
    color: '#0047AB',
  },
  postContainer: {
    margin: 20,
    elevation: 5,
    borderRadius: 20,
    backgroundColor: '#fff',
    paddingLeft: 10,
    padding: 10,
    flexDirection: 'row',
  },
  postHeading: {
    fontSize: 20,
    fontWeight: '600',
    margin: 8,
    color: '#0000FF',
    width: '96%',
  },
  postDiscription: {
    fontSize: 16,
    marginLeft: 10,
    color: '#000',
  },
  postTxtlbl: {
    fontSize: 16,
    margin: 10,
    color: '#0000FF',
  },
  postImage: {
    height: 130,
    width: 100,
  },
  header: {height: 50, backgroundColor: '#b63439', alignItems: 'center'},
  headerBox: {
    backgroundColor: '#b63439',
  },
});
export default ChooseAPlan;
