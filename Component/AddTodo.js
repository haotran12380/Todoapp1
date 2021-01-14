import React, {useState} from 'react';
import {StyleSheet, Text, View, TextInput, Button} from 'react-native';

export default function AddTodo({sumitHanlder}) {
  const [text, setText] = useState('');
  const changeHandlder = (val) => {
    setText(val);
  };
  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder=" New Todos "
        onChangeText={changeHandlder}
      />
      <Button onPress={() => sumitHanlder(text)} title="add" color="coral" />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
});
