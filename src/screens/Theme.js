import {View, Button, Switch} from 'react-native';
import React, {useState} from 'react';

export default function Theme() {
  const [mode, setMode] = useState(false);

  return (
    <View>
      <Switch value={mode} onValueChange={() => setMode(value => !value)} />
      <View>
        <Button title="View Profile" />
      </View>
    </View>
  );
}
