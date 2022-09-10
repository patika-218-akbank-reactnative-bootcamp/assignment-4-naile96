import {View, Switch} from 'react-native';
import React, {useState} from 'react';
import NewButton from '../components/NewButton';

export default function Theme() {
  const [mode, setMode] = useState(false);

  return (
    <View>
      <Switch value={mode} onValueChange={() => setMode(value => !value)} />
      <View>
        <NewButton title="View Profile" />
      </View>
    </View>
  );
}
