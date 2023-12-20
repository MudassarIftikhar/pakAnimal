// ExampleComponent.js
import React from 'react';
import {View, Text, Button} from 'react-native';
import {useAuth} from './path/to/AuthContext';

const ExampleComponent = () => {
  const {user, isLoading, signOut} = useAuth();

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  return (
    <View>
      {user ? (
        <View>
          <Text>Welcome, {user.name}!</Text>
          <Button title="Sign Out" onPress={signOut} />
        </View>
      ) : (
        <Text>Not logged in</Text>
      )}
    </View>
  );
};

export default ExampleComponent;
