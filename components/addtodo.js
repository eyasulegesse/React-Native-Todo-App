import React, { useState } from 'react';

import { Text, View, TextInput, Button, StyleSheet } from 'react-native';

export default function AddTodo({ onAdd }) {
  const [textInput, setTextInput] = useState('');
  const addHandler = () => {
    onAdd(textInput);
  };
  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder='New Todo ....'
        onChangeText={(value) => setTextInput(value)}
      />

      <Button onPress={() => onAdd(textInput)} title='Add' color='coral' />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#bbb',
  },
});
