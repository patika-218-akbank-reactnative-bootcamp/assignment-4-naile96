import React from 'react';
import {SafeAreaView, Button, Input} from 'react-native-safe-area-context';

const Edit = () => {
  return (
    <SafeAreaView>
      <Input placeholder="First Name" />
      <Input placeholder="Last Name" />
      <Input placeholder="Username" />
      <Button text="Sign Up" onPress={null} />
    </SafeAreaView>
  );
};

export default Edit;
