import React from 'react';
import {StyleSheet} from 'react-native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BrowsePost from '../../screens/browsePost';
const Stack = createNativeStackNavigator();
const PostBrowsTab = props => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="BrowsPost">
      <Stack.Screen
        name="BrowsPost"
        // eslint-disable-next-line react/no-unstable-nested-components
        component={() => <BrowsePost navigation={props.route.params} />}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({});
export default PostBrowsTab;
